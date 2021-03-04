import React,{useState ,useEffect} from 'react'
import {View, Text ,StyleSheet} from 'react-native'
import SearchBar from '../component/SearchBar'
import useResults from '../hoock/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
   
    return (
    <View>
    
        <SearchBar 
        term={term}
        onTermChange={setTerm} 
        onTermSubmite={searchApi}/>
       {errorMessage ? <Text>{errorMessage}</Text> : null} 
        <Text>We have Found {results.length} results</Text>
       
    </View>
    );
};

const styles = StyleSheet.create({})

export default SearchScreen