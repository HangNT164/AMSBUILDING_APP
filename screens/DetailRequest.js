import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';
export default function DetailRequest({ navigation }) {
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
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
                        <AntDesign name="arrowleft" size={25} color="#9966FF" />
                    </TouchableOpacity>
                    <Text style={styles.textConfirm}>Vui lòng chờ xác nhận</Text>
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
        fontSize: 18,
        marginLeft: 10
    },
    test: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
    detailList: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        height: 150
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
        marginBottom: 10
    },
    lastItem: {
        marginTop: 20
    },
    detailTotal: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#9966FF'
    },
    detailText: {
        fontWeight: '600',
        fontSize: 14,
    }
});