import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
          'X-RapidAPI-Key': 'c79597719emsh6c5f2cdbb7c1ee8p15ace3jsndeed802930a2',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error){
            setError(error);
            alert("There is an error")
        } finally {
            setIsLoading(false);
        }
    }
    // get the data when the application/page is first loaded
    useEffect(() => {
        fetchData();
    }, []);

    // soemtimes the data doesn't get fethced when reloading so we gotta get the data again
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch;