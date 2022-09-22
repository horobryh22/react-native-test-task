import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {setAuthError, setIsUserLogged} from '../store/auth/auth';
import {useAppSelector} from '../hooks/useAppSelector';

export const Authorization = () => {

    const dispatch = useAppDispatch();

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const error = useAppSelector(state => state.auth.error);

    const login = () => {
        if (email === '123' && password === '123') {
            dispatch(setAuthError(null));
            dispatch(setIsUserLogged(true))
            return;
        }

        dispatch(setAuthError('Incorrect email or password'));
    }

    const handleChange = () => {
        if (error) {
            dispatch(setAuthError(null));
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Authorization</Text>
            <Text style={styles.buttonText}>login</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                onChange={handleChange}
                value={email}
            />
            <Text style={styles.buttonText}>password</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                onChange={handleChange}
                value={password}
                secureTextEntry={true}
                textContentType={'password'}
            />
            <Text style={styles.error}>{error}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={login}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 40,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'blue'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        width: 250,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'blue'
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#f3d250',
        padding: 10,
        width: 250,
        borderRadius: 10,
    },
    error: {
        marginTop: 10,
        color: 'red',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: 'blue',
        marginBottom: 10
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 16,
    }
});
