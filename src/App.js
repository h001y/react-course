import React from 'react';
import BookCard from './BookCard';

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
                       <br /><span> Made with love from Russia {new Date().getFullYear()} @copyright</span>
                       <br /><span> All Right reserved</span>
                       <br /><span> Protected by <a href="">WTFPL</a> License</span>
                   </div>
                </footer>
            </>
        );
    }
}

export default App;