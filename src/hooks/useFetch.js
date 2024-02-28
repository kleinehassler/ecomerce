import {useState} from 'react';
import axios from 'axios';

const useFetch = () => {
    const [ apiData, setApiData] = useState();
    const getApi = (url, key={}) => {
        axios.get(url, key)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err));
    }
    
    return [apiData, getApi];
}

export default useFetch;
