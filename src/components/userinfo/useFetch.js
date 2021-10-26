import {useState,useEffect} from 'react';
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                    if (!res.ok) {
                        throw Error('Oops!!');
                    }
                    return res.json();
                }
            )
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                console.log(err)
            })
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;
