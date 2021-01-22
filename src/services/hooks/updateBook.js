import axios from 'axios';
import { API_TOKEN } from '../../services/helpers/constants';

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appnTJaLKZEKO39K2',
    timeout: 5000,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
})

export function updateBook(bookId, fields) {
    console.log(fields)
}