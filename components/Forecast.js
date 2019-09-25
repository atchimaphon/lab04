import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return ( 
            <View >
            <Text style = { StyleSheet.text } > { this.props.main } </Text>  
            <Text style = { StyleSheet.text } > { this.props.description } </Text>  
            <Text style = { StyleSheet.text } > { this.props.temp } </Text>  
            <Text style = { StyleSheet.text } > °C </Text>  
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25, },
    backdrop: { width: '100%', height: '100%' },
    title: {
        fontSize: 30,
        color: '#000000',
    },
});