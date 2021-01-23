import React from 'react';
import useBooks from "../../../services/hooks/UseBooks";
import WithLoader from "../../../services/HOC-comp/WithLoader";

const BookList = () => {

    const books = useBooks();
    console.log(books);

    if (!books)
        return <div>Empty book</div>

    return (
        <div className="w3-container">
            <a href={books.id} >{books.name}</a>
            <a href={books.id} >{books.name}</a>
            <a href={books.id} >{books.name}</a>
        </div>
    );
}

export default WithLoader(BookList);