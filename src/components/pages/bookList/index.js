import React from 'react';
import Template from "../../template";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import useBooks from "../../../services/hooks/useBooks";
import { bookPath } from "../../../services/helpers/routes";

const BookList = () => {

    const { books } = useBooks()

    if (!books)
        return <div>Empty book</div>


    return(
        <Template>
            <Helmet>
                <title>Book List</title>
            </Helmet>
            <b>Book Page</b>
            {
                books ?
                    books.map((book) => {
                        return (
                            <p key={book.id}>
                                <Link to={bookPath(book.id)}>{book.name}</Link>
                            </p>
                        )
                    })
                    : <p>None</p>
            }
        </Template>
    )
}

export default BookList