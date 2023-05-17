import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    let respose = await fetch(url);
    const data = respose.json;
    setState({ data, isLoading: false, hasError: null });
  };

  useEffect(() => {
    getFetch;
  }, [url]);

  return state;
};
