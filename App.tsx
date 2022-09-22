import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Header} from './src/components/Header';
import {Main} from './src/components/Main';
import {Provider} from 'react-redux';
import {store} from './src/store/store';


export default function App() {

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.wrapper}>
                    <Main/>
                    <StatusBar backgroundColor={'#fff'}/>
                </View>
            </View>
        </Provider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 35,
        paddingBottom: 55
    },
    wrapper: {
        paddingHorizontal: 20
    },
});
