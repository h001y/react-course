import React from 'react';
import BookCard from './BookCard';

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
    },
    cookieImg: {
        width: '40px',
        height: '40px'
    }

}

const cookieImg = 'https://www.freeiconspng.com/uploads/dark-fresh-chocolate-cookie-pictures-12.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
    }
    render() {
        const { book } = this.props;
        return (
            <>
                <header style={styles.header}>
                    <img style={styles.logo} src="https://img2.freepng.es/20181120/eu/kisspng-buffalo-sabres-national-hockey-league-logo-buffalo-buff-5bf4276210f435.6754865615427275220695.jpg" />    SomeHeader
                </header>
                <main>
                    <div>
                        <button onClick={() => this.openModal()}>Open modal</button>
                        <Modal
                            isOpen={this.state.isModalOpen}
                            onClose={() => this.closeModal()}>
                            <h3>Private policy</h3>
                            <p>We use cookie</p>
                            <img style={styles.cookieImg} src={cookieImg}/>
                        </Modal>

                    </div>
                    <div>
                        <BookCard book={book} />
                    </div>
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

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

}

class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) return null;
        return (
            <div>
                <div className="modal">{this.props.children}</div>
                <div className="bg" onClick={e => this.close(e)} />
            </div>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}


export default App;