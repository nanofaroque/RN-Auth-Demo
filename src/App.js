import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyDSGnu2w08CroxYxnWs4_0kkiRE_JiZDCI',
                authDomain: 'rn-auth-f98da.firebaseapp.com',
                databaseURL: 'https://rn-auth-f98da.firebaseio.com',
                projectId: 'rn-auth-f98da',
                storageBucket: 'rn-auth-f98da.appspot.com',
                messagingSenderId: '613169278801'
            });
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication'/>
                <LoginForm/>
            </View>
        )
    }
}
export default App;