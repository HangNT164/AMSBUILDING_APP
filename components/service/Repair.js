import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import HomeImage from '../../assets/images/bgscreen.png';
import API from '../lib/API';
import LoadingProgressBar from '../LoadingProgressBar';
import SearchRepair from './SearchRepair';
export default function Repair() {
    let navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();

        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });

    }, []);
    const [times, setTimes] = useState([]);

    const [text, setText] = useState();
    const handleText = (value) => {
        setText(value)
    }

    const token = useSelector(state => state.user?.token)
    const [timeFrom, setTimeFrom] = useState("21")
    const handleTimeFrom = (hour) => {
        setTimeFrom(hour)

    }
    const [timeTo, setTimeTo] = useState("21")
    const handleTimeTo = (hour) => {
        setTimeTo(hour)
    }

    const [date, setDate] = useState(new Date());

    const [show, setShow] = useState(false);
    let handleShow = () => {
        setShow(true)
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const accountIdRedux = useSelector(state => state.user?.accountId)
    const [time, setTime] = useState("01:00");
    let handleTime = value => {
        setTime(value)
    }
    const roleId = useSelector(state => state.user?.roleId)

    let addService = async () => {
        setLoading(true)
        try {
            if (roleId == 3) {
                let path = '/landlord/service_request/add';
                let resp = await API.authorizedJSONPost(path, {
                    reasonDetailSubServiceId: timeTo,
                    accountId: accountIdRedux,
                    startDate: `${moment(date, "DD-MM-YYYY").format("YYYY/MM/DD")} ${time}`,
                    endDate: ""
                }, token);
                if (resp.ok) {
                    setLoading(false);
                    let response = await resp.json();

                    Toast.show({
                        type: 'success',
                        position: 'bottom',
                        bottomOffset: 50,
                        text1: 'Bạn đã gửi yêu cầu thành công',
                        text2: "Ấn vào đây để theo dõi tiến trình nhé!",
                        onPress: () => {
                            setTimeFrom("21")
                            setTimeTo("21")
                            setTime("01:00")
                            setDate(new Date())
                            navigation.navigate("DetailProcess", { id: response?.serviceId, typeRequest: response?.typeService })
                        }
                    })

                } else {
                    setLoading(false)
                    let response = await resp.json();
                    Toast.show({
                        type: 'error',
                        position: 'bottom',
                        bottomOffset: 50,
                        text1: 'Lỗi!',
                        text2: response?.message
                    })
                }


            } else {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Lỗi!',
                    text2: "Tài khoản không có quyền truy cập"
                })
            }
        } catch (error) {

        }
    }


    return (
        <>
            <View style={styles.wrapper}>
                <ImageBackground source={HomeImage} style={styles.image}>
                    <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>
                        <View style={styles.main}>
                            <View style={styles.wrapTime}>
                                <SearchRepair timeFrom={timeFrom} timeTo={timeTo} handleTimeFrom={handleTimeFrom} handleTimeTo={handleTimeTo}
                                    time={time} handleTime={handleTime}
                                    date={date}
                                    onChange={onChange}
                                    show={show}
                                    handleShow={handleShow}
                                />
                            </View>

                            <View style={styles.footerBottom}>
                                <TouchableOpacity style={styles.shareNow} disabled={loading} onPress={addService}>
                                    <Text style={styles.shareNowText}>GỬI YÊU CẦU {loading && <LoadingProgressBar />}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#000', opacity: .7,
                        position: "absolute",
                        zIndex: 4,
                        width: '100%',
                        height: '100%'
                    }} />
                </ImageBackground >
            </View>
        </>
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
                containerStyle={{ width: 150 }}
                zIndex={16}
            />
            <View style={styles.separator} />
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
    shareNow: { backgroundColor: 'transparent', width: '90%', height: 50, borderRadius: 10, alignItems: 'center', display: 'flex', justifyContent: 'center', borderWidth: 2, borderColor: 'orange' },
    shareNowText: { color: 'orange', fontSize: 14, fontWeight: "bold", textTransform: 'uppercase' },
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
        // position:'absolute',
        // zIndex:12,
        justifyContent: 'center'
    },
    selectDate: {
        paddingTop: 30,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: 'space-around',


    },
    inputDate: {

        marginRight: 15,
        height: 35,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333',
        display: 'flex',
        width: 150,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 30,
        borderRadius: 10
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
        flexDirection: 'column',
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