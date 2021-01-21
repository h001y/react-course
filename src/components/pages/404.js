import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../shared/Layout";

const Error404 = () => {
    return(
        <Layout>
            <p>This page is not found. Try again later, bud</p>
            <span>404 Error</span>
            <Link to={'/'}>Back</Link>
        </Layout>
    )
}

export default Error404