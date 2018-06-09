import React, { Component } from 'react';
import { View } from 'react-native';
import { 
    Button, 
    Card, 
    CardSection,
    Input 
} from './common'
class LoginForm extends Component {
    state = { email: ''};
    state = { password: ''}
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

                <CardSection>
                    <Button>
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
    }
}
module.exports = LoginForm;