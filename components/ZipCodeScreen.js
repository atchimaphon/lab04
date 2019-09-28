import React from 'react';
import { ImageBackground, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
//ข้อมูลcodeสถานที่ 
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Phayao', code: '56130' },
   ]
   //
   const ZipItem = ({place,code,navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
        <View style={styles.box_opacity}>
        <View style={styles.layout}>
        <View style={styles.box_opacity2}>
        <View style={styles.layout}>
            <Text style={styles.text2}>Province: </Text>
            <Text style={styles.text}>{place}       </Text>
        </View>
        </View>
        <View style={styles.box_opacity2}>
        <View style={styles.layout}>
            <Text style={styles.text2}>Zip code: </Text>
            <Text style={styles.text}>{code} </Text>
        </View>
        </View>
        </View>
        </View>
    </TouchableHighlight>
)

    const _keyExtractor = item => item.code 
    export default class ZipCodeScreen extends React.Component {
        static navigationOptions = {
            title: 'Choose a zip code',
          };
        render(){
            const {navigate} = this.props.navigation;
            return(
                <View>
                    <FlatList
                        data ={availableZipItems}
                        keyExtractor = {_keyExtractor}
                        renderItem = {
                            ({item}) => <ZipItem {...item} navigate={navigate}/>      
                        }              
                    />
                </View>
            )
        }
    }
    //stylesหน้าzipcode
    const styles = StyleSheet.create({
        container: { paddingTop: 0 },
        zipList:{
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        zipItem: {
         flexDirection:'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingRight: 10,
          paddingLeft: 10,
          marginBottom: 2,
          backgroundColor:'#FFDEAD'
        },
        zipPlace:{
            flex: 2,
            fontSize:15,  
        },
        zipCode:{
            flex: 1,
            fontSize:15,
        },
        layout: { 
            flexDirection: 'row', 
            flex: 1, 
            justifyContent: 'center', 
            marginTop: 15 
        },
        box_opacity: { 
            backgroundColor: 'black', 
            opacity: 0.5, 
            paddingTop: 10, 
            borderRadius: 10, 
            margin: 1 
        },
        box_opacity2: { 
            margin: 1, 
            marginBottom: 25 
        },
        text: { 
            textAlign: 'center', 
            color: 'white', 
            fontSize: 20, 
            marginBottom: 20 
        },
        texts: { 
            textAlign: 'center', 
            color: 'orange', 
            paddingLeft: 0, 
            fontSize: 15 
        },
        text2: { 
            textAlign: 'center', 
            color: 'orange', 
            fontSize: 20, 
            marginBottom: 20 
        },
      });