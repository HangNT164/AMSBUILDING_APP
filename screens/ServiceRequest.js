import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Repair from '../assets/images/ic1.png';
import Pool from '../assets/images/ic10.png';
import Parking from '../assets/images/ic2.png';
import Clean from '../assets/images/ic3.png';
import Laundry from '../assets/images/ic4.png';
import Party from '../assets/images/ic5.png';
import Covid from '../assets/images/ic6.png';
import Card from '../assets/images/ic7.png';
import BBQ from '../assets/images/ic8.png';
import Tennis from '../assets/images/ic9.png';
import HomeImage from '../assets/images/bgscreen.png';
import { useSelector } from 'react-redux';
import API from '../components/lib/API';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ServiceRequest({ navigation }) {
    // const token = useSelector(state => state.user?.token)
    // let [data, setData] = useState();
    // useEffect(() => {
    //     search()
    // }, [])
    // let search = async () => {
    //     let path = '/landlord/service_request/list';
    //     let resp = await API.authorizedJSONGET(path, token);
    //     if (resp.ok) {
    //         let response = await resp.json();
    //         setData(response)
    //     }
    // }
    return (
        <>
            <View style={styles.wrapper}>
                <ImageBackground source={HomeImage} style={styles.image}>

                    <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>
                        <View style={styles.features}>
                            <View style={styles.listItem}>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Repair')} activeOpacity={0.8}>
                                    <MaterialIcons name="home-repair-service" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Sửa chữa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Parking')} activeOpacity={0.8}>
                                    <FontAwesome5 name="parking" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Gửi xe</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ApartmentCleaning')} activeOpacity={0.8}>
                                    <MaterialIcons name="cleaning-services" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Vệ sinh</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Laundry')} activeOpacity={0.8}>
                                    <MaterialIcons name="local-laundry-service" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Giặt là</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Party')} activeOpacity={0.8}>
                                    <MaterialCommunityIcons name="silverware-clean" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Đặt tiệc</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Covid')} activeOpacity={0.8}>
                                    <FontAwesome5 name="briefcase-medical" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Covid-19</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AccessCard')} activeOpacity={0.8}>
                                    <Entypo name="credit-card" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Thẻ căn hộ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('BBQ')} activeOpacity={0.8}>
                                    <MaterialCommunityIcons name="food-fork-drink" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >BBQ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Tennis')} activeOpacity={0.8}>
                                    <Ionicons name="tennisball" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Tennis</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Pool')} activeOpacity={0.8}>
                                    <FontAwesome5 name="swimming-pool" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Hồ bơi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FootballPitche')} activeOpacity={0.8}>
                                    <Ionicons name="football" size={35} color="white" />
                                    <Text style={{ marginTop: 10, fontSize: 14, color: '#fff' }} >Sân bóng</Text>
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
                </ImageBackground>

            </View>
        </>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 150,
        backgroundColor: '#006633'
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    test: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        marginLeft: 15
    },
    features: {
        paddingTop: 15,
    },
    listItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    item: {
        width: '25%',
        height: 80,
        // borderColor: '#666666',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 20,
        backgroundColor: 'transparent'
    }
});