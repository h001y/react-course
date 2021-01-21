import React from 'react';
import ReactDOM from 'react-dom';
import AuthContext from './AuthContext';
import App from './App';

const user = {
    'name': 'Gregor@Hohpe.com',
    'firstName': 'Gregor',
    'lastName': 'Hohpe',
    'avatar': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/341672/original/gregor_hohpe_hires.jpg?1579927914'
}

ReactDOM.render(
    <AuthContext.Provider value={user}>
        <App />
    </AuthContext.Provider>,
    document.getElementById('root')
);
