import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../hooks/useAppSelector';
import {Authorization} from '../pages/Authorization';

export const Main = () => {

    const isUserLogged = useAppSelector(state => state.auth.isUserLogged);

    return (
        <View>

            {isUserLogged ? <Text>Open up App.tsx to start working on your app!</Text> : <Authorization/>}
        </View>
    );
};