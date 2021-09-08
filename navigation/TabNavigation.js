import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { HomeStack, FeedbackStack, NotificationStack, MarketStack, ProfileStack, VehicleStack, HandleRequestStack, ServiceHistoryStack, BuildingHandBookStack, StayAbsentStack, ManagementStack, AccountSettingStack } from './StackNavigation';
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
function MyTabsVehicle() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={VehicleStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
function HandleRequestTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HandleRequestStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
function ServiceHistoryTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={ServiceHistoryStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
function BuildingHandBookTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={BuildingHandBookStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
function StayAbsentTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={StayAbsentStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
function ManagementTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={ManagementStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={18} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={18} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={18} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={18} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={18} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
function AccountSettingTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: '#009933',
                inactiveTintColor: '#6B6B6B'
            }}
        >
            <Tab.Screen
                name="Home"
                component={AccountSettingStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Message"
                component={FeedbackStack}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Market"
                component={MarketStack}
                options={{
                    tabBarLabel: 'Đi chợ',
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}

export { HomeTabs, MyTabsVehicle, AccountSettingTabs, BuildingHandBookTabs, ServiceHistoryTabs, HandleRequestTabs, ManagementTabs, StayAbsentTabs };
