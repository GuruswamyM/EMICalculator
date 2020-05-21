import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import ComponetsScreen from './src/screens/ComponetsScreen';
import EmiScreen from './src/screens/EmiScreen';
import CarLoanScreen from './src/screens/CarLoanScreen';
import HouseLoanScreen from './src/screens/HouseLoanScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component:ComponetsScreen,
    Emi:EmiScreen,
    CarLoan : CarLoanScreen,
    HouseLoan : HouseLoanScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);