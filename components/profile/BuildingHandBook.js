import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BgImage from '../../assets/images/bg.png';
import API from '../lib/API';

export default function BuildingHandBook() {
    let [data, setData] = useState();
    const accountIdRedux = useSelector(state => state.user.accountId);
    const token = useSelector(state => state.user?.token)
    useEffect(() => {
        search()
    }, [])
    console.log(accountIdRedux)
    let search = async () => {
        let path = `/tenant/detail-building/${accountIdRedux}`;
        let resp = await API.authorizedJSONGET(path, token);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }

    return <View style={styles.wrapper}>
        <View style={styles.wrapContent}>
            <View style={styles.content}>
                <View style={styles.group}>
                    <Text style={styles.text}>Tên chung cư:</Text>
                    <Text style={[styles.text, styles.building]}>{data?.buildingName}</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Block đang sinh sống:</Text>
                    <Text style={[styles.text, styles.building]}>{data?.blockName}</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Địa chỉ:</Text>
                    <Text style={[styles.text, styles.building]}>{data?.address}</Text>
                </View>
            </View>
            <View style={styles.contentImage}>
                <Image source={BgImage} style={styles.image} />
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
    test: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white'
    },
    content: {
        padding: 15,
    },
    contentImage: {
        width: '100%',
        padding: 15
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        color: '#333'
    },
    building: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black'
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 300
    }
});