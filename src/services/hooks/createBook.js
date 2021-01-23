import axios from 'axios';
import { API_TOKEN } from "../helpers/constants";

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appnTJaLKZEKO39K2',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
})

export function createBook(fields) {
    return (
        httpClient.post('/Books', {
            records: [
                {
                    fields
                }
            ]
        }).then(result => result.data)
    )
}