import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawContent } from '../screens/DrawContent';
import { AccountSettingTabs, BuildingHandBookTabs, HandleRequestTabs, HomeTabs, ManagementTabs, MyTabsVehicle, ServiceHistoryTabs, StayAbsentTabs } from './TabNavigation';
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawContent {...props} />}>
            <Drawer.Screen name="HomeTabs" component={HomeTabs} />
            <Drawer.Screen name="MyTabsVehicle" component={MyTabsVehicle} />
            <Drawer.Screen name="HandleRequestTabs" component={HandleRequestTabs} />
            <Drawer.Screen name="ServiceHistoryTabs" component={ServiceHistoryTabs} />
            <Drawer.Screen name="BuildingHandBookTabs" component={BuildingHandBookTabs} />
            <Drawer.Screen name="StayAbsentTabs" component={StayAbsentTabs} />
            <Drawer.Screen name="ManagementTabs" component={ManagementTabs} />
            <Drawer.Screen name="AccountSettingTabs" component={AccountSettingTabs} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigation;