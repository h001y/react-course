import React from 'react';
import BookCard from './bookCard/BookCard';
import FormName from './FormName';
import Header from './template/Header';
import Footer from './template/Footer';
import SimilarBookList from "./SimilarBookList";

import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                <main>
                    <div>
                        <h2 className='w3-left w3-padding'> You looking now </h2>
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