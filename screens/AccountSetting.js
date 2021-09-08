import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';

export default function AccountSetting({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Thiết lập tài khoản</Text>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.title}>Tài khoản của tôi</Text>
                <View style={styles.wrapGroup}>
                    <TouchableOpacity style={[styles.group, styles.textUnderline]} onPress={() => navigation.navigate('Profile')} activeOpacity={0.8}>
                        <Text>Hồ sơ của tôi</Text>
                        <AntDesign name="right" size={18} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.group} activeOpacity={0.8} onPress={() => navigation.navigate('FamilyScreen')}>
                        <Text>Gia đình</Text>
                        <AntDesign name="right" size={18} color="black"  />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Hỗ trợ</Text>
                <View style={styles.wrapGroup}>
                    <TouchableOpacity style={[styles.group, styles.textUnderline]} activeOpacity={0.8} onPress={() => navigation.navigate('ApartmentTerm')}>
                        <Text>Điều khoản chung cư</Text>
                        <AntDesign name="right" size={18} color="black"  />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.group} activeOpacity={0.8} onPress={() => navigation.navigate('Feedback')}>
                        <Text>Hài lòng với ABMS? Hãy đánh giá ngay!</Text>
                        <AntDesign name="right" size={18} color="black"  />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Cài đặt</Text>
                <View style={styles.wrapGroup}>
                    <TouchableOpacity style={styles.group} activeOpacity={0.8} onPress={() => navigation.navigate('Language')}>
                        <Text>Ngôn ngữ</Text>
                        <AntDesign name="right" size={18} color="black"  />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnLogout}>
                    <Button title="Đăng xuất" color="#FF6633" />
                </View>

            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 150,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        opacity: 0.4,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    test: {
        fontWeight:'700',
        fontSize: 18,
        color: 'white'
    },
    main: {
        padding: 15,
        flex: 1
    },
    title: {
        color: '#9966FF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    wrapGroup: {
        marginBottom: 20
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10
    },
    textUnderline: {
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
    btnLogout: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    }
});