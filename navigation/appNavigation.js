import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddHomeExpenseScreen from '../screens/AddHomeExpenseScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen'>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="AddExpense" 
                component={AddExpenseScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="AddHomeExpenseScreen" 
                component={AddHomeExpenseScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="ExpensesScreen"
                component={ExpensesScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignIn"
                component={SignInScreen}
                options={{headerShown: false, presentation: 'modal'}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{headerShown: false, presentation: 'modal'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation