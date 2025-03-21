import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TodoStack, ProfileStack } from './StackRoutes';
import { lightColor, primaryColor } from '../styles/GlobalStyles';

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => {
    const tabRoutes = [
        {
            name: "ToDo",
            component: TodoStack,
            label: "ToDo",
            width: 30,
            height: 30,
            header: false,
        },
        {
            name: "Profile",
            component: ProfileStack,
            label: "Profile",
            width: 30,
            height: 30,
            header: false,
        },

    ]
    return (
        <Tab.Navigator
            initialRouteName="ToDo"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let routeName = route.name;
                    let iconComponent;

                    if (routeName === "ToDo") {
                        iconName = focused ? 'home' : 'home-outline';
                        iconComponent = <MaterialCommunityIcons name={iconName} size={size} color={color} />

                    } else if (routeName === "Profile") {
                        iconName = focused ? 'CodeSandbox' : 'CodeSandbox';
                        iconComponent = <AntDesign name={iconName} size={size} color={color} />
                    } 

                    // You can return any component that you like here!
                    return iconComponent;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor:'#0c3841',
                tabBarStyle:{
                    // backgroundColor:'#e9f8fb'
                    backgroundColor: lightColor

                }
            })}
        >
            {
                tabRoutes?.map((tab) => {
                    return (
                        <Tab.Screen
                            name={tab?.name}
                            component={tab?.component}
                            key={tab?.name}

                            options={{
                                tabBarLabel: tab?.label,
                                headerShown: tab?.header,
                            }}
                        />
                    )
                })
            }

        </Tab.Navigator>
    )
}

export default BottomTabRoutes

const styles = StyleSheet.create({})