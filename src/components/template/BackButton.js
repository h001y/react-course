import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    const goBack = () => {
        if (history.action === 'PUSH')
            history.goBack();
        else
            history.push('/');
    };

    return (
        <Link to="/">
            <button>
                Вернуться назад
            </button>
        </Link>
    );
}

export default BackButton;