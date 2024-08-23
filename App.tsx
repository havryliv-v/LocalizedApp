import React, {useState} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {View, Text, StyleSheet, I18nManager} from 'react-native'
import {SignUp} from './src/screens/sign-up'
import './src/i18n'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SignIn} from './src/screens/sign-in'
export type MainStackTypeParamList = {
  SIGNUP_SCREEN: undefined
  SIGNIN_SCREEN: undefined
  SETTINGS_SCREEN: undefined
  MAIN_SCREEN: undefined
}

const Stack = createNativeStackNavigator<MainStackTypeParamList>()
I18nManager.allowRTL(true)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SIGNUP_SCREEN"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="SIGNUP_SCREEN"
          component={SignUp}
          options={{title: 'SignUp'}}
        />
        <Stack.Screen
          name="SIGNIN_SCREEN"
          component={SignIn}
          options={{title: 'SignIn'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
