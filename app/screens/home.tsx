import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import React, { useState } from "react";
import { Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { surah } from '../api/surah_data';
const { width, height } = Dimensions.get('window');
const triangleWidth = width / 1.7;
const footTiangleWidth = width / 2.5;
const triangleHeight = height / 9;
const footTriangleHeight = height / 11;

export default function Home({ navigation }: { navigation: any }) {
  const [isTabVisible, setIsTabVisible] = useState(false);
  
const renderItem = () => {
  return (
    <View style={styles.pageContainer}>
      <Pressable onPress={() => setIsTabVisible(true)} style={{ flex: 1 }}>
        <View style={styles.child1}>
          <Text style={styles.surahName}>
            al-Fatiha
          </Text>
        </View>
        <View style={styles.child2}>
          <Text style={styles.chapter}>
            4
          </Text>
        </View>
        <View style={styles.child3}>
          <Text style={styles.textField}>
            al-Fatiha
          </Text>
        </View>
        <View style={styles.child4}>
          <Text style={styles.pageNumber}>
            1
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

  return (
    
  <View style={styles.container}>
    
    <FlatList 
        data={surah}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        
    />


      <Modal visible={isTabVisible} transparent={true}  animationType="fade">
        <SafeAreaView style={tabStyles.container}>
                    <View style={tabStyles.head}>
                        <View style={tabStyles.triangleLeft} /> 
                        <View style={tabStyles.triangleRight} />
                      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <View style={tabStyles.settings}>
                          <Feather name="settings" size={36} color="black" />
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("SuraNav")}>
                        <View style={tabStyles.options}>
                         <FontAwesome name="navicon" size={36} color="black" />
                        </View>
      	                </TouchableOpacity>
                    </View>
                    <Pressable onPress={() => setIsTabVisible(false)} style={tabStyles.container}>
                    </Pressable>
                    <View style={tabStyles.rectangle} />
                    <View style={tabStyles.foot} >
                        
                        <View style={tabStyles.FtriangleLeft} /> 
                        <View style={tabStyles.FtriangleRight} />
                        <View style={tabStyles.squareLeft} />
                        <View style={tabStyles.squareRight} />
                        <TouchableOpacity>
                        <View style={tabStyles.more}>
                          <AntDesign name="appstore-o" size={36} color="black" />
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <View style={tabStyles.search}>
                          <Fontisto name="search" size={36} color="black" />
                        </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
      </Modal>


    </View>
    
  );
}
const showTab = () => {
  
}
const tabStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
    },
    rectangle: {
        width: '80%',
        height: '3%',
        backgroundColor: 'white',
        left: '10%', 
        bottom: '12%',
        position: 'absolute',   
        zIndex: 1,
        marginLeft: '-0.5%',
        borderRadius: 10, 
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    },
    head: {
        width: '100%',
        height: 100,
        top: '0%',
        backgroundColor: 'transparent',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    triangleLeft: {
        position: 'absolute',
        left: 0,
        width: 0,
        height: 0,
        borderTopWidth: triangleHeight,
        borderTopColor: '#3d3d3d',
        borderRightWidth: triangleWidth,
        borderRightColor: 'transparent',
        borderLeftWidth: 0,
        borderLeftColor: 'transparent',
    },
    settings: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        position: 'absolute',
        right: 145,
        top: 10,  
        zIndex: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    more: {
      width: 50,
        height: 50,
        backgroundColor: 'red',
        position: 'absolute',
        left: 10,
        top: 10,  
        zIndex: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    search: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        position: 'absolute',
        right: 10,
        top: 10,  
        zIndex: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    options: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 50,
        height: 50,
        left: 145, 
        top: 10,  
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    triangleRight: {
        position: 'absolute',
        right: 0,
        width: 0,
        height: 0,
        borderTopWidth: triangleHeight,
        borderTopColor: '#3d3d3d',
        borderLeftWidth: triangleWidth,
        borderLeftColor: 'transparent',
        borderRightWidth: 0,
        borderRightColor: 'transparent',
    },
     foot: {
        width: '100%',
        height: '10%',
        backgroundColor: 'transparent',
        bottom: '0.5%',
        position: 'absolute',
    },
     squareLeft: {
       position: 'absolute',
        left: 0,
        width: '20%',
        height: '100%',
        backgroundColor: '#3d3d3d',
    },
    squareRight: {
       position: 'absolute',
        right: 0,
        width: '20%',
        height: '100%',
        backgroundColor: '#3d3d3d',
        
    },
    FtriangleRight: {
       position: 'absolute',
        right: 0,
        width: 0,
        height: 0,
        borderTopWidth: footTriangleHeight,
        marginRight: 80,
        borderTopColor: '#3d3d3d',
        borderLeftWidth: footTiangleWidth,
        borderLeftColor: 'transparent',
        borderRightWidth: 0,
        borderRightColor: 'transparent',
    },
    FtriangleLeft: {
         position: 'absolute',
        left: 0,
        width: 0,
        height: 0,
        borderTopWidth: footTriangleHeight,
        marginLeft: 80,
        borderTopColor: '#3d3d3d',
        borderRightWidth: footTiangleWidth,
        borderRightColor: 'transparent',
        borderLeftWidth: 0,
        borderLeftColor: 'transparent',
    },
    
    
});
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'gray',
      
  },
  pageContainer: {
    width: width,
    height: '100%', 
    justifyContent: "center",
    alignItems: "center",
  },
  child1: {
    width: (width / 3),
    height: '3.5%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child2: {
    width: (width / 3),
    height: '3.5%',
    position: 'absolute',
    right: 0,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child3: {
    width: width,
    height: '93%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child4: {
    width: (width / 4),
    height: '3.5%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    marginLeft: '-12.5%', 
    backgroundColor: '#ffffff',
  },
  chapter: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  surahName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textField: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pageNumber: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
})