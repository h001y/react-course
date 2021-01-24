import React from 'react'
import { Link } from 'react-router-dom'
import Template from "../../template";
import { Helmet } from "react-helmet";

const Error404 = () => {
    return(
        <Template>
            <Helmet>
                <title>404 Error</title>
            </Helmet>
            <p>This page is not found. Try again later, bud</p>
            <span>404 Error</span>
            <Link to={'/'}>Back</Link>
        </Template>
    )
}

export default Error404