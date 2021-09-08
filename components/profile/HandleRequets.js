import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BannerImage from '../../assets/images/banner1.png';
import ArticleReq from '../ArticleReq';
import API from '../lib/API';

export default function HandleRequest() {
    let [data, setData] = useState();
    const accountIdRedux = useSelector(state => state.user.accountId);
    const token = useSelector(state => state.user?.token)
    useEffect(() => {
        search()
    }, [])
    let search = async () => {
        let path = `/landlord/request-service/list/${accountIdRedux}?statusId=3`;
        let resp = await API.authorizedJSONGET(path, token);
        if (resp.ok) {
            let response = await resp.json();
            setData(response)
        }
    }
    return <View style={styles.wrapContent}>
        {data?.length > 0 ? <>
            <ScrollView>
                {data?.map((item, index) => {
                    return (
                        <ArticleReq key={index} data={item} search={search} />
                    )
                })}

            </ScrollView></>
            :
            <><Text>Yêu cầu trống!</Text></>
        }
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff'
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