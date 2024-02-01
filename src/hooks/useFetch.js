import { useState, useEffect } from 'react';

const useFetch = (url, method = 'GET', options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method,
        ...options,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      // console.log(result)
    } catch (error) {
      setError(error);
      // console.log(error)
    } finally {
      setIsLoading(false);
    }
  };
//   fetchData();
  useEffect(() => {
    fetchData();
  }, [url,method]);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
