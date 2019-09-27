import React from 'react';
import { StyleSheet, FlatList, View, Text,TouchableHighlight } from 'react-native';
import Weather from './Weather'
import ZipCodeScreen from  './ZipcodeScreen'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Weather</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation,getParem('zipCode');
        return (<Weather zipCode ={zipCode} />) (
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
                />
            </View>
        );
    }
}