import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  
type Sura = {
    pageNumber: number;
    name: string;
    cuz: string;
};
// find how to navigate from this screen to flatList on home screen
export default function SuraNav( { navigation }: { navigation: any }) {
    const suras: Sura[] = [
        { pageNumber: 1, name: "Al-Fatiha", cuz: "1" },
        { pageNumber: 2, name: "Al-Baqarah", cuz: "1" },
        { pageNumber: 70, name: "Al-Imran", cuz: "3" },
        { pageNumber: 98, name: "An-Nisa", cuz: "4" },
        { pageNumber: 114, name: "Al-Ma'idah", cuz: "6" },
        { pageNumber: 121, name: "Al-An'am" , cuz: "6" },
        { pageNumber: 135, name: "Al-A'raf"  , cuz: "7" },
        { pageNumber: 143, name: "Al-Anfal" , cuz: "8" },
        { pageNumber: 153, name: "At-Tawbah" , cuz: "8" },
        { pageNumber: 160, name: "Yunus" , cuz: "9" },
        { pageNumber: 186, name: "Hud"  , cuz: "11" },
        { pageNumber: 192, name: "Yusuf" , cuz: "12" },
        { pageNumber: 200, name: "Ar-Ra'd" , cuz: "13" },
        { pageNumber: 210, name: "Ibrahim" , cuz: "14" },
        { pageNumber: 220, name: "Al-Hijr" , cuz: "15" },
        { pageNumber: 230, name: "An-Nahl" , cuz: "16" },
        { pageNumber: 240, name: "Al-Isra" , cuz: "17" },
        { pageNumber: 250, name: "Al-Kahf" , cuz: "18" },
        { pageNumber: 260, name: "Maryam" , cuz: "19" },
        { pageNumber: 270, name: "Ta-Ha" , cuz: "20" },
        { pageNumber: 280, name: "Al-Anbiya" , cuz: "21" },
        { pageNumber: 290, name: "Al-Hajj" , cuz: "22" },
        { pageNumber: 300, name: "Al-Mu'minun", cuz:"23"},
       
    ];
    const renderItem = ({ item }: { item: Sura }) => { 
        return (
            <View style={{ padding: 20 , borderBottomWidth: 2, borderColor: '#ccc' }}>
                <Pressable onPress={() => console.log(`Navigating to Sura: ${item.name}`)}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontSize: 14 }}>Page: {item.pageNumber}</Text>
                <Text style={{ fontSize: 14 }}>cuz: {item.cuz}</Text>
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
            data={suras}
            keyExtractor={(item) => item.pageNumber.toString()}
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