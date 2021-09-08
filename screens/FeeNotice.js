import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import bgScreen from '../assets/images/bgscreen.png';
import Header from '../components/Header';
import RNPickerSelect from "react-native-picker-select";
import { TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';
import API from '../components/lib/API';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function FeeNotice({ navigation }) {
    let date = new Date();

    const [monthFrom, setMonthFrom] = useState(date?.getMonth() > 9 ? date?.getMonth() : `${0}${date?.getMonth()}`)
    const handleTimeFrom = (hour) => {
        setMonthFrom(hour)
    }

    const [yearFrom, setYearFrom] = useState(date.getFullYear().toString())
    const handleYearFrom = (hour) => {
        setYearFrom(hour)
    }
    const token = useSelector(state => state.user?.token)
    const [data, setData] = useState();
    const isFocus = useIsFocused()
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isFocus, monthFrom, yearFrom])

    const search = async () => {
        let path = `/tenant/notification-fee-apartment?billingMonth=${monthFrom}/${yearFrom}`;

        let resp = await API.authorizedJSONGET(path, token);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        } else {
            setData()
        }
    }
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }
    const roleId = useSelector(state => state.user?.roleId)
    const handlePayment = () => {
        if (roleId == 3) {
            navigation.navigate('Payment', {
                data: {
                    day: data?.billingMonth,
                    total: currencyFormat(data?.total?.toString())
                }
            })
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'Lỗi!',
                text2: "Tài khoản không có quyền truy cập"
            })
        }
    }
    return <View style={styles.wrapper}>
        {/* <Header navigation={navigation} /> */}
        <ImageBackground source={bgScreen} style={styles.image}>
            <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>
                <View style={styles.main}>
                    <View style={styles.wrapSelect}>
                        <TimeFrom monthFrom={monthFrom} handleTimeFrom={handleTimeFrom} />
                        <YearFrom yearFrom={yearFrom} handleYearFrom={handleYearFrom} />
                    </View>
                    {data ? <View style={styles.detail}>
                        <ScrollView style={styles.detailList}>
                            <View style={styles.detailItem}>
                                <Text style={styles.detailText}>{data?.generalFeeName}</Text>
                                <Text style={styles.detailText}>{currencyFormat(data?.feeGeneralFee?.toString())}</Text>
                            </View>
                            {data?.vehicleName &&
                                <View style={styles.detailItem}>
                                    <Text style={styles.detailText}>{data?.vehicleName}</Text>
                                    <Text style={styles.detailText}>{currencyFormat(data?.feeVehicleName?.toString())}</Text>
                                </View>
                            }
                            {data?.apartmentCardName &&
                                <View style={styles.detailItem}>
                                    <Text style={styles.detailText}>{data?.apartmentCardName}</Text>
                                    <Text style={styles.detailText}>{currencyFormat(data?.feeApartmentCard?.toString())}</Text>
                                </View>
                            }
                            {data?.services?.length > 0 &&
                                data?.services?.map((item, index) => {
                                    return (
                                        <View style={styles.detailItem} key={index}>
                                            <Text style={styles.detailText}>Phí {item?.serviceName}</Text>
                                            <Text style={styles.detailText}>{currencyFormat(item?.feeService?.toString())}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                        <View style={[styles.detailItem, styles.lastItem]}>
                            <Text style={styles.detailTotal}>Tổng tiền</Text>
                            <Text style={styles.detailTotal}>{currencyFormat(data?.total?.toString())}</Text>
                        </View>
                    </View> :
                        <Text style={{ color: '#fff', marginTop: 50, textAlign: 'center' }}>Chưa phát sinh phí</Text>
                    }

                    {data &&
                        <>
                            <Text style={styles.date}>{data?.status}</Text>
                            {data?.status !== "Đã thanh toán"
                                && <View style={styles.wrapBtn}>
                                    <View style={styles.btnConfirm}>
                                        <Text onPress={() => handlePayment()} style={{ color: 'orange', textAlign: 'center' }}>THANH TOÁN</Text>
                                    </View>
                                </View>
                            }
                        </>
                    }

                </View>

            </View>
            <View style={{
                backgroundColor: '#000', opacity: .5,
                position: "absolute",
                zIndex: 4,
                width: '100%',
                height: '100%'
            }} />
        </ImageBackground>
    </View>
}



function TimeFrom({ monthFrom, handleTimeFrom }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Tháng 1", value: "01" },
        { label: "Tháng 2", value: "02" },
        { label: "Tháng 3", value: "03" },
        { label: "Tháng 4", value: "04" },
        { label: "Tháng 5", value: "05" },
        { label: "Tháng 6", value: "06" },
        { label: "Tháng 7", value: "07" },
        { label: "Tháng 8", value: "08" },
        { label: "Tháng 9", value: "09" },
        { label: "Tháng 10", value: "10" },
        { label: "Tháng 11", value: "11" },
        { label: "Tháng 12", value: "12" }
    ]);
    return (
        <View style={styles.widthContent}>

            <DropDownPicker
                open={open}
                value={monthFrom}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeFrom}
                setItems={setItems}
                placeholder="Chọn tháng"
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />

        </View>
    )
}
function YearFrom({ yearFrom, handleYearFrom }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Năm 2021", value: "2021" },
        { label: "Năm 2022", value: "2022" },
        { label: "Năm 2023", value: "2023" },
        { label: "Năm 2024", value: "2024" },
        { label: "Năm 2025", value: "2025" },
        { label: "Năm 2026", value: "2026" },

    ]);
    return (
        <View style={styles.widthContent}>

            <DropDownPicker
                open={open}
                value={yearFrom}
                items={items}
                setOpen={setOpen}
                setValue={handleYearFrom}
                setItems={setItems}
                placeholder="Chọn năm"
                style={{ height: 30 }}
                containerStyle={{ width: 150 }}
            />

        </View>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        padding: 15,
        width: 150,
        // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'white',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        width: '100%'
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    wrapSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    main: {
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10
    },
    test: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700'
    },
    detailList: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        height: 150
    },
    detail: {
        borderColor: 'white',
        borderWidth: 2,
        padding: 10,
        marginTop: 15,
        backgroundColor: 'white'
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    lastItem: {
        marginTop: 15
    },
    detailTotal: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#0099CC'
    },
    detailText: {
        fontSize: 14,
    },
    wrapBtn: {
        paddingTop: 10,
        marginTop: 15,
        borderRadius: 10
    },
    date: {
        fontSize: 14,
        marginTop: 10,
        color: 'white'
    },
    btnConfirm: {
        backgroundColor: 'transparent',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10
    }

});