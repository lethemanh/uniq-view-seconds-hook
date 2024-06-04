import { useState, useEffect } from 'react';

const useUniqViewSeconds = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://664ac067a300e8795d42d1ff.mockapi.io/api/v1/numbers/1',
        );
        const result = await response.json();

        const viewSeconds = result.numbers;
        const uniqueViewSeconds = new Set(viewSeconds.flat());
        const uniqueSortedViewSeconds = Array.from(uniqueViewSeconds).sort(
          (a, b) => a - b,
        );

        setData(uniqueSortedViewSeconds);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useUniqViewSeconds;
