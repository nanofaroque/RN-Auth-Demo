import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { 
    Button, 
    Card, 
    CardSection,
    Input, 
    Spinner
} from './common'
class LoginForm extends Component {
    state = { email: ''};
    state = { password: '', error: '', loading: false}
// since our button will be called in future, we have to bind this method in button
    onButtonPress(){
        // Get the email and password from state
        const { email, password } = this.state;
        this.setState({error:''});
        this.setState({loading:true});
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(result=>{
            this.onLoginSuccess.bind(this);
            console.log(JSON.stringify(result));
        })
        .catch(() =>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        })
        
    }
    onLoginFail(){
        this.setState({
            loading: false,
            error: 'Authentication Failed'
            });
    }
    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
            });
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size = "small"/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}> 
                Log In
            </Button>
        )
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
                    {this.renderButton()};
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