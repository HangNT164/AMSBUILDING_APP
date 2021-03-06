import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import { Provider, useDispatch, useSelector } from 'react-redux';
import ChangePassword from './components/menu-profile/ChangePassword';
import ChangeProfile from './components/menu-profile/ChangeProfile';
import SettingProfile from './components/menu-profile/SettingProfile';
import Notification from './components/notification-home/Notification';
import AccessCard from './components/service/AccessCard';
import ApartmentCleaning from './components/service/ApartmentCleaning';
import BBQ from './components/service/BBQ';
import Covid from './components/service/Covid';
import FootballPitche from './components/service/FootballPitche';
import Laundry from './components/service/Laundry';
import Parking from './components/service/Parking';
import Party from './components/service/Party';
import Pool from './components/service/Pool';
import Repair from './components/service/Repair';
import Tennis from './components/service/Tennis';
import { store } from './redux/store';
import FeeNotice from './screens/FeeNotice';
import Home from './screens/Home';
import Login from './screens/Login';
import MenuProfile from './screens/MenuProfile';
import Payment from './screens/Payment';
import ProfileScreen from './screens/ProfileScreen';
import ProgressTracking from './screens/ProgressTracking';
import ServiceRequest from './screens/ServiceRequest';
import { addUser } from './redux/UserSlice';
import API from './components/lib/API';
import PoolSuccess from './components/service/PoolSuccess';
import DetailProcess from './screens/DetailProcess';
import StayAbsent from './screens/StayAbsent';
import ApartmentProfile from './screens/ApartmentProfile';
import Feedback from './screens/Feedback';
import PriceRequest from './screens/PriceRequest';
import LoginEmailScreen from './screens/LoginEmailScreen';
import LoginResetPassword from './screens/LoginResetPassword';
import NotificationScreen from './screens/NotificationScreen';
import FamilyScreen from './screens/FamilyScreen'
import NotificationTab from './NotificationTab'
import { Image } from 'react-native';
import QRScreen from './screens/QRScreen';
import Market from './screens/Market';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor="red"
        />
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <AppWrapper />
      </SafeAreaView>
    </Provider>
  );
}

function AppWrapper() {
  const [accountId, setAccountId] = useState()
  const [isLogin, setIsLogin] = useState(false);
  const token = useSelector(state => state?.user?.token);
  let dispatch = useDispatch();
  const search = async () => {
    let path = `/tenant/detail/account`;
    let resp = await API.authorizedJSONGET(path, token);
    if (resp.ok) {
      let response = await resp.json();
      console.log(response)
      dispatch(addUser(response))
    }
  }
  const handleLogin = () => {
    setIsLogin(!isLogin)
  }

  const accountIdRedux = useSelector(state => state.user.accountId);
  let handleAccountId = () => {
    setAccountId(accountIdRedux)
  }
  useEffect(() => {
    handleAccountId()
    search()
  }, [])
  useEffect(() => {
    handleAccountId()
    search()
  }, [isLogin])

  return (
    <>

      {accountId ? <AppContainer handleLogin={handleLogin} /> : <AnonymousUser handleLogin={handleLogin} />}
      {/* <AppContainer handleLogin={handleLogin} /> */}

    </>
  );
}
function AnonymousUser({ handleLogin }) {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Login" children={() => <Login handleLogin={handleLogin} />} options={{
            headerShown: false
          }} />
          <Stack.Screen name="LoginEmailScreen" children={() => <LoginEmailScreen />}
            options={{
              title: 'X??c nh???n email',
              headerStyle: {
                backgroundColor: '#333333'
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen name="LoginResetPassword" children={() => <LoginResetPassword />}
            options={{
              title: 'Qu??n m???t kh???u',
              headerStyle: {
                backgroundColor: '#333333'
              },
              headerTintColor: '#fff'
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>

  )
}

function AppContainer({ handleLogin }) {
  return (
    <>
      <BottomTabNavigation handleLogin={handleLogin} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  )
}
function BottomTabNavigation({ handleLogin }) {
  const [isRead, setRead] = useState(false)
  const handleRead = () => {
    setRead(!isRead)
  }
  return (
    <NavigationContainer >
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {
            backgroundColor: '#fff',

            // position: 'absolute'
          },
          activeTintColor: 'red',

        }}

      >
        <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{
          tabBarLabel: "Trang ch???",
          tabBarIcon: ({ color }) =>
            (<Feather name="home" size={25} color={color} />),
        }} />

        <Tab.Screen name="NotificationStack" children={() => <NotificationStackScreen handleRead={handleRead} />} options={{
          tabBarLabel: "Th??ng b??o",
          tabBarIcon: ({ color }) =>
            (<NotificationTab color={color} isRead={isRead} />)
        }} />
        <Tab.Screen name="MessageStack" component={MessageStackScreen} options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) =>
          (
            <View style={{ width: 40, height: 40, marginTop: 15, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} >
              <MaterialCommunityIcons name="qrcode-scan" size={25} color="white" />
            </View>
          ),
        }} />
        <Tab.Screen name="MarketStack" component={MarketStackScreen} options={{
          tabBarLabel: "?????t h??ng",
          tabBarIcon: ({ color }) =>
            (<Feather name="shopping-bag" size={25} color={color} />),
        }} />
        <Tab.Screen name="ProfileStack" children={() => <ProfileStackScreen handleLogin={handleLogin} />} options={{
          tabBarLabel: "C?? nh??n",
          tabBarIcon: ({ color }) =>
            (<Feather name="user" size={25} color={color} />),
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="NotificationHome" component={Notification}
        options={{
          title: 'Th??ng b??o',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FeeNotice" component={FeeNotice} options={{
        title: 'Th??ng b??o ph??',
        headerStyle: {
          backgroundColor: '#333333'
        },
        headerTintColor: '#fff'
      }} />
      <Stack.Screen name="Payment" component={Payment} options={{
        title: 'Thanh to??n',
        headerStyle: {
          backgroundColor: '#333333'
        },
        headerTintColor: '#fff'
      }} />
      <Stack.Screen name="ServiceRequest" component={ServiceRequest}
        options={{
          title: 'Y??u c???u d???ch v???',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'

        }}
      />
      <Stack.Screen name="PriceRequest" component={PriceRequest}
        options={{
          title: 'B??o gi?? d???ch v???',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'

        }}
      />
      <Stack.Screen name="BBQ" component={BBQ}
        options={{
          title: 'BBQ',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Repair" component={Repair}
        options={{
          title: 'S???a ch???a',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Parking" component={Parking}
        options={{
          title: 'G???i xe',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ApartmentCleaning" component={ApartmentCleaning}
        options={{
          title: 'V??? sinh',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Laundry" component={Laundry}
        options={{
          title: 'Gi???t l??',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Party" component={Party}
        options={{
          title: '?????t ti???c',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Covid" component={Covid}
        options={{
          title: 'Covid-19',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="AccessCard" component={AccessCard}
        options={{
          title: 'Th??? ra v??o',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Tennis" component={Tennis}
        options={{
          title: 'Tennis',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Pool" component={Pool}
        options={{
          title: 'H??? b??i',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="PoolSuccess" component={PoolSuccess}
        options={{
          title: 'H??? b??i',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FootballPitche" component={FootballPitche}
        options={{
          title: 'S??n b??ng',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ProgressTracking" component={ProgressTracking}
        options={{
          title: 'Theo d??i ti???n tr??nh',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="DetailProcess" component={DetailProcess}
        options={{
          title: 'Chi ti???t ti???n tr??nh',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  )
}

function MessageStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={QRScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function NotificationStackScreen({ handleRead }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" children={() => <NotificationScreen handleRead={handleRead} />}
        options={{
          title: 'Th??ng b??o',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }} />
    </Stack.Navigator>
  )
}

function MarketStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Market} options={{
        title: '?????t h??ng',
        headerStyle: {
          backgroundColor: '#333333'
        },
        headerTintColor: '#fff'
      }} />
    </Stack.Navigator>
  )
}
function ProfileStackScreen({ handleLogin }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileStack" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MenuProfile" children={() => <MenuProfile handleLogin={handleLogin} />}
        options={{
          title: 'T??i kho???n c???a t??i',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="SettingProfile" component={SettingProfile}
        options={{
          title: 'C??i ?????t',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ChangeProfile" component={ChangeProfile}
        options={{
          title: 'Th??ng tin',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="StayAbsent" component={StayAbsent}
        options={{
          title: 'T???m tr?? - T???m v???ng',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ApartmentProfile" component={ApartmentProfile}
        options={{
          title: 'Gi???i thi???u chung c??',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FamilyScreen" component={FamilyScreen}
        options={{
          title: 'Gia ????nh',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FeedBack" component={Feedback}
        options={{
          title: '????nh gi??',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword}
        options={{
          title: 'Thay ?????i m???t kh???u',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  )
}