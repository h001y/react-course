import React from 'react';

const SimpleRow = ({ label, rowDescription, rowDynamic }) => {

    return (
        <>
            <div id={label} className= 'w3-row w3-padding m2'>
                {rowDescription} {rowDynamic}
            </div>
        </>
    );
}

export default SimpleRow;