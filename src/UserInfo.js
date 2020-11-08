import React from 'react';
import AuthContext from './AuthContext';

const UserInfo = () => (
    <AuthContext.Consumer>
        {
            user => (
                <div className='w3-right w3-row'>
                    <div className='w3-col w3-padding'>
                        <img width='40px' src={user.avatar}/> {user.firstName} {user.lastName}
                    </div>
                </div>
            )
        }
    </AuthContext.Consumer>
);

export default UserInfo;