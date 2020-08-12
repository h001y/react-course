import React from 'react';
import BookCard from './BookCard';

class App extends React.Component {
    render() {
        const { book } = this.props;
        return (
            <>
                <header style={styles.header}>
                    <img style={styles.logo} src="https://img2.freepng.es/20181120/eu/kisspng-buffalo-sabres-national-hockey-league-logo-buffalo-buff-5bf4276210f435.6754865615427275220695.jpg" />    SomeHeader
                </header>
                  <main>
                      <BookCard book={book} />
                  </main>
                <footer style={styles.footer}>
                   <div>
                       <span> Made with love from Russia 2020 @copyright</span>
                       <span> All Right reserved</span>
                       <span> Protected by <a href="">WTFPL</a> License</span>
                   </div>
                </footer>
            </>
        );
    }
}

export default App;

const styles = {
    header:{
        backgroundColor:'#d6e4f6',
        color:'#2b1b1b',
        minHeight:'50px',
        marginBottom:'45px',
    },
    footer:{
        backgroundColor:'#cdcaca',
        color:'#2e2e2e',
        minHeight:'140px',
        marginTop:'60px',
    },
    logo:{
        maxWidth:'110px',
    }

}