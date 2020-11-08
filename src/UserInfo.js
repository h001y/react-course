import React from 'react';
import AuthContext from './AuthContext';

const UserInfo = () => (
    <AuthContext.Consumer>
        {
            user => (
                <div className='w3-right w3-row'>
                    <div className='w3-col w3-padding'>
                        You logged how:
                        <br /><img width='30px' src={user.avatar}/> {user.firstName} {user.lastName}
                    </div>
                </div>
            )
        }
    </AuthContext.Consumer>
);

export default UserInfo;