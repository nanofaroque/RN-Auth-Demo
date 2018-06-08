import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => { // this onPress is coming from parent, Album detail
    const { buttonStyle, textStyle } = stylus;
    return (
        <TouchableOpacity 
        style={buttonStyle}
        onPress={onPress}
        >
        <Text style={textStyle}>
            {children}
        </Text>
        </TouchableOpacity>
    );
};
const stylus = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
};
export { Button }
