import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { 
    Button, 
    Card, 
    CardSection,
    Input 
} from './common'
class LoginForm extends Component {
    state = { email: ''};
    state = { password: '', error: ''}
// since our button will be called in future, we have to bind this method in button
    onButtonPress(){
        // Get the email and password from state
        const { email, password } = this.state;
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .catch(() =>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(()=>{
                console.log("fail");
                this.setState({error: 'Authentication Failed. '});
            });
        });
    }
    render() {
        const {inputFieldStyle} = styles
        return (
            <Card>
                <CardSection>
                        <Input 
                            placeholder="user@email.com"
                            label="Email"
                            value={this.state.email} //value has to pass to our input as a prop since we still to use that text
                            onChangeText={email => this.setState({ email })} // onChangeText has to be passed as well
                            />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry="true"
                        placeholder="password"
                        label="Password"
                        value={this.state.password} //value has to pass to our input as a prop since we still to use that text
                        onChangeText={password => this.setState({ password })} // onChangeText has to be passed as well
                        />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> 
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    inputFieldStyle:{
        height: 50,
        width: 100
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center'
    }
}
module.exports = LoginForm;