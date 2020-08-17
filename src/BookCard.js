import React from 'react';
import PropTypes from 'prop-types';

import AuthorList from "./AuthorList";

const classes = {
    mainContainer: 'w3-container',
    bookInfo: "w3-row w3-col m4",
    bookImg: "w3-row w3-col m4",
    bookCard: 'w3-row',
    headTitle: 'w3-row',
    name: 'w3-col w3-padding w3-xxlarge w3-margin-top w3-margin-left left',
    shortDescription: 'w3-row w3-padding m6 w3-margin-top w3-margin-left left',
    pagesNum: 'w3-row w3-padding m2',
    language: 'w3-row w3-padding m2',
    progress: 'w3-row w3-padding m2',
    urlPic: 'w3-row w3-padding m6',
    authorInf: 'w3-row w3-col m4'
}

class BookCard extends React.Component {
    render(){
        const{
            book: {
                name,
                shortDescription,
                pagesNum,
                language,
                progress,
                urlPic,
                authors,
                minPrice,
                expectPrice,
                takenBill,
                WaitingBill
            }
        } = this.props;


        return (
            <div className={classes.mainContainer}>
                <div className={classes.bookCard}>
                    <div className={classes.bookInfo}>
                        <div className={classes.name}>{name}</div>
                        <div className={classes.shortDescription}>{shortDescription}</div>
                        <div className={classes.pagesNum}>Pages: {pagesNum}</div>
                        <div className={classes.language}>Book Language: {language}</div>
                        <div className={classes.progress}>Progress: {progress}</div>
                        <div>Minimum Price: {minPrice}</div>
                        <div>Expecting Price: {expectPrice}</div>
                        <div>Taken from Sell: {takenBill}</div>
                        <div>Waiting from Sell: {WaitingBill}</div>
                    </div>
                    <div className={classes.bookImg}>
                        <div className={classes.urlPic}><img alt={shortDescription} src={urlPic} /></div>
                    </div>
                    <div class={classes.authorInf}>
                        <AuthorList authors={authors} />
                    </div>
                </div>
            </div>
        );
    }
}

BookCard.propTypes = {
    book: PropTypes.exact({
        name: PropTypes.string,
        shortDescription: PropTypes.string,
        pagesNum: PropTypes.string,
        language: PropTypes.string,
        progress: PropTypes.string,
        urlPic: PropTypes.string,
        authors: PropTypes.array,
        minPrice: PropTypes.string,
        expectPrice: PropTypes.string,
        takenBill: PropTypes.string,
        WaitingBill: PropTypes.string
    })
};

export default BookCard;