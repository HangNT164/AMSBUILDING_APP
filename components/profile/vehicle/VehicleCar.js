import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Car from '../../Car';
import API from '../../lib/API';
import { useIsFocused } from '@react-navigation/native'

export default function VehicleCar() {
    const token = useSelector(state => state.user?.token)
    const [data, setData] = useState()
    const accountIdRedux = useSelector(state => state.user?.accountId)
    const isFocused = useIsFocused()
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isFocused])
    let search = async () => {
        try {
            let path = `/tenant/vehicle-by-account-id/${accountIdRedux}?typeId=3`;
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
                            <Car key={index} data={item} />
                        )
                    })}

                </ScrollView>

            </> : <Text>Chưa đăng ký phương tiện!</Text>}

        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        backgroundColor: '#D3D3D3',
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