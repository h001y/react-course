import React from 'react';

class SimilarBookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'books':  [
                {
                    'bookId' : '1',
                    'name': 'Python Data Analysis with Pandas',
                    'description': 'An introduction to Data Analysis with Python Pandas. The book covers data structures, parsing Excel, CSV, Text Data, Visualization, Summarization and a lot more',
                    'author': 'Frank Anemaet',
                    'coverImg': 'https://d2sofvawe08yqg.cloudfront.net/pythondataanalysiswithpandas/hero?1604605064'
                },
                {
                    'bookId' : '2',
                    'name': 'C++ Best Practices',
                    'description': 'Level up your C++, get the tools working for you, eliminate common problems, and move on to more exciting things!',
                    'author': 'Jason Turner',
                    'coverImg': 'https://d2sofvawe08yqg.cloudfront.net/cppbestpractices/hero?1600986887'
                },
                {
                    'bookId' : '3',
                    'name': 'Algebra-Driven Design',
                    'description': 'A how-to field guide on building leak-free abstractions and algebraically designing real-world applications.',
                    'author': 'Sandy Maguire',
                    'coverImg': 'https://d2sofvawe08yqg.cloudfront.net/algebra-driven-design/hero?1598856635'
                }
            ]
        }
        this.removeFromList = this.removeFromList.bind(this);
    }

    removeFromList(bookId) {
        this.setState(( state ) => ({
            books: state.books.filter(book => book.bookId != bookId)
        }));
    }

    render() {
        const { books } = this.state;
        return (
            <div className='w3-row'>
                <SimilarBookCard removeFromList={this.removeFromList} books={ books }/>
            </div>
        );
    }
}

export default SimilarBookList;

const SimilarBookCard = ({ books, removeFromList }) => (
    books.length > 0 ?
        <div>
            {
                books.map( book  => (
                    <div key={book.bookId} className='w3-col m4 l4 s4'>
                        <div className='w3-right'>
                            <button className='w3-button' onClick={() => removeFromList(book.bookId)}>X</button>
                        </div>
                        <div className='w3-center w3-large w3-padding'> {book.name}</div>
                        <div className='w3-left w3-padding'><img alt={book.name} width='70px' height='100px'
                                                                 src={book.coverImg}/></div>
                        <div className='w3-small w3-padding'> {book.description} </div>
                        <div className='w3-right w3-padding'> {book.author} </div>
                    </div>
                ))
            }
        </div>
        : <div> <h2>No similar books</h2> </div>
);