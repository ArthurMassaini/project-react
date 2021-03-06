import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsList from '../components/ProductsList';
import Header from '../components/Header';
import * as ACTIONS from '../redux/actions/index';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAction = () => {
      dispatch(ACTIONS.fetchGames());
    };
    fetchAction();
  }, [dispatch]);

  return (
    <main>
      <Header type="home"/>
      <ProductsList />
    </main>
  );
}

export default Home;
