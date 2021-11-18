import React from 'react';

const Paginacion = ({ cardsPerPage, totalcards, paginate }) => {
const pageNumbers = [];
console.log(cardsPerPage)
console.log(totalcards)
for (let i = 1; i <= Math.ceil(totalcards / cardsPerPage); i++) {
    pageNumbers.push(i);
}

return (
    <nav>
    <ul className='paginacion'>
        {pageNumbers.map(number => (
        <div key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
            {number}
            </a>
        </div>
        ))}
    </ul>
    </nav>
);
};

export default Paginacion;