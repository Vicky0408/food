import {useEffect , useState}  from 'react';
import yelp from '../../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    

    const searchApi = async (term) =>{
        console.log('hii');
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);    
        }catch(err){
            console.log(err)
            setErrorMessage('some things is wrong');
        }
        
       
    };
//console.log(results)
//console.log(term)
useEffect(() => {
    searchApi('pasta');
},[]);

return [searchApi, results, errorMessage];
};