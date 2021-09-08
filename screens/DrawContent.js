import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
} from 'react-native-paper';

export function DrawContent(props) {
    return (
        <View>
            <Drawer.Section style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                <Avatar.Image size={130} source={require('../assets/images/sontungmtp.png')} />
                <Title style={{  color: '#9966FF', fontSize: 20, marginTop: 10 }}>Nguyễn Văn Mạnh</Title>
                <Caption style={{  fontSize: 16, marginBottom: 10 }}>Last login:1/6/2021</Caption>
                <View>
                    <Caption style={{fontSize: 16, marginBottom: 10 }}>Căn hộ</Caption>
                    <Caption style={{ fontSize: 16, marginBottom: 5 }}>A14-13</Caption>
                </View>
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item label="Trang chủ" onPress={() => { props.navigation.navigate('HomeTabs') }} />
                <Drawer.Item label="Phương tiện(ô tô, xe máy)" onPress={() => { props.navigation.navigate('MyTabsVehicle') }} />
                <Drawer.Item label="Yêu cầu chờ xử lý" onPress={() => { props.navigation.navigate('HandleRequestTabs') }} />
                <Drawer.Item label="Lịch sử sử dụng dịch vụ" onPress={() => { props.navigation.navigate('ServiceHistoryTabs') }} />
                <Drawer.Item label="Sổ tay tòa nhà" onPress={() => { props.navigation.navigate('BuildingHandBookTabs') }} />
                <Drawer.Item label="Đăng kí tạm trú, tạm vắng" onPress={() => { props.navigation.navigate('StayAbsentTabs') }} />
                <Drawer.Item label="Thông tin ban quản lí" onPress={() => { props.navigation.navigate('ManagementTabs') }} />
                <Drawer.Item label="Thiết lập tài khoản" onPress={() => { props.navigation.navigate('AccountSettingTabs') }} />
            </Drawer.Section>
        </View>
    )
}