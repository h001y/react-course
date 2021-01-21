import React, {Component} from 'react'
import BookCard from './bookCard/BookCard';
import axios from 'axios'
import { zip, zipObject } from 'lodash'
import {stringify} from 'qs'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appnTJaLKZEKO39K2',
    timeout: 1000
})

class BookContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: null,
            otherBooks: []
        }
    }

    componentDidMount() {
        this._fetch_data()
    }

    _fetch_data() {
        httpClient.get('/Books' , {
            params: {
                maxRecords: 5,
                api_key: 'keyxVH3YtgGxjTv8g'
            },
            paramsSerializer: (params) => stringify(params, { arrayFormat: 'brackets' })
        })
            .then(result => result.data)
            .then(this._mapFromAirtable)
            .then(books => {


                this.setState({
                    book: books[0],
                    otherBooks: books.slice(1,5)
                })
            })
    }

    _mapFromAirtable(data) {

        const _mapAuthors = (fields) => {

            return zip(
                fields["id (from Authors)"],
                fields["name (from Authors)"],
                fields["email (from Authors)"],
                fields["avatar (from Authors)"],
                fields["description (from Authors)"]
            ).map(record => zipObject(
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

    render() {
        const { book, otherBooks } = this.state

        return (
            book
                ? <BookCard book={book} otherBooks={otherBooks}/>
                : <div>Loading...</div>
        )
    }
}

export default BookContainer