import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../index.css'

const Template = ({children}) => {

        return (
            <>
                <Header />
                <main>
                    { children }
                </main>
                <Footer />
            </>
        );
}

export default Template;