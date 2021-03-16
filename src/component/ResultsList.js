import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultDetails from './ResultsDetails';

const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
    console.log(navigation);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item}) =>{
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('Result', { id: item.id }) }>
                            <ResultDetails result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    container:{
        marginBottom: 10,
    },
});

export default ResultsList;