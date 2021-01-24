import React from 'react';
import Template from "../../template";
import {Helmet} from "react-helmet";
import { newBookPath, editBookPath, bookPath, mainPath, booklistPath, contactPath } from "../../../services/helpers/routes";
import {Link} from "react-router-dom";

const Main = () => {
    return(
        <Template>
            <Helmet>
                <title>CrowdFunding Site</title>
            </Helmet>
            <h1>Main Page</h1>
            <div className='main-page-blank-space'>
                <Link to={newBookPath()}>
                    <button className='w3-button w3-green w3-xlarge'>newBookPath</button>
                </Link>
                <Link to={mainPath()}>
                    <button className='w3-button w3-green w3-xlarge'>mainPath</button>
                </Link>
                <Link to={booklistPath()}>
                    <button className='w3-button w3-green w3-xlarge'>booklistPath</button>
                </Link>
                <Link to={contactPath()}>
                    <button className='w3-button w3-green w3-xlarge'>contactPath</button>
                </Link>
            </div>
        </Template>
    )
}

export default Main