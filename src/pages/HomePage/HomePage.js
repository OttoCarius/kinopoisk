import { useState, useEffect } from 'react';
import MovieList from '../../components/MoviesList/MoviesList';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import PixabayApi from '../../services/PixabayApi';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState('');

  // Срабатывает при маунте
  useEffect(() => {
    fetchData();
  }, []);

  // Запрос за трендами при маунте
  const fetchData = async () => {
    setLoading(true);

    try {
      const movies = await PixabayApi.fetchTrends();

      setTrends(movies);
    } catch (error) {
      console.error('Smth wrong with homepage trends fetch', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {trends ? (
        <MovieList movies={trends} />
      ) : (
        <Message>
          <h2>
            The service is temporarily unavailable. Please try again later.
          </h2>
        </Message>
      )}

      {isLoading && <Loader />}
    </main>
  );
};

export default HomePage;
