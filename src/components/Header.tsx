import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../hooks/useAppSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {setIsUserLogged} from '../store/auth/auth';

export const Header = () => {
    const dispatch = useAppDispatch();

    const isUserLogged = useAppSelector(state => state.auth.isUserLogged);

    const logout = () => {
        dispatch(setIsUserLogged(false));
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/logo.png')}/>
            {
                isUserLogged && <TouchableOpacity onPress={logout}>
                    <Image style={styles.image} source={require('../../assets/exit.png')}/>
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        height: 60,
        backgroundColor: '#f3d250',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 30,
        height: 30
    }
});
