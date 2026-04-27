import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`
        );

        setData(res.data.conversion_rates);
        console.log(res.data.conversion_rates);
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    fetchData();
  }, [currency, apiKey]);

  return data;
};
export default useCurrencyInfo;
