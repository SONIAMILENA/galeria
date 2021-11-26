import React from 'react';
import "./paginacionGaleria.css";

const paginacionGaleria = ({ cardsGaleriaPerPage, totalcardsGaleria, paginate }) => {
const pageNumbers = [];
console.log(cardsGaleriaPerPage)
console.log(totalcardsGaleria)
for (let i = 1; i <= Math.ceil(totalcardsGaleria / cardsGaleriaPerPage); i++) {
    pageNumbers.push(i);
}

return (
    <nav id='paginacionGaleria'>
    <ul>
        {pageNumbers.map(number => (
        <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
            {number}
            </a>
        </li>
        ))}
    </ul>
    </nav>
);
};

export default paginacionGaleria;