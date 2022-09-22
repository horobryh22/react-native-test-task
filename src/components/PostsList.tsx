import React, {useEffect} from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {ArticleType, getUsers} from '../store/root/root';
import {useAppSelector} from '../hooks/useAppSelector';

export const PostsList = () => {

    const dispatch = useAppDispatch();

    const articles = useAppSelector(state => state.root.articles);
    const isUserLogged = useAppSelector(state => state.auth.isUserLogged);

    const isArticlesGetting = articles.every(articles => articles.body && articles.title);

    useEffect(() => {
        if (isUserLogged) {
            dispatch(getUsers());
        }
    }, [isUserLogged]);

    const render: ListRenderItem<ArticleType> = ({item}) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity>
                    <Text style={styles.name}>{`Author: ${item.name}`}</Text>
                    <Text style={styles.name}>{`Company: ${item.company}`}</Text>
                    <Text style={styles.name}>{`Title: ${item.title}`}</Text>
                    <Text style={styles.name}>{item.body}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    if (!isArticlesGetting) {
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={articles}
                renderItem={render}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    item: {
        marginVertical: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'blue',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: '600'
    },
    indicatorContainer: {
        marginTop: 300,
        justifyContent: "center"
    },
})