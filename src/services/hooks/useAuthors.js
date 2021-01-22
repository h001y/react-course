import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {stringify} from "qs";
import { API_TOKEN } from '../../services/helpers/constants';

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appnTJaLKZEKO39K2',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
})

function _fetch_data() {
    return (
        httpClient.get('/Authors', {
            params: {
                maxRecords: 15,
                view: 'Grid view',
                sort: [{field: 'id', direction: 'asc'}]
            },
            paramsSerializer: (params) => {
                return stringify(params, { arrayFormat: 'brackets' })
            }
        })
            .then(result => result.data)
            .then(_mapFromAirtable)
    )
}

function _mapFromAirtable(data) {
    return data.records.map(
        record => ({
            id: record.id,
            email: record.fields.email,
            name: record.fields.name,
            description: record.fields.description,
            avatar: record.fields.avatar,
            books: record.fields["Books"]
        })
    )
}

const useAuthors = () => {
    const [authors, setAuthors] = useState(null)

    useEffect(() => {
        _fetch_data().then(authors => {
            setAuthors(authors)
        })
    }, [])


    return authors
}

export default useAuthors