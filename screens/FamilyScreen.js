import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import GroupFamily from '../components/GroupFamily';
import API from '../components/lib/API';

export default function FamilyScreen() {
    const token = useSelector(state => state.user.token);
    const [data, setData] = useState();
    const isFocus = useIsFocused();
    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isFocus])
    const search = async () => {
        let path = '/tenant/dependent-person';
        let resp = await API.authorizedJSONGET(path, token);
        if (resp.ok) {
            let response = await resp.json()
            setData(response)
        }
    }
    console.log(data)
    return <View style={styles.wrapper}>

        <View style={styles.container}>
            <ScrollView>
                {data?.map((item, index) => {
                    return (
                        <GroupFamily data={item} key={index} />
                    )
                })}


            </ScrollView>

        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1
    },
    
    wrapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#666666',
        marginBottom: 10
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '700'
    },
})