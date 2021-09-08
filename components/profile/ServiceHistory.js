import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BannerImage from '../../assets/images/banner1.png';
import ArticleHistory from '../ArticleHistory';
import API from '../lib/API';
import { useIsFocused } from '@react-navigation/native';

export default function ServiceHistory() {
    let [data, setData] = useState();
    const accountIdRedux = useSelector(state => state.user.accountId);
    const token = useSelector(state => state.user?.token)
    const isFocus = useIsFocused();
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isFocus])


    let search = async () => {
        try {
            let path = `/landlord/request-service/list/${accountIdRedux}?statusId=3`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setData(response)
            }
        } catch (error) {

        }
    }
    return <View style={styles.wrapper}>

        <View style={styles.wrapContent}>
            {data?.length > 0 ? <>
                <ScrollView>
                    {data?.map((item, index) => {
                        return (
                            <ArticleHistory key={index} data={item} />
                        )
                    })}

                </ScrollView></>
                :
                <><Text>Lịch sử trống!</Text></>
            }
        </View>
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

        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    }
});