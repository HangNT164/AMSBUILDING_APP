import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import HomeImage from '../../assets/images/bgscreen.png';
import { CheckBox } from 'react-native-elements'
import { useSelector } from 'react-redux';
import LoadingProgressBar from '../LoadingProgressBar';
import Toast from 'react-native-toast-message';
import API from '../lib/API';

export default function AccessCard() {
    let navigation = useNavigation();
    const [number, setNumber] = useState(1);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const token = useSelector(state => state.user?.token)
    const accountIdRedux = useSelector(state => state.user?.accountId)
    const [loading, setLoading] = useState(false)
    const price = 50000

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
    const roleId = useSelector(state => state.user?.roleId)

    let addService = async () => {
        if (toggleCheckBox) {
            if (roleId == 3) {
                setLoading(true)
                let path = `/landlord/resident_card/add?amount=${number}`
                let resp = await API.authorizedJSONPost(path, null, token);
                if (resp.ok) {
                    let response = await resp.json();
                    setLoading(false);
                    setNumber(1)
                    Toast.show({
                        type: 'success',
                        position: 'bottom',
                        bottomOffset: 50,
                        text1: 'Bạn đã gửi yêu cầu thành công',
                        text2: "Ấn vào đây để theo dõi tiến trình nhé!",
                        onPress: () => {
                            navigation.navigate("DetailProcess", { id: response?.serviceId?.[0], typeRequest: response?.typeService })
                        }
                    })
                } else {
                    setLoading(false);
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
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'Lỗi!',
                text2: 'Bạn cần đọc và cam kết!.'
            })
        }

    }
    return <View style={styles.wrapper}>
        <ImageBackground source={HomeImage} style={styles.image}>

            <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>

                <View style={styles.overlay}>
                    <View style={styles.main}>
                        <View style={styles.wrapCard}>

                            <View style={styles.groupCard}>
                                <Text style={styles.textCard}>Số thẻ đăng kí thêm:</Text>
                                <NumericInput type='up-down' totalWidth={80}
                                    value={number}
                                    onChange={value => setNumber(value)}
                                    minValue={1}

                                />
                            </View>
                            <View style={styles.groupCard}>
                                <Text style={styles.textCard}>Phí mỗi thẻ:</Text>
                                <Text>{price}đ</Text>
                            </View>
                            <View style={styles.groupCard}>
                                <Text style={styles.textCard}>Tổng phí:</Text>
                                <Text style={styles.textCard}>{number * price}đ</Text>
                            </View>
                        </View>
                        <Text style={styles.textRule}>Cam kết sử dụng dịch vụ</Text>
                        <View style={styles.wrapCommit}>
                            <CheckBox
                                title={null}
                                checked={toggleCheckBox}
                                checkedColor="#fff"
                                onPress={() => setToggleCheckBox(!toggleCheckBox)}
                            />
                            <Text style={styles.textCommit}>Tôi đã đọc và cam kết</Text>
                        </View>

                        <View style={styles.footerBottom}>
                            <TouchableOpacity style={styles.shareNow} disabled={loading} onPress={addService}>
                                <Text style={styles.shareNowText}>Xác nhận {loading && <LoadingProgressBar />}</Text>
                            </TouchableOpacity>
                        </View>
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
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        position: 'relative'
    },
    imageBanner: {
        height: '100%'
    },
    footerBottom: {
        padding: 10,
        flexDirection: 'row',
        display: "flex",
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    shareNow: { alignItems: 'flex-end', backgroundColor: 'transparent', padding: 10, borderRadius: 10, alignItems: 'center', borderColor: 'orange', borderWidth: 2 },
    shareNowText: { color: 'orange', fontSize: 14, fontWeight: "bold", textTransform: 'uppercase' },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#161b224d',

    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%',
        zIndex: 1
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 3
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 100,
        backgroundColor: '#006633',
        width: '100%',
        paddingTop: 30,
        position: 'relative',
        borderBottomColor: '#282828',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    btnBack: {
        position: 'absolute',
        left: 15,
        top: 50
    },
    wrapText: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textConfirm: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10
    },
    test: {

        fontSize: 30,
        color: 'white'
    },
    title: {
        fontSize: 20,

        fontWeight: 'bold',
        color: '#9966FF',
        marginBottom: 10
    },
    wrapCard: {
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: '#fff'
    },
    groupCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textCard: {
        fontSize: 14
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: '#fff',
        color: '#fff'
    },
    textRule: {
        color: '#fff',
        margin: 15,
        textDecorationLine: 'underline',
        fontSize: 14
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    textCommit: {
        margin: 15,
        fontSize: 13,
        color: '#fff'
    },
    wrapBtn: {
        padding: 5,
        marginTop: 5,
        borderRadius: 10
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%',
    },
});