import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import API from '../components/lib/API';
import LoadingProgressBar from '../components/LoadingProgressBar';



export default function PriceRequest(props) {
    let data = props.route.params?.data;
    let navigation = useNavigation()
    const [loading, setLoading] = useState(false);
    let [price, setPrice] = useState();
    const token = useSelector(state => state.user?.token)

    useEffect(() => {

        search()

    }, [])



    let addService = async () => {
        setLoading(true)
        try {
            let path = '/landlord/service_request/add';
            let resp = await API.authorizedJSONPost(path, {
                reasonDetailSubServiceId: data?.reasonDetailSubServiceId,
                accountId: data?.accountId,
                startDate: data?.startDate,
                description: data?.description,
                endDate: data?.endDate ? data?.endDate : ""
            }, token);

            if (resp.ok) {
                setLoading(false);
                let response = await resp.json();
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: 'Thành công',
                    text2: 'Ấn vào đây theo dõi tiến trình!.',
                    onPress: () => {
                        navigation.navigate("DetailProcess", { id: response?.serviceId, typeRequest: response?.typeService });
                        Toast.hide()
                    }
                })
            } else {
                setLoading(false)
                let response = await resp.json();
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    bottomOffset: 50,
                    text1: response?.message,
                    text2: 'Ấn vào đây để quay trở lại!.',
                    onPress: () => {
                        navigation.goBack();
                        Toast.hide()
                    }
                })
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        search()
    }, [data?.reasonDetailSubServiceId])
    let search = async () => {
        try {
            let path = `/landlord/service_request/price?reasonDetailSubServiceId=${data?.reasonDetailSubServiceId}`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setPrice(response)
            }
        } catch (error) {

        }
    }
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }

    return (
        <>
            <View style={styles.separator} />
            <View style={{ margin: 10 }}>

                <View >
                    <Text style={styles.label}>Dịch vụ</Text>
                    <Text style={[styles.textInputComment]}
                    >{data?.name}</Text>
                </View>
                <View style={styles.separator} />
                {data?.endDate ? <>
                    <View >
                        <Text style={styles.label}>Từ ngày</Text>
                        <Text style={[styles.textInputComment]}
                        >{data?.startDate}</Text>
                    </View>
                    <View style={styles.separator} />
                    <View >
                        <Text style={styles.label}>Đến ngày</Text>
                        <Text style={[styles.textInputComment]}
                        >{data?.endDate}</Text>
                    </View>
                    <View style={styles.separator} />
                </> : <>
                    <View >
                        <Text style={styles.label}>Ngày đặt</Text>
                        <Text style={[styles.textInputComment]}
                        >{data?.startDate}</Text>
                    </View>
                    <View style={styles.separator} />
                </>}

                <View >
                    <Text style={styles.label}>Giá</Text>
                    <Text style={[styles.textInputComment]}
                    >{currencyFormat(price?.toString())}</Text>
                </View>
                <View style={styles.separator} />
            </View>


            <View style={styles.footerBottom}>
                <TouchableOpacity style={styles.shareNow} disabled={loading} onPress={addService}>
                    <Text style={styles.shareNowText}>Xác nhận {loading && <LoadingProgressBar />}</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    separator: {
        height: 1, backgroundColor: '#ddd', width: '100%'
    },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    name: {
        color: "#2999f5",
        fontSize: 15,
        fontWeight: "bold"
    },
    time: {
        color: "#555",
        fontSize: 12,
        fontWeight: "300"
    },
    userInfo: {
        flex: 1, display: 'flex', flexDirection: 'column'
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
    method: {
        flex: 1,
        alignItems: 'flex-start'
    },
    methodText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#888',
    },
    textInputComment: {
        color: '#333',
        fontSize: 15,
        marginTop: 10
    },
    shareNow: { alignItems: 'flex-end', backgroundColor: '#82c714', padding: 10, borderRadius: 10, alignItems: 'center' },
    shareNowText: { color: '#fff', fontSize: 14, fontWeight: "bold", textTransform: 'uppercase' },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1
    },
    uploadImage: {
        height: 150,
        flex: 1,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        resizeMode: 'cover',
    },
    deleteButton: { position: 'absolute', right: 0, top: -5, backgroundColor: '#fff', borderRadius: 10, width: 20, height: 20 },
    footerImageBottom: {
        padding: 10,
        flexDirection: 'row',
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    row: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        color: '#999', fontStyle: 'italic', fontSize: 12
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1
    }
});

