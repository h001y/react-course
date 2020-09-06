import React from 'react';

const styles = {
    cookieImg: {
        width: '40px',
        height: '40px'
    }
}

const cookieImg = 'https://www.freeiconspng.com/uploads/dark-fresh-chocolate-cookie-pictures-12.png';



class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) return null;
        return (
            <button onClick={() => this.openModal()}>Open modal</button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}>
                    <h3>Private policy</h3>
                    <p>We use cookie</p>
                    <img style={styles.cookieImg} src={cookieImg}/>
                </Modal>
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

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }
}

export default Modal;

