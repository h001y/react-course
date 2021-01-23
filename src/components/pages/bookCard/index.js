import React from 'react';
import Template from "../../template";
import {Helmet} from "react-helmet";
import BookCard from "./bookCard";
import useBooks from "../../../services/hooks/useBooks";

const Book = ({match: {params}}) => {

    const { books, findBook, otherBooks } = useBooks()

    if (!books)
        return <div>Empty book</div>

    const book = findBook(params.id)

    return(
        <Template>
            <Helmet>
                <title>Book page</title>
            </Helmet>
            <b>Book Page</b>
            { book ?
                <BookCard book={book} /> : <div> Loading ...</div>
            }
        </Template>
    )
}

export default Book