import React from 'react';
import UserInfo from "./UserInfo";

const header = {
    mainClass: 'w3-container',
    mainStyle: {
            backgroundColor:'#ffffff',
            color:'#2b1b1b',
            fontSize: '26px',
            fontFamily:'OpenSans',
            minHeight:'50px',
            marginBottom:'45px'
    },
    logoStyle: {
        maxWidth:'110px'
    },
    logoClass: 'w3-padding',
    logoSrc: 'https://thumbs.dreamstime.com/b/%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D1%83%D1%8E%D1%89-%D0%B2-%D0%B8%D0%B4%D0%B5%D1%8E-crowdfunding-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-112514795.jpg'
};

const Header = () => {
    return (
        <header className={header.mainClass} style={header.mainStyle}>
            <img style={header.logoStyle}
                 className={header.logoClass}
                 src={header.logoSrc}/>
            CrowdBook
            <UserInfo/>
        </header>
    )
}

export default Header;