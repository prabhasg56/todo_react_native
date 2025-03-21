import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TodoScreen from '../screens/ToDo/TodoScreen';

import BottomTabRoutes from './BottomTabRoutes';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

export function TodoStack({ navigation, route }) {
    return (
        <Stack.Navigator initialRouteName='TodoScreen'>
            <Stack.Screen name="TodoScreen" component={TodoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function AuthStack({ navigation, route }) {
    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function ProfileStack({ navigation, route }) {
    return (
        <Stack.Navigator initialRouteName='ProfileScreen'>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}


const StackRoutes = () => {
    const [initialRoute, setInitialRoute] = useState(null);

    const routeArray = [

        {
            name: "TodoStack",
            component: TodoStack,
            options: { headerShown: false },
        },
        {
            name: "AuthStack",
            component: AuthStack,
            options: { headerShown: false },
        },
        {
            name: "ProfileStack",
            component: ProfileStack,
            options: { headerShown: false },
        },
        {
            name: "BottomTabRoutes",
            component: BottomTabRoutes,
            options: { headerShown: false },
        }
    ];

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('user');
                if (token) {
                    setInitialRoute('BottomTabRoutes');
                } else {
                    setInitialRoute('AuthStack');
                }
            } catch (error) {
                console.error('Error getting token:', error);
                setInitialRoute('AuthStack'); // default to AuthStack in case of error
            }
        };

        checkToken();
    }, []);

    if (!initialRoute) {
        // Return a loader or null while the token is being checked
        return null;
    }


    return (
        <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#2157AD" },
                headerTitle: null,
            }}
        >
            {routeArray.map((route) => (
                <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={route.options}
                />
            ))}
        </Stack.Navigator>
    )
}

export default StackRoutes

const styles = StyleSheet.create({})