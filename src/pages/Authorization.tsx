import React, {useState} from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';

export type AuthorizationType = {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void
}

export const Authorization = () => {

    const [error, setError] = useState<null | string>(null);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Authorization</Text>
            <Text style={styles.buttonText}>login</Text>
            <TextInput
                style={styles.input}
                // onChangeText={onChangeEmail}
                onChange={() => setError(null)}
                // value={email}
            />
            <Text style={styles.buttonText}>password</Text>
            <TextInput
                style={styles.input}
                // onChangeText={onChangePassword}
                onChange={() => setError(null)}
                // value={password}
                secureTextEntry={true}
                textContentType={'password'}
            />
            <TouchableOpacity
                style={styles.button}
                // onPress={login}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.error}>{error}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
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
