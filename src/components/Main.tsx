import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../hooks/useAppSelector';
import {Authorization} from '../pages/Authorization';
import {PostsList} from '../components/PostsList';

export const Main = () => {

    const isUserLogged = useAppSelector(state => state.auth.isUserLogged);

    return (
        <View>
            {isUserLogged ? <PostsList/> : <Authorization/>}
        </View>
    );
};