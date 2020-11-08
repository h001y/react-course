import React from 'react';
import BookCard from './BookCard';
import Modal from './Modal';
import FormName from './FormName';
import UserInfo from './UserInfo';
import SimilarBookList from "./SimilarBookList";

import './index.css'


const styles = {
    header:{
        backgroundColor:'#ffffff',
        color:'#2b1b1b',
        fontSize: '26px',
        fontFamily:'OpenSans',
        minHeight:'50px',
        marginBottom:'45px'
    },
    footer:{
        backgroundColor:'#eec2c2',
        color:'#705151',
        minHeight:'140px',
        marginTop:'60px',
        paddingLeft: '20px',
        paddingTop: '20px',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px'
    },
    logo:{
        maxWidth:'110px',
    }
}

const FooterBlock = ( props ) => {
    return(
        <footer style={styles.footer}>
            <div>
                <br /><span> Made with love from Russia { props.yearToday } @copyright</span>
                <br /><span> All Right reserved</span>
                <br /><span> Protected by <a href="">WTFPL</a> License</span>
                <div>
                    <Modal />
                </div>
            </div>
        </footer>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { book } = this.props;

        return (
            <>
                <header className='w3-border-bottom' style={styles.header}>
                    <img style={styles.logo} src="https://yt3.ggpht.com/a/AATXAJxkA6CVZcSR64aThQwgfWasaPr3OfXsOWkoz5Es=s900-c-k-c0xffffffff-no-rj-mo" />
                    CrowdBook
                    <UserInfo />
                </header>
                <main>
                    <div>
                        <h2 className='w3-center w3-padding'>{book.name}</h2>
                        <BookCard book={book} />
                    </div>
                    <div>
                        <h2 className='w3-center w3-padding'>Similar books</h2>
                        <SimilarBookList />
                    </div>
                    <div>
                        <FormName />
                    </div>
                </main>
                <FooterBlock yearToday={new Date().getFullYear()}/>
            </>
        );

    }
}

export default App;