import React from 'react'
import { 
  StyleSheet,
  Image
} from 'react-native'

import { 
  CartScreen,
  FoodDetailScreen,
  HomeScreen,
  LandingScreen,
  RestaurantScreen,
  SearchScreen,
  LoginScreen,
  OrderScreen,
  OrderDetailScreen,
  AccountScreen,
  OfferScreen
} from './src/screens'

import { Provider } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { store } from './src/redux'

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator({
      Landing: LandingScreen
    }, {
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },
  homeStack: createBottomTabNavigator({
    Home: {
      screen: createStackNavigator({
        HomePage: HomeScreen,
        SearchPage: SearchScreen,
        RestaurantPage: RestaurantScreen,
        FoodDetailPage: FoodDetailScreen
      }, {
        defaultNavigationOptions: {
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true 
          ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png') 
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    Offer: {
      screen: createStackNavigator({
        OfferPage: OfferScreen
      }, {
        defaultNavigationOptions: {
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true 
          ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png') 
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    Cart: {
      screen: createStackNavigator({
        CartPage: CartScreen,
        LoginPage: LoginScreen,
        OrderPage: OrderScreen,
        OrderDetailPage: OrderDetailScreen
      }, {
        defaultNavigationOptions: {
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true 
          ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png') 
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    Account: {
      screen: createStackNavigator({
        AccountPage: AccountScreen,
        LoginPage: LoginScreen,
        ViewOrderFromAccountPage: OrderScreen,
        OrderDetailPage: OrderDetailScreen
      }, {
        defaultNavigationOptions: {
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true 
          ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png') 
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    }
  })
})

const AppNavigation = createAppContainer(switchNavigator)

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30
  }
})
