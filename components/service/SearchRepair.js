import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import HomeImage from '../../assets/images/home.png';
import API from '../lib/API';
import LoadingProgressBar from '../LoadingProgressBar';
export default function SearchRepair({ timeFrom, timeTo, handleTimeFrom, handleTimeTo, time, handleTime,
    date, onChange, show, handleShow
}) {


    const token = useSelector(state => state.user?.token)

    let [equipments, setEquipments] = useState([]);
    let [problems, setProblems] = useState([]);
    useEffect(() => {
        searchEquipemt()
    }, [])
    useEffect(() => {
        searchProblems()
    }, [timeFrom])
    let searchEquipemt = async () => {
        try {
            let path = '/tenant/detail_sub_service/search?subServiceId=9';
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setEquipments(response)
            }
        } catch (error) {

        }
    }

    let searchProblems = async () => {

        try {
            let path = `/tenant/reason_detail_sub_service/search?detailSubServiceId=${timeFrom}`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setProblems(response)
            }
        } catch (error) {

        }
    }


    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TimeFrom timeFrom={timeFrom} handleTimeFrom={handleTimeFrom} equipments={equipments} />
                <Count timeTo={timeTo} handleTimeTo={handleTimeTo} problems={problems} />
            </View>
            <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Time time={time} handleTime={handleTime} />
                <SelectDate
                    date={date} onChange={onChange}
                    show={show} handleShow={handleShow}
                />
            </View>
        </View>
    )
}

function TimeFrom({ timeFrom, handleTimeFrom, equipments }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    let handleItems = () => {
        let selectItems = [];
        for (let i = 0; i < equipments.length; i++) {
            selectItems.push({
                label: equipments[i]?.detailSubServiceName,
                value: equipments[i]?.id
            })
        }
        setItems(selectItems)
    }

    useEffect(() => {
        handleItems()
    }, [equipments])


    return (
        <View style={styles.widthContent}>
            <Text style={styles.txtTitle}>Thiết bị</Text>
            <DropDownPicker
                open={open}
                value={timeFrom}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeFrom}
                setItems={setItems}
                placeholder={items[0]?.label}
                style={{ height: 30 }}
                containerStyle={{ width: 160 }}
                dropDownContainerStyle={{
                    height: 200,
                    zIndex: 7000
                }}
            />
        </View>
    )
}


function Count({ timeTo, handleTimeTo, problems }) {



    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    let handleItems = () => {
        let selectItems = [];
        for (let i = 0; i < problems?.length; i++) {
            selectItems.push({
                label: problems[i]?.reasonName,
                value: problems[i]?.id
            })
        }
        setItems(selectItems)
    }

    useEffect(() => {
        handleItems()
    }, [problems])


    return (
        <View style={styles.widthContent}>
            <Text style={styles.txtTitle}>Vấn đề</Text>
            <DropDownPicker
                open={open}
                value={timeTo}
                items={items}
                setOpen={setOpen}
                setValue={handleTimeTo}
                setItems={setItems}
                placeholder={items[0]?.label}
                style={{ height: 30 }}
                containerStyle={{ width: 160 }}


            />
        </View>
    )
}


function Time({ time, handleTime }) {
    const [open, setOpen] = useState(false);
    
    const [items, setItems] = useState([
        { label: '1h', value: "01:00" },
        { label: '2h', value: "02:00" },
        { label: '3h', value: "03:00" },
        { label: '4h', value: "04:00" },
        { label: '5h', value: "05:00" },
        { label: '6h', value: "06:00" },
        { label: '7h', value: "07:00" },
        { label: '8h', value: "08:00" },
        { label: '9h', value: "09:00" },
        { label: '10h', value: "10:00" },
        { label: '11h', value: "11:00" },
        { label: '12h', value: "12:00" },
        { label: '13h', value: "13:00" },
        { label: '14h', value: "14:00" },
        { label: '15h', value: "15:00" },
        { label: '16h', value: "16:00" },
        { label: '17h', value: "17:00" },
        { label: '18h', value: "18:00" },
        { label: '19h', value: "19:00" },
        { label: '20h', value: "20:00" },
        { label: '21h', value: "21:00" },
        { label: '22h', value: "22:00" },
        { label: '23h', value: "23:00" },
        { label: '24h', value: "24:00" }

    ]);



    return (
        <View style={styles.widthContent}>
            <Text style={styles.txtTitle}>Giờ</Text>
            <DropDownPicker
                open={open}
                value={time}
                items={items}
                setOpen={setOpen}
                setValue={handleTime}
                setItems={setItems}
                placeholder={items[0]?.label}
                style={{ height: 30 }}
                containerStyle={{ width: 160 }}
            />
        </View>
    )
}

function SelectDate({ date, onChange, show, handleShow }) {



    return (
        <View>
            {show && <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                minimumDate={new Date()}
            />}
            <TouchableOpacity onPress={() => handleShow()} style={[styles.selectDate]} >

                <View style={styles.widthContent}>
                    <Text style={styles.txtTitle}>Ngày</Text>
                    <View style={styles.inputDate}>
                        <Text style={{ color: '#333' }}>{moment(date).format("DD/MM/YYYY")} </Text>
                        <View>
                            <Text><Feather name="calendar" size={20} color={"#333"} /></Text>
                        </View>
                    </View>
                </View>


            </TouchableOpacity>
        </View>

    )
}




const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    inputText: {
        textAlignVertical: 'top',
        paddingTop: 20,
        fontSize: 18,
        height: 200,
        paddingLeft: 5,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#eaeaea'
    },
    shareNow: { backgroundColor: '#006633', width: '80%', height: 50, borderRadius: 10, alignItems: 'center', display: 'flex', justifyContent: 'center' },
    shareNowText: { color: '#fff', fontSize: 14, fontWeight: "bold", textTransform: 'uppercase' },
    wrapContent: {
        flex: 1
    },
    footerBottom: {

        flexDirection: 'row',
        display: "flex",
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
    },
    separator: {
        height: 1, backgroundColor: '#fff', width: 150,
        marginTop: 5,
        marginLeft: 0
    },
    widthContent: {
        width: 150,
        display: 'flex',

        justifyContent: 'center'
    },
    selectDate: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputDate: {

        height: 30,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333',
        display: 'flex',
        width: 160,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
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
    iptSelectDate: {
        backgroundColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    },
    btnConfirm: {
        padding: 5,
        borderRadius: 10
    }
});