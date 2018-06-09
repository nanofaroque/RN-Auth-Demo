import React, { Component } from 'react';
import { View } from 'react-native';
import { 
    Button, 
    Card, 
    CardSection,
    Input 
} from './common'
class LoginForm extends Component {
    state = { text: ''};
    render() {
        const {inputFieldStyle} = styles
        return (
            <Card>
                <CardSection>
                        <Input 
                            label="Email"
                            value={this.state.text} //value has to pass to our input as a prop since we still to use that text
                            onChangeText={text => this.setState({ text})} // onChangeText has to be passed as well
                            />
                </CardSection>
                <CardSection/>

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