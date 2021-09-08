import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import ArticleTracking from '../components/ArticleTracking';
import homeImage from '../assets/images/bgscreen.png'
import { useSelector } from 'react-redux';
import API from '../components/lib/API';
export default function ProgressTracking({ navigation }) {
    let [data, setData] = useState();
    const token = useSelector(state => state.user?.token)
    useEffect(() => {
        search()
    }, [])
    let search = async () => {
        try {
            let path = `/landlord/service_request/list`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setData(response)
            }
        } catch (error) {

        }
    }
   
    return <View style={styles.wrapper}>
        <ImageBackground source={homeImage} style={styles.imageBanner} >
            <View style={styles.overlay}>

            </View>
            <View style={styles.wrapContent}>
                <ScrollView>
                    {data?.map((item, index) => {
                        return (
                            <ArticleTracking navigation={navigation} data={item} key={index} search={search} />
                        )
                    })}

                </ScrollView>
            </View>
        </ImageBackground>
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
        height: '100%',
        width: '100%',
        backgroundColor: '#333',

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
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.7,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    test: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700'
    }
});