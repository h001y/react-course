import React from 'react';
import Template from "../../template";
import {Helmet} from "react-helmet";

const Main = () => {
    return(
        <Template>
            <Helmet>
                <title>CrowdFunding Site</title>
            </Helmet>
            <b>Main Page</b>
            <div className='main-page-blank-space'>
                <a className='w3-button w3-green w3-xlarge' href='/404'>404 Error</a>
                <a className='w3-button w3-cyan w3-xlarge' href='/wishlist'>wishList</a>
                <a className='w3-button w3-cyan w3-xlarge' href='/booklist'>bookList</a>
            </div>
        </Template>
    )
}

export default Main