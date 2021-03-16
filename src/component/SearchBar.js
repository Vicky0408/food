import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term , onTermChange, onTermSubmite}) =>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconeStyle} />
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='search' 
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange} 
            onEndEditing={onTermSubmite}/>
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height:50,
        marginHorizontal: 15,
        borderRadius:5,
        flexDirection: 'row',
        marginBottom:10,
    },
    inputStyle:{
       fontSize: 18,
        flex: 1,
    },
    iconeStyle:{
        color: 'black',
        fontSize:35,
        marginHorizontal:15,
        alignSelf: 'center',

    }
});

export default SearchBar;
