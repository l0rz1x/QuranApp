import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
// you nedd to replace searchOutput with search results when something is searched
// its shall contain a navigation to ayah or surah that is searched
export default function Search({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backward}> 
                <AntDesign name="arrowright" size={48} color="white" /> 
            </View>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Search...'/>
            <View style={styles.srcicon}>
            <TouchableOpacity onPress={() => console.log('Search pressed')}>
            <Ionicons name="search-sharp" size={36} color="black"  />
            </TouchableOpacity>
            </View>
            </View>
            <View style={styles.searchOutput}>
                <Ionicons name="search-outline" size={100} color="black" />
                <Text style={styles.srcplace}>Type to Search...</Text>
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
    inputContainer: {
        marginTop: 75,
        height: height / 10,
        backgroundColor: 'orange',
    },
    input: {
        width: '80%',
        height: height / 19,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        margin: 20,
    },
    srcicon: {
        position: 'absolute',
        width: width / 9.5,
        height: height / 19,
        right: 17.5,
        top: 20,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    srcplace: {
        fontSize: 20,
        color: 'black',
        marginTop: 20,
    },
    searchOutput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    
});