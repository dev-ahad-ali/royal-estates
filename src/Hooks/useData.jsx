import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setDataLoading(false);
            });
    }, []);
    return { data, dataLoading };
};

export default useData;
