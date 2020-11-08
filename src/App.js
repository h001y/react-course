import React from 'react';
import BookCard from './BookCard';
import Modal from './Modal';
import FormName from './FormName';
import UserInfo from './UserInfo';

import './index.css'

const styles = {
    header:{
        backgroundColor:'#d3ddf3',
        color:'#2b1b1b',
        fontSize: '26px',
        fontFamily:'OpenSans',
        minHeight:'50px',
        marginBottom:'45px',
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
                <header style={styles.header}>
                    <img style={styles.logo} src="https://img2.freepng.es/20181120/eu/kisspng-buffalo-sabres-national-hockey-league-logo-buffalo-buff-5bf4276210f435.6754865615427275220695.jpg" />    SomeHeader
                    <UserInfo />
                </header>
                <main>
                    <div>
                        <Modal />
                    </div>
                    <div>
                        <BookCard book={book} />
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