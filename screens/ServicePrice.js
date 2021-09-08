import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';

export default function ServicePrice({ navigation }) {
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
                    <Text style={styles.textConfirm}>Vui lòng xác nhận</Text>
                </View>
                <View style={styles.detail}>
                    <ScrollView style={styles.detailList}>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>2000000</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>200</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>2000000</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>200</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailText}>Thay vòi nước</Text>
                            <Text style={styles.detailText}>2000000</Text>
                        </View>
                    </ScrollView>
                    <View style={[styles.detailItem, styles.lastItem]}>
                        <Text style={styles.detailTotal}>Tổng tiền</Text>
                        <Text style={styles.detailTotal}>2200000</Text>
                    </View>
                </View>
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Xác nhận" color="white" onPress={() => navigation.navigate('DetailProcess')} />
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
    detailList: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        height: 100
    },
    detail: {
        borderColor: '#666666',
        borderWidth: 2,
        padding: 10
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    lastItem: {
        marginTop: 20
    },
    detailTotal: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#9966FF'
    },
    detailText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    wrapBtn: {
        padding: 10,
        backgroundColor: '#9966FF',
        marginTop: 15,
        borderRadius: 10
    }
});