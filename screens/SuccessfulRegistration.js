import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';

export default function SuccessfulRegistration({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Yêu cầu chờ xử lý</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.confirm}>
                    <AntDesign name="arrowleft" size={40} color="#9966FF" />
                    <Text style={styles.textConfirm}>Đăng kí thành công</Text>
                </View>
                <View style={styles.wrapForm}>
                    <View style={styles.formContent}>
                        <View style={styles.formGroup}>
                            <Text style={styles.textGroup}>Dịch vụ:</Text>
                            <Text style={styles.textGroup}>BBQ</Text>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.textGroup}>Ngày:</Text>
                            <Text style={styles.textGroup}>12/6/2021</Text>
                        </View >
                        <View style={styles.formGroup}>
                            <Text style={styles.textGroup}>Từ: 16h</Text>
                            <Text style={styles.textGroup}>Đến: 20h</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Xác nhận" color="white" />
                    </View>
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
        height: 200,
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
    main: {
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    wrapForm: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textGroup: {
        fontSize: 20
    },
    wrapBtn: {
        padding: 10,
        backgroundColor: '#9966FF',
        marginTop: 15,
        borderRadius: 10
    }
});