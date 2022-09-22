import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/logo.png')}/>
            <Image style={styles.image} source={require('../../assets/exit.png')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        height: 80,
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
