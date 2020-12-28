import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../shared/Layout";

const Error401 = () => {
    return(
        <Layout>
            <p>Sorry, if you see this message - something gonna wrong</p>
               <span>401 Error</span>
            <Link to={'/'}>Back</Link>
        </Layout>
    )
}

export default Error401