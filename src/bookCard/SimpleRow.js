import React from 'react';

const SimpleRow = (props) => {
    const { label, rowDescription, rowDynamic } = props;
    return (
        <>
            <div id={label} className= 'w3-row w3-padding m2'>
                {rowDescription} {rowDynamic}
            </div>
        </>
    );
}

export default SimpleRow;