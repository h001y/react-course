import React from 'react';
import Modal from "../Modal";

const footer = {
    mainStyle: {
        backgroundColor:'#eec2c2',
        color:'#705151',
        minHeight:'140px',
        marginTop:'60px',
        paddingLeft: '20px',
        paddingTop: '20px',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px'
    }
};

const Footer = () => {
    return(
        <footer style={footer.mainStyle}>
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

export default Footer;