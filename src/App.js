import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null}
    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyDSGnu2w08CroxYxttnWs4_0kkiRE_JiZDCI',
                authDomain: 'rn-auth-f98da.firebaseapp.com',
                databaseURL: 'https://rn-auth-f98da.firebaseio.com',
                projectId: 'auth-f98da',
                storageBucket: 'auth-f98da.appspot.com',
                messagingSenderId: '61316927908801'
            });
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn : true });
            }else{
                this.setState({ loggedIn: false });
            }
        })
    }
    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (
                <Button onPress={
                    ()=> firebase.auth().signOut()
                }> Log Out </Button>
            );
            case false: 
                return <LoginForm/>
            default: 
            return <Spinner size="large"/>;

        }
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        )
    }
}
export default App;