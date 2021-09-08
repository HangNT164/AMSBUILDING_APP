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
              title: 'Xác nhận email',
              headerStyle: {
                backgroundColor: '#333333'
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen name="LoginResetPassword" children={() => <LoginResetPassword />}
            options={{
              title: 'Quên mật khẩu',
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
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color }) =>
            (<Feather name="home" size={25} color={color} />),
        }} />

        <Tab.Screen name="NotificationStack" children={() => <NotificationStackScreen handleRead={handleRead} />} options={{
          tabBarLabel: "Thông báo",
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
          tabBarLabel: "Đặt hàng",
          tabBarIcon: ({ color }) =>
            (<Feather name="shopping-bag" size={25} color={color} />),
        }} />
        <Tab.Screen name="ProfileStack" children={() => <ProfileStackScreen handleLogin={handleLogin} />} options={{
          tabBarLabel: "Cá nhân",
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
          title: 'Thông báo',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FeeNotice" component={FeeNotice} options={{
        title: 'Thông báo phí',
        headerStyle: {
          backgroundColor: '#333333'
        },
        headerTintColor: '#fff'
      }} />
      <Stack.Screen name="Payment" component={Payment} options={{
        title: 'Thanh toán',
        headerStyle: {
          backgroundColor: '#333333'
        },
        headerTintColor: '#fff'
      }} />
      <Stack.Screen name="ServiceRequest" component={ServiceRequest}
        options={{
          title: 'Yêu cầu dịch vụ',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'

        }}
      />
      <Stack.Screen name="PriceRequest" component={PriceRequest}
        options={{
          title: 'Báo giá dịch vụ',
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
          title: 'Sửa chữa',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Parking" component={Parking}
        options={{
          title: 'Gửi xe',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ApartmentCleaning" component={ApartmentCleaning}
        options={{
          title: 'Vệ sinh',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Laundry" component={Laundry}
        options={{
          title: 'Giặt là',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="Party" component={Party}
        options={{
          title: 'Đặt tiệc',
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
          title: 'Thẻ ra vào',
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
          title: 'Hồ bơi',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="PoolSuccess" component={PoolSuccess}
        options={{
          title: 'Hồ bơi',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FootballPitche" component={FootballPitche}
        options={{
          title: 'Sân bóng',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ProgressTracking" component={ProgressTracking}
        options={{
          title: 'Theo dõi tiến trình',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="DetailProcess" component={DetailProcess}
        options={{
          title: 'Chi tiết tiến trình',
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
          title: 'Thông báo',
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
        title: 'Đặt hàng',
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
          title: 'Tài khoản của tôi',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="SettingProfile" component={SettingProfile}
        options={{
          title: 'Cài đặt',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ChangeProfile" component={ChangeProfile}
        options={{
          title: 'Thông tin',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="StayAbsent" component={StayAbsent}
        options={{
          title: 'Tạm trú - Tạm vắng',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ApartmentProfile" component={ApartmentProfile}
        options={{
          title: 'Giới thiệu chung cư',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FamilyScreen" component={FamilyScreen}
        options={{
          title: 'Gia đình',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="FeedBack" component={Feedback}
        options={{
          title: 'Đánh giá',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword}
        options={{
          title: 'Thay đổi mật khẩu',
          headerStyle: {
            backgroundColor: '#333333'
          },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  )
}