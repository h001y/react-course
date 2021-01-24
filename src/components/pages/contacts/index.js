import React from 'react';
import Template from '../../template';
import BackButton from '../../template/BackButton';

const Contacts = () => {
    return (
        <Template>
            <BackButton />
            <div>
                <h2>Contacts</h2>
                <div>
                    e-mail: <span>your_fabourites_crowd@gmail.com</span>
                </div>
                <div>
                    Company: <span>OOO "Mum-kupi"</span>
                </div>
                <div>
                    Director name: <span>Fyodor Kolotushkin</span>
                </div>
            </div>
        </Template>
    )
}

export default Contacts;