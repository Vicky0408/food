import React,{useState} from 'react'
import {View, Text ,StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../component/SearchBar'
import useResults from './hoock/useResults'
import ResultsList from '../component/ResultsList'

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price=== price ;
        });
    };
   
    return (
    <View >
        <SearchBar 
        term={term}
        onTermChange={setTerm} 
        onTermSubmite={searchApi}/>
       {errorMessage ? <Text>{errorMessage}</Text> : null} 
        <Text>We have Found {results.length} results</Text>
        <ScrollView>
            <ResultsList results={filterResultByPrice('$')} title="Cost Effect" navigation={navigation} />
            <ResultsList results={filterResultByPrice('$$')} title="Big Pricier" navigation={navigation} />
            <ResultsList results={filterResultByPrice('$$$')} title="Big Spender" navigation={navigation}/>
        </ScrollView>
        
       
    </View>
    );
};

const styles = StyleSheet.create({
    contener:{
        flex: 1
    },
})

export default SearchScreen