import Slider from '@react-native-community/slider';
import React from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import CountryPicker from 'react-native-country-picker-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SettingProfile() {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={styles.row}>
          <FontAwesome5 style={{ marginRight: 20 }} name={"moon"} size={16} color={'#333'} />
          <Text style={{ fontSize: 16, flex: 1, color: '#333' }}>Chế độ sáng tối</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            // value={themeCtx.theme.mode == 'dark'}
          />
        </View>
        <View style={styles.row}>
          <FontAwesome5 style={{ marginRight: 20 }} name={"font"} size={16}  color={'#333'} />
          <Text style={{ fontSize: 16, flex: 1, color: '#333' }}>Phông chữ ( 14px )</Text>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
          <Text style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>14</Text>
          <Slider
            style={{ flex: 1, }}
            minimumValue={14}
            value={14}
            maximumValue={20}
            step={1}
            minimumTrackTintColor="#888"
            maximumTrackTintColor="#aaa"
           
          />
          <Text style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>20</Text>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
          <FontAwesome5 style={{ marginRight: 20 }} name={"globe"} size={16} color={'#333'} />
          <Text style={{ fontSize: 16, flex: 1, color: '#333'}}>Ngôn ngữ</Text>
          <CountryPicker
           
            // countryCode={langCtx.lang.mode == "vi" ? "VN" : "US"}
            // onSelect={onSelectLanguage} 
            withFlagButton withCountryNameButton countryCodes={["VN", "US"]}
            col
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  row: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})