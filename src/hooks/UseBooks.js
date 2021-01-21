import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {stringify} from "qs";
import * as _ from "lodash";

const API_TOKEN = 'keyxVH3YtgGxjTv8g'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appnTJaLKZEKO39K2',
    timeout: 1000
})

function _fetch_data() {
    return (
        httpClient.get('/Books?api_key='+API_TOKEN , {
            params: {
                maxRecords: 5
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

    const _mapAuthors = (fields) => {

        return _.zip(
            fields["id (from Authors)"],
            fields["name (from Authors)"],
            fields["email (from Authors)"],
            fields["avatar (from Authors)"],
            fields["description (from Authors)"]
        ).map(record => _.zipObject(
            ['id', 'name', 'email', 'avatar', 'description'],
            record
        ))
    }

    return data.records.map(
        record => ({
            id: record.fields.id,
            name: record.fields.name,
            shortDescription: record.fields.shortDescription,
            pagesNum: record.fields.pagesNum,
            language: record.fields.language,
            progress: record.fields.progress,
            urlPic: record.fields.urlPic,
            minPrice: record.fields.minPrice,
            expectPrice: record.fields.expectPrice,
            takenBill: record.fields.takenBill,
            WaitingBill: record.fields.WaitingBill,
            subscribers: record.fields.subscribers,
            authors: _mapAuthors(record.fields)
        })
    )
}

const useBooks = () => {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        _fetch_data().then(books => {
            setBooks(books)
        })
    }, [])

    return books
}

export default useBooks