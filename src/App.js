import React from 'react';
import BookCard from './BookCard';
import Modal from './Modal';
import FormName from './FormName';
import Header from './template/Header';
import Footer from './template/Footer';
import UserInfo from './UserInfo';
import SimilarBookList from "./SimilarBookList";

import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { book } = this.props;

        return (
            <>
                <Header />
                <main>
                    <div>
                        <h2 className='w3-center w3-padding'>{book.name}</h2>
                        <BookCard />
                    </div>
                    <div>
                        <h2 className='w3-center w3-padding'>Similar books</h2>
                        <SimilarBookList />
                    </div>
                    <div>
                        <FormName />
                    </div>
                </main>
               <Footer />
            </>
        );
    }
}

export default App;