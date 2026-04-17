import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

import { RootStackParamList, TabParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// 👉 STACK ДЛЯ HOME
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

// 👉 STACK ДЛЯ SEARCH
function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchMain" component={SearchScreen} />
        </Stack.Navigator>
    );
}

// 👉 STACK ДЛЯ NOTIFICATIONS
function NotificationsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NotificationsMain" component={NotificationsScreen} />
        </Stack.Navigator>
    );
}

// 👉 STACK ДЛЯ PROFILE
function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileMain" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

// 👉 ИКОНКИ + BADGE
function TabIcon({ name, color, size, badge }: any) {
    return (
        <View>
            <Ionicons name={name} size={size} color={color} />
            {badge && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badge}</Text>
                </View>
            )}
        </View>
    );
}

// 👉 ГЛАВНЫЙ НАВИГАТОР
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#0066cc',
                    tabBarInactiveTintColor: '#999',
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon name="home" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Search"
                    component={SearchStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon name="search" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Notifications"
                    component={NotificationsStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon name="notifications" color={color} size={size} badge={5} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon name="person" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
    },
});