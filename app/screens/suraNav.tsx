import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { surah } from '../api/surah_data'; // Adjust the import path as necessary
  
type surah = {
    id: number;
    name: string;
    aya: number;
    english: string;
    turkish: string;
    place: string;
    arabic: string;

};
// find how to navigate from this screen to flatList on home screen
export default function SuraNav( { navigation }: { navigation: any }) {
   
    const renderItem = ({ item }: { item: surah }) => { 
        return (
            <View style={{ padding: 20 , borderBottomWidth: 2, borderColor: '#ccc' }}>
                <Pressable onPress={() => console.log(`Navigating to Sura: ${item.name}`)}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontSize: 14 }}>Page: {item.id}</Text>
                <Text style={{ fontSize: 14 }}>cuz: {item.aya}</Text>
                </Pressable>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backward}> 
                <AntDesign name="arrowright" size={48} color="white" /> 
            </View>
            </TouchableOpacity>
            <View style={styles.listNav}>
            <FlatList
            style={{ flex: 1 }}
            data={surah}
            keyExtractor={(item) => item.name.toString()}
            renderItem={renderItem}
            />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
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
    listNav: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 80,
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    },
});