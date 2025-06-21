import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function Settings( { navigation }: { navigation: any } ) {
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const [darkMode, setDarkMode] = useState(false);
    const toggleSwitch = () => setDarkMode(previousState => !previousState);
    return (
        
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backward}> 
                <AntDesign name="arrowright" size={48} color="white" /> 
            </View>
            </TouchableOpacity>
        <View style={styles.sttingsContainer}>
            <View style={styles.darkModeContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Dark Mode</Text>
                <Switch
                    value={darkMode}
                    onValueChange={toggleSwitch}
                    thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                    trackColor={{ false: "gray", true: "#000" }} 
                    ios_backgroundColor="#3e3e3e"
                    style={styles.switch}
                />
                </View>
                <View style={styles.languageContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Language</Text>
                <Picker
                        selectedValue={selectedLanguage}
                        style={styles.langPicker}
                        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                    >
                        <Picker.Item label="English" value="en" />
                        <Picker.Item label="العربية" value="ar" />
                        <Picker.Item label="Turkce" value="tr" />
                    </Picker>
                </View>
                <View style={styles.fontContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 15}}>Font Size</Text>
                <Picker
                        selectedValue="default"
                        style={styles.fontPicker}
                        onValueChange={(itemValue) => console.log(itemValue)}
                    >
                        <Picker.Item label="Default" value="default" />
                        <Picker.Item label="Small" value="small" />
                        <Picker.Item label="Medium" value="medium" />
                        <Picker.Item label="Large" value="large" />
                        <Picker.Item label="Extra Large" value="extra-large" />
                    </Picker>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backward: {
        width: 50,
        height: 50,
        backgroundColor: '#1d1d1d',
        position: 'absolute',
        borderRadius: 15,
        justifyContent: 'center',
        margin: 15,
        right: 0,
        zIndex: 1,
    },
    sttingsContainer: {
        width: '90%',
        height: '90%',
        backgroundColor: 'orange',
        marginTop: 80,
        alignSelf: 'center',
        borderRadius: 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        borderWidth: 1,
    },
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        
    },
    darkModeContainer: {
        marginTop: 75,
        marginHorizontal: 40,
        width: '80%',
        height: 50,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        borderWidth: 2,
        borderRadius: 10,
        
    },
    languageContainer: {
        marginTop: 20,
        marginHorizontal: 40,
        width: '80%',
        height: 75,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        borderWidth: 2,
        borderRadius: 10,
    },
    langPicker: {
        height: '50%',
        padding: 30,
        margin: 10,
        width: '70%',
        color: 'black',
        backgroundColor: 'transparent',
    },
    fontContainer: {
        marginTop: 20,
        marginHorizontal: 40,
        width: '80%',
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 22,
        borderWidth: 2,
        borderRadius: 10,
    },
    fontPicker: {
        height: '50%',
        width: '80%',
        padding: 30,
        color: 'black',
        backgroundColor: 'transparent',
    },
    
    
    
});