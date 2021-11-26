import React, { useState, useEffect } from 'react';
import PaginacionGaleria from './components/PaginacionGaleria';
import axios from 'axios';
import './AppGaleria.css';
import CardsGaleriaView from './components/CardsGaleria';

const AppGaleria = () => {
  const [CardsGaleria, setCardsGaleria] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsGaleriaPerPage] = useState(4);

  useEffect(() => {
    const fetchCardsGaleria = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3000');
      setCardsGaleria(res.data);
      setLoading(false);
    };

    fetchCardsGaleria();
  }, []);

  // Get current cards
  const indexOfLastCardGaleria = currentPage * cardsGaleriaPerPage;
  const indexOfFirstCardGaleria = indexOfLastCardGaleria - cardsGaleriaPerPage;
  const currentCardsGaleria = CardsGaleria.slice(indexOfFirstCardGaleria, indexOfLastCardGaleria);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h3 className='text-secondary mb-6'>GALERIA</h3>
      <CardsGaleriaView posts={currentCardsGaleria} loading={loading} /> 
      <PaginacionGaleria
        cardsGaleriaPerPage={cardsGaleriaPerPage}
        totalcardsGaleria={12}
        paginate={paginate} 
      /> 
      
    </div>
  );
};

export default AppGaleria;