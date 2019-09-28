import Weather from "./Weather";
import React, { Component } from "react";
import {Button} from"react-native";

export default class WeatherScreen extends React.Component{
    
    static navigationOptions = ({navigation}) => {
        return{
            headerTitle: 'Weather', //แสดง Weather ในส่วนheadด้านบน
            headerRight: <Button title="Change ZIP" onPress={() => {navigation.navigate('ZipCode')}}/> //สร้างปุ่มเพื่อlinKไปยังหน้าzipcode
        }  
    }

    render(){
        const zipCode = this.props.navigation.getParam('ZipCode')
        console.log(zipCode);
                return (<Weather zipCode={zipCode}/>)
    };
}