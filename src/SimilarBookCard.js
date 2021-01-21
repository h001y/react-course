import React from 'react';

const SimilarBookCard = ({ book, removeFromList }) => (
    <div>
        <div key={book.bookId} className='w3-col m6 l4 s12'>
            <div className='w3-right'>
                <button className='w3-button' onClick={() => removeFromList(book.bookId)}>X</button>
            </div>
            <div className='w3-center w3-large w3-padding'> {book.name}</div>
            <div className='w3-left w3-padding'><img alt={book.name} width='70px' height='100px'
                                                     src={book.coverImg}/></div>
            <div className='w3-small w3-padding'> {book.description} </div>
            <div className='w3-right w3-padding'> {book.author} </div>
        </div>
    </div>
);

export default React.memo(SimilarBookCard);