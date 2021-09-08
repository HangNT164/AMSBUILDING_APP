import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import API from './components/lib/API';


export default function NotificationTab({ color, isRead }) {
    const [number, setNumber] = useState();
    const token = useSelector(state => state.user?.token);

    useEffect(() => {
        search()
    }, [])
    useEffect(() => {
        search()
    }, [isRead])

    let search = async () => {
        try {
            let path = `/landlord/notifications/numbers`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setNumber(response)
            }
        } catch (error) {
        }
    }

    return (
        <>
            <View style={{ position: 'relative' }}>
                <Feather name="bell" size={25} color={color} />
                {number > 0 && <View style={{
                    position: 'absolute', width: 20, height: 20, borderRadius: 10, backgroundColor: 'red',
                    right: -10, display: 'flex', justifyContent: 'center', alignItems: 'center', top: -5
                }}>
                    <Text style={{ color: 'white' }}>{number}</Text>
                </View>}

            </View>
        </>

    )
}