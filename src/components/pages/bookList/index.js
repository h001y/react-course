import React from 'react';
import useBooks from "../../../services/hooks/UseBooks";
import WithLoader from "../../../services/HOC-comp/WithLoader";

const BookList = () => {

    const books = useBooks()
    const book = books[0]
    const bookId = book.id
    const book1 = books[1]
    const bookId1 = book1.id
    const book2 = books[2]
    const bookId2 = book2.id


    if (!books)
        return <div>Empty book</div>

    return (
        <div className="w3-container">
            <a href={bookId} >{book.name}</a>
            <a href={bookId1} >{book1.name}</a>
            <a href={bookId2} >{book2.name}</a>
        </div>
    );
}

export default WithLoader(BookList);