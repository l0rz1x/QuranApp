import { Dimensions, Pressable, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const triangleWidth = width / 1.7;
const footTiangleWidth = width / 2.5;
const triangleHeight = height / 9;
const footTriangleHeight = height / 11;
export default function Tab() {
    return (
        <View style={tabStyles.container}>
            <Pressable>
            <View style={tabStyles.head}>
                <View style={tabStyles.triangleLeft} /> 
                <View style={tabStyles.triangleRight} />
                <View style={tabStyles.settings} />
                <View style={tabStyles.options} />
            </View>
            <View style={tabStyles.rectangle} />
            <View style={tabStyles.foot} >
                
                <View style={tabStyles.FtriangleLeft} /> 
                <View style={tabStyles.FtriangleRight} />
                <View style={tabStyles.squareLeft} />
                <View style={tabStyles.squareRight} />
                <View style={tabStyles.settings} />
                <View style={tabStyles.options} />
            </View>
            </Pressable>
        </View>
    );
}

const tabStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
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
        borderTopColor: 'black',
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
        left: 10,
        top: 10,  
        zIndex: 2, 
    },
    triangleRight: {
        position: 'absolute',
        right: 0,
        width: 0,
        height: 0,
        borderTopWidth: triangleHeight,
        borderTopColor: 'black',
        borderLeftWidth: triangleWidth,
        borderLeftColor: 'transparent',
        borderRightWidth: 0,
        borderRightColor: 'transparent',
    },
    options: {
        position: 'absolute',
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        right: 10, 
        top: 10,  
        zIndex: 2,
    },
     foot: {
        width: '100%',
        height: '10%',
        backgroundColor: 'transparent',
        bottom: 0,
        position: 'absolute',
    },
     squareLeft: {
       position: 'absolute',
        left: 0,
        width: '20%',
        height: '100%',
        backgroundColor: 'black',
    },
    squareRight: {
       position: 'absolute',
        right: 0,
        width: '20%',
        height: '100%',
        backgroundColor: 'black',
        
    },
    FtriangleRight: {
       position: 'absolute',
        right: 0,
        width: 0,
        height: 0,
        borderTopWidth: footTriangleHeight,
        marginRight: 80,
        borderTopColor: 'black',
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
        borderTopColor: 'black',
        borderRightWidth: footTiangleWidth,
        borderRightColor: 'transparent',
        borderLeftWidth: 0,
        borderLeftColor: 'transparent',
    },
    
    
});