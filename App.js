import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ZipCodeScreen from "./components/ZipCodeScreen";
import WeatherScreen from "./components/WeatherScreen";


const RootStack = createStackNavigator(
  {
    Weather: { screen: WeatherScreen },
    ZipCode: { screen: ZipCodeScreen },
  },
  {
   initialRouteName: 'Weather',
   initialRouteParams: {ZipCode: '90110'},
  }
);

const App = createAppContainer(RootStack);
export default App;