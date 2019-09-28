import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";
//เป็นส่วนแสดงข้อความที่รับมมา จากคลาสอืนที่ส่ง state มา 
//มีการเปลี่ยนจาก.stste เป็น .props เนื่องจาก .state ต้องอยู่ในไฟล์ที่ประกาศเท่านั้น
export default class Forecast extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.bk}>
                <Text style={styles.property}>{this.props.location}</Text>
                <Text style={styles.property}>{this.props.main}</Text>
                <Text style={styles.property}>Status : {this.props.description}</Text>
                <Text style={styles.property}>Temperature : {this.props.temp} °C</Text>
                <Text style={styles.property}>Relative humidity : {this.props.humidity}%</Text>
                <Text style={styles.property}>Highest temperature : {this.props.temp_max} °C</Text>
                <Text style={styles.property}>Lowest temperature : {this.props.temp_min} °C</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bk:{
        backgroundColor: "#FFF5EE",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.75,  
        width:'auto',
        height: 'auto',
        paddingTop: 28,
    },
    container: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    property:{
        fontSize:20,
    }

  });