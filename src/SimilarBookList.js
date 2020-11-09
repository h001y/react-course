import React from 'react';

const similar_books = {
    'similar_books':  [
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

const SimilarBookCard = ( props ) => {
    return(
        <div>
            <div className='w3-center w3-large w3-padding'> { props.name }</div>
            <div className='w3-left w3-padding'> <img alt={ props.name } width='70px' height='100px' src={ props.coverImg } /></div>
            <div className='w3-small w3-padding'> { props.description } </div>
            <div className='w3-right w3-padding'> { props.author } </div>

        </div>
    );
};

class SimilarBookList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='w3-row'>
                {
                    similar_books.similar_books.map((similar_book) => (
                        <div key={ similar_book.bookId }  className='w3-col m4 l4 s4'>
                            <SimilarBookCard name={ similar_book.name }
                                             description={ similar_book.description }
                                             author={ similar_book.author }
                                             coverImg={ similar_book.coverImg }
                            />
                        </div>
                    ))
                }
            </div>
        );
    }
}


export default SimilarBookList;