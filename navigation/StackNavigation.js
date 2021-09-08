import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Market from '../screens/Market';
import Feedback from '../screens/Feedback';
import Notification from '../screens/Notification';
import Home from '../screens/Home';
import ServiceRequest from '../screens/ServiceRequest';
import ProgressTracking from '../screens/ProgressTracking';
import FeeNotice from '../screens/FeeNotice';
import Payment from '../screens/Payment';
import HandleRequest from '../screens/HandleRequets';
import DetailRequest from '../screens/DetailRequest';
import AccountSetting from '../screens/AccountSetting';
import ApartmentTerm from '../screens/ApartmentTerm';
import Vehicle from '../screens/Vehicle';
import ServiceHistory from '../screens/ServiceHistory';
import BuildingHandBook from '../screens/BuildingHandBook';
import StayAbsent from '../screens/StayAbsent';
import Management from '../screens/Management';
import DetailProcess from '../screens/DetailProcess';
import Repair from '../screens/Repair';
import BBQ from '../screens/BBQ';
import ApartmentCleaning from '../screens/ApartmentCleaning';
import Laundry from '../screens/Laundry';
import Party from '../screens/Party';
import Covid from '../screens/Covid';
import AccessCard from '../screens/AccessCard';
import Tennis from '../screens/Tennis';
import Pool from '../screens/Pool';
import FootballPitche from '../screens/FootballPitche';
import Parking from '../screens/Parking';
import ServiceQuote from '../screens/ServiceQuote';
import SuccessfulRegistration from '../screens/SuccessfulRegistration';
import ServicePrice from '../screens/ServicePrice';
import FamilyScreen from '../screens/FamilyScreen';
import Language from '../screens/Language';
import EditName from '../screens/EditName';
import EditEmail from '../screens/EditEmail';
import EditDob from '../screens/EditDob';
import EditPhone from '../screens/EditPhone';
import EditIdentification from '../screens/EditIdentification';
import ChangePassword from '../screens/ChangePassword';
import ResetPassword from '../screens/ResetPassword';
import ForgetPassword from '../screens/ForgetPassword';
import Cart from '../screens/Cart';
import SuccessfulIdentify from '../screens/SuccessfulIdentify';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditName" component={EditName} />
            <Stack.Screen name="EditDob" component={EditDob} />
            <Stack.Screen name="EditEmail" component={EditEmail} />
            <Stack.Screen name="EditPhone" component={EditPhone} />
            <Stack.Screen name="EditIdentification" component={EditIdentification} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

        </Stack.Navigator>
    );
}
function MarketStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Market" component={Market} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    );
}
function FeedbackStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Payment" component={Feedback} />
        </Stack.Navigator>
    );
}
function NotificationStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    );
}
function HomeStack({ navigation, route }) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName == "Home") {
            navigation.setOptions({ tabBarVisible: true });
        } else {
            navigation.setOptions({ tabBarVisible: false });
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="ServiceRequest" component={ServiceRequest} />
            <Stack.Screen name="ProgressTracking" component={ProgressTracking} />
            <Stack.Screen name="FeeNotice" component={FeeNotice} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Repair" component={Repair} />
            <Stack.Screen name="BBQ" component={BBQ} />
            <Stack.Screen name="ApartmentCleaning" component={ApartmentCleaning} />
            <Stack.Screen name="Laundry" component={Laundry} />
            <Stack.Screen name="Party" component={Party} />
            <Stack.Screen name="Covid" component={Covid} />
            <Stack.Screen name="AccessCard" component={AccessCard} />
            <Stack.Screen name="Tennis" component={Tennis} />
            <Stack.Screen name="Pool" component={Pool} />
            <Stack.Screen name="FootballPitche" component={FootballPitche} />
            <Stack.Screen name="Parking" component={Parking} />
            <Stack.Screen name="ServiceQuote" component={ServiceQuote} />
            <Stack.Screen name="SuccessfulRegistration" component={SuccessfulRegistration} />
            <Stack.Screen name="ServicePrice" component={ServicePrice} />
            <Stack.Screen name="DetailProcess" component={DetailProcess} />
            <Stack.Screen name="SuccessfulIdentify" component={SuccessfulIdentify} />
        </Stack.Navigator>
    );
}
function HandleRequestStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HandleRequest" component={HandleRequest} />
            <Stack.Screen name="DetailRequest" component={DetailRequest} />
        </Stack.Navigator>
    );
}


function AccountSettingStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="AccountSetting" component={AccountSetting} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ApartmentTerm" component={ApartmentTerm} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="FamilyScreen" component={FamilyScreen} />
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="EditName" component={EditName} />
            <Stack.Screen name="EditDob" component={EditDob} />
            <Stack.Screen name="EditEmail" component={EditEmail} />
            <Stack.Screen name="EditPhone" component={EditPhone} />
            <Stack.Screen name="EditIdentification" component={EditIdentification} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    );
}
function VehicleStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Vehicle" component={Vehicle} />
        </Stack.Navigator>
    );
}
function ServiceHistoryStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ServiceHistory" component={ServiceHistory} />
        </Stack.Navigator>
    );
}
function BuildingHandBookStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="BuildingHandBook" component={BuildingHandBook} />
        </Stack.Navigator>
    );
}
function StayAbsentStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="StayAbsent" component={StayAbsent} />
        </Stack.Navigator>
    );
}
function ManagementStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Management" component={Management} />
        </Stack.Navigator>
    );
}
function DetailProcessTracking() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="DetailProcess" component={DetailProcess} />
        </Stack.Navigator>
    );
}
export { ProfileStack, DetailProcessTracking, MarketStack, FeedbackStack, NotificationStack, HomeStack, HandleRequestStack, AccountSettingStack, VehicleStack, ServiceHistoryStack, BuildingHandBookStack, StayAbsentStack, ManagementStack }