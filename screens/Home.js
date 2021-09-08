import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeImage from '../assets/images/bgscreen.png';
import Header from '../components/Header';

export default function Home({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <ImageBackground source={HomeImage} style={styles.image}>
                <View style={styles.featureList}>
                    <TouchableOpacity style={styles.featureItem} onPress={() => navigation.navigate('NotificationHome')} activeOpacity={0.8}>
                        <Text style={styles.title}>Thông báo chung</Text>
                        <AntDesign name="right" size={18} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureItem} onPress={() => navigation.navigate('ServiceRequest')} activeOpacity={0.8}>
                        <Text style={styles.title}>Yêu cầu dịch vụ</Text>
                        <AntDesign name="right" size={18} color="white" style={styles.icon} />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.featureItem} onPress={() => navigation.push('ProgressTracking')} activeOpacity={0.8}>
                        <Text style={styles.title}>Theo dõi tiến trình</Text>
                        <AntDesign name="right" size={18} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureItem} onPress={() => navigation.push('FeeNotice')} activeOpacity={0.8}>
                        <Text style={styles.title}>Thanh toán hóa đơn</Text>
                        <AntDesign name="right" size={18} color="white" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.overlay}>

                </View>
            </ImageBackground>
            {/* <View style={styles.overlay}></View> */}
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 0,
        flex: 1,
    },
    wrapContent: {
        flex: 1,
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    featureList: {
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'absolute',
        zIndex: 9,
        left: 30
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginBottom: 20,
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    overlay: {
        backgroundColor: '#000',
        opacity: .7,
        width: '100%',
        height: '100%'
    }
})