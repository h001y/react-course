import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    cookieImg: {
        width: '40px',
        height: '40px'
    },
    overlay:{
        backgroundColor: 'rgba(0,0,0,0.95)',
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    body: {
        backgroundColor: '#fff',
        padding: '10px'
    }
}

const cookieImg = 'https://www.freeiconspng.com/uploads/dark-fresh-chocolate-cookie-pictures-12.png';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <button onClick={() => this.toggle()}>Show privace policy</button>
                {
                    this.state.isOpen && ReactDOM.createPortal(
                        <div style={styles.overlay}>
                            <div style={styles.body}>
                                <h3>Private policy</h3>
                                <p>We use cookie</p>
                                <img style={styles.cookieImg} src={cookieImg}/>
                                <button onClick={() => this.toggle()}>Close modal</button>
                            </div>
                        </div>,
                        document.getElementById('modal-root')
                    )
                }
            </>
        )

    }


}
export default Modal;


