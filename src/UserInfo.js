import React from 'react';
import AuthContext from './AuthContext';

const UserInfo = () => (
    <AuthContext.Consumer>
    {
        user => (
            <div>
                <h1>{user.name}</h1>
                <h2>{user.firstName}</h2>
                <h3>{user.lastName}</h3>
                <img width='40px' src={user.avatar} />
            </div>
        )
}
    </AuthContext.Consumer>
);

export default UserInfo;