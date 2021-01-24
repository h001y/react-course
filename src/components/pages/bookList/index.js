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
            <div className='w3-container'>
            {
                books ?
                    books.map((book) => {
                        return (
                            <p key={book.id}>
                                <Link to={bookPath(book.id)}>
                                    <div className='w3-row'>
                                        <div className='w3-col m1'>
                                            <img src={book.urlPic} width="80px" height="80px" alt={book.name}/>
                                        </div>
                                        <div className='w3-col m6'>
                                              {book.name}
                                        </div>
                                    </div>
                                </Link>
                            </p>
                        )
                    })
                    : <p>None</p>
            }
            </div>
        </Template>
    )
}

export default BookList