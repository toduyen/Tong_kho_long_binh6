import axios from 'axios';
import React, { useEffect , useState } from 'react';
const CallApiIss = (initialUrl , initialData) => {
    const [Data, setData] = useState(initialData);
    const [Url, setUrl] = useState(initialUrl);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    useEffect(() => {
       const getData = async () => {
           setLoading(true);
           setError(false);
           try {
               const dataview = await axios(Url);
               setData(dataview.data);
           } catch{
               setError(true);
           }
           setLoading(false);
       }
       setInterval(getData, 2000);
    }, [Url])
    return [{Data , Loading , Error},setUrl];
}
export default CallApiIss;