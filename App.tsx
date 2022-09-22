import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {Authorization} from './src/pages/Authorization';
import {Header} from './src/components/Header';
import {Main} from './src/components/Main';


export default function App() {

    const [isLogged, setIsLogged] = useState(false);

    return (

        <View style={styles.container}>
            <Header/>
            <View style={styles.wrapper}>
                {isLogged ? <Main/> : <Authorization/>}
                <StatusBar style="auto"/>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 35
    },
    wrapper: {
        padding: 20
    }
});
