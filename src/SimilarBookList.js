import React from 'react';
import AuthorCard from "./AuthorCard";

class SimilarBookList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if (!this.props.similar_books) {
            return <div>No books recommend for you</div>;
        }

        const { similar_books } = this.props;

        //const showedAuthors = showAllAuthors ? similar_books : similar_books.slice(0, 3);

     /*   return (
            <div>
                {
                    similar_books.map((similar_book) => (
                        <div key={similar_book.bookId}>
                            <AuthorCard author={ similar_book } />
                        </div>
                    ))
                }
            </div>
        ); */
    }
}

export default SimilarBookList;