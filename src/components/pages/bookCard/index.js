import React from 'react';
import Template from "../../template";
import {Helmet} from "react-helmet";
import BookCard from "./bookCard";
import useBooks from "../../../services/hooks/useBooks";
import { mainPath, booklistPath } from "../../../services/helpers/routes";
import {Link} from "react-router-dom";

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
            <div className='w3-row w3-center w3-xlarge'>
                Book Page
            </div>

                <div className='w3-row w3-margin'>
                    <Link to={mainPath()}>
                        <button className='w3-button w3-gray'> Main page </button>
                    </Link>
                </div>
                <div className='w3-row w3-margin'>
                    <Link to={booklistPath()}>
                        <button className='w3-button w3-green'> Back to booklist</button>
                    </Link>
                </div>


            { book ?
                <BookCard book={book} /> : <div> Loading ...</div>
            }
        </Template>
    )
}

export default Book