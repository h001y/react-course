import React from 'react';

const BookName = ({ name }) => {

    return (
            <div className='w3-row'>
                <div className='w3-col w3-padding w3-xxlarge left'>{name}</div>
            </div>
    );
}

export default BookName;