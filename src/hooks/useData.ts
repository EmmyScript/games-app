
import { useEffect, useState } from "react";
import apiClient from "../component/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";




interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[]) =>{
    const[data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
const controller = new AbortController();



setLoading(true);
        apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) => {
         setData(res.data.results);
         setLoading(false);
        })   
        .catch((err) =>{ 
        if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });
        return() => controller.abort();
        
    }, deps ? [...deps] : [])

    return{ data, error, isLoading};
    
}

export default useData;

/*rr 
const [games setGames] =useState([])
const[error, setError] = useState('')

const useEffect(() => {
    const controller = new Abortcontroller();
    apiClent
    .get('/games', signal: c.s)
    .then((res) => setGames(res.data.result))
    .catch((err)=> setError(err.message))
    return controller.abort()
},[])
ret{games,  error }
*/