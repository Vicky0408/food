import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'

const ResultDetails =({result}) =>{
    return(
        <View style={styles.contener}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    contener:{
        marginLeft:15,
    },
    image:{
        height: 100,
        width:250,
        borderRadius: 4
    },
    name:{
        fontWeight: 'bold'
    }
});

export default ResultDetails;