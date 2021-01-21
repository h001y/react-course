import React from 'react';
import BookCard from './bookCard/BookCard';
import Modal from './Modal';
import FormName from './FormName';
import UserInfo from './UserInfo';
import BookContainer from './BookContainer';
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

const FooterBlock = () => {
    return(
        <footer style={styles.footer}>
            <div>
                <div><span> Made with love from Russia {new Date().getFullYear()} @copyright</span></div>
                <div><span> All Right reserved</span></div>
                <div><span> Protected by <a href="">WTFPL</a> License</span></div>
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
                <header className='w3-border-bottom w3-padding' style={styles.header}>
                    <img style={styles.logo}
                         className="w3-padding"
                         src="https://thumbs.dreamstime.com/b/%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D1%83%D1%8E%D1%89-%D0%B2-%D0%B8%D0%B4%D0%B5%D1%8E-crowdfunding-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-112514795.jpg" />
                    CrowdBook
                    <UserInfo />
                </header>
                <main>
                    <div>
                        <h2 className='w3-center w3-padding'>{book.name}</h2>
                        <BookContainer />
                    </div>
                    <div>
                        <h2 className='w3-center w3-padding'>Similar books</h2>
                        <SimilarBookList />
                    </div>
                    <div>
                        <FormName />
                    </div>
                </main>
                <FooterBlock/>
            </>
        );

    }
}

export default App;