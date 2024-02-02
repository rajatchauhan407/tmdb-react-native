import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../button';
const Header = props => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {props.back && <CustomButton title="< Back to List" style={styles.buttonStyles} onPress={()=>navigation.goBack()}/>}
            <View style={{display:'flex',flex:1,justifyContent:'center'}}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: '#095BB1',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonStyles:{
        alignSelf:'flex-start',
        backgroundColor:'red',
        borderRadius:5,
        width:'20%',
    }
}); 

export default Header;