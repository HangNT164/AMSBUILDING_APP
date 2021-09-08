import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';
import API from '../components/lib/API';
import PersonInfor from '../components/PersonInfor';

export default function Management() {
    const token = useSelector(state => state.user?.token);
    const [data, setData] = useState();
    useEffect(() => {
        search()
    }, [])
    let search = async () => {
        let path = '/tenant/management-person';
        let resp = await API.authorizedJSONGET(path, token);
        if (resp.ok) {
            let response = await resp.json();
            setData(response);
        }
    }
    return <View style={styles.wrapper}>

        <View style={styles.wrapContent}>

            {data?.length > 0 ?
                <>
                    <ScrollView>
                        {data?.map((item, index) => {
                            return (
                                <PersonInfor key={index} data={item} />
                            )
                        })}
                    </ScrollView>
                </>
                : <Text>Không có dữ liệu</Text>
            }
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
        fontWeight: '700',
        fontSize: 18,
        color: 'white'
    }
});