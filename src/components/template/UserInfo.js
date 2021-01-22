import React, { useContext } from 'react';
import AuthContext from '../../services/AuthContext';

const UserInfo = () => {
    const authUser = useContext(AuthContext);

    return (
        authUser.email
            ? (
                <div className='w3-right w3-row'>
                    <div className='w3-col w3-padding'>
                        You logged how:
                        <br/><img width='30px' src={user.avatar}/> {user.firstName} {user.lastName}
                    </div>
                </div>
            )
            : <button className='w3-right w3-margin w3-padding w3-button w3-green w3-large'>Войти</button>
    )
};

export default UserInfo;