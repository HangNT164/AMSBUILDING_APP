import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import RNPickerSelect from 'react-native-picker-select';
import Feather from 'react-native-vector-icons/Feather';
import HomeImage from '../../assets/images/bgscreen.png';

export default function PoolSuccess() {


    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.wrapContent}>

                    <View style={styles.main}>
                        <ImageBackground source={HomeImage} style={styles.image}>

                            <View style={{
                                display: 'flex', flexDirection: 'row', justifyContent: 'center',
                                paddingTop: 30, paddingBottom: 15
                            }}>
                                <Text style={{ color: '#fff' }}>Bạn đã đăng kí vé tháng 7 năm 2021</Text>
                            </View>
                            <View style={styles.wrapBtn}>
                                <View style={styles.btnConfirm}>
                                    <Button title="XÁC NHẬN" color="#006633" onPress={() => navigation.navigate('ServiceQuote')} />
                                </View>
                            </View>
                        </ImageBackground >
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,

    },
    wrapContent: {
        flex: 1
    },
    selectDate: {
        paddingTop: 30,
        paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    inputDate: {
        marginLeft: 30,
        marginRight: 15,
        height: 30,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333',
        display: 'flex',
        width: 200,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 30
    },
    wrapperText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 100,
        backgroundColor: '#006633'
    },

    textBanner: {
        position: 'absolute',
        top: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },

    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    textConfirm: {

        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10
    },
    test: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white'
    },
    wrapTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        margin: 15
    },
    wrapBtn: {
        padding: 10,
        marginTop: 15,
        borderRadius: 10
    },
    textRule: {
        color: '#fff',
        textDecorationLine: 'underline',
        marginBottom: 10,
        marginLeft: 15,
        fontSize: 14
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0
    },
    textCommit: {
        marginLeft: 0,
        fontSize: 12,
        color: '#FFF'
    },
    btnBack: {
        position: 'absolute',
        left: 20,
        top: 5
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%'
    },
    wrapCalendar: {
        padding: 15
    },
    txtTitle: {
        fontSize: 14,
        color: '#FFF',
        marginBottom: 10,
        fontWeight: '700'
    },
    iptSelect: {
        backgroundColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        borderStyle: 'solid',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10
    },
    wrapSelect: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapText: {
        padding: 7,
        backgroundColor: '#fff'
    },

    btnConfirm: {
        padding: 5,
        borderRadius: 10
    }
});