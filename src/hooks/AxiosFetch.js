import axios from '../api/axios';
import { useEffect, useState } from 'react';

const AxiosFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        async function getData(){
            try{
                const response = await axios.get(url);
                setData(response.data);
                
                setIsPending(false);
            } catch (error){
                error.message = "Connection to the server failed";
                setError(error);
                setIsPending(false);
            }
        }
        getData();
    },[url]);
    return [ data, isPending, error ];
}
 
export default AxiosFetch;

