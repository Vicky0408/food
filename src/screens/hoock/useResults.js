import {useEffect , useState}  from 'react';
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
useEffect(() => {
    console.log('hello===')
    searchApi('pasta');
},[]);

    const searchApi = async () =>{
        console.log('hii');
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 10,
                    term,
                    location: 'san jose'
                }
            });
            console.log(response)
            setResults(response.data.businesses);    
        }catch(err){
            setErrorMessage('some things is wrong');
        }
        
       
    };
console.log(results)
//console.log(term)

return [searchApi, results, errorMessage];
};