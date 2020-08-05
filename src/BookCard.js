import React from 'react';

import AuthorCard from './AuthorCard';

const classes = {
    mainContainer: 'w3-container',
    bookInfo: "w3-row w3-col m4",
    bookImg: "w3-row w3-col m6",
    bookCard: 'w3-row',
    headTitle: 'w3-row',
    name: 'w3-col w3-padding w3-xxlarge w3-margin-top w3-margin-left left',
    shortDescription: 'w3-row w3-padding m6 w3-margin-top w3-margin-left left',
    pagesNum: 'w3-row w3-padding m2',
    language: 'w3-row w3-padding m2',
    progress: 'w3-row w3-padding m2',
    urlPic: 'w3-row w3-padding m6',
    authorInfo: 'w3-row w3-dropdown-hover'
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
                author,
                minPrice,
                expectPrice,
                takenBill,
                WaitingBill
            }
        } = this.props;


        return (
            <div class={classes.mainContainer}>
                <div class={classes.bookCard}>
                    <div class={classes.bookInfo}>
                        <div className={classes.name}>{name}</div>
                        <div className={classes.shortDescription}>{shortDescription}</div>
                        <div className={classes.pagesNum}>Pages: {pagesNum}</div>
                        <div className={classes.language}>Book Language: {language}</div>
                        <div className={classes.progress}>Progress: {progress}</div>
                        <div>Minimum Price: {minPrice}</div>
                        <div>Expecting Price: {expectPrice}</div>
                        <div>Taken from Sell: {takenBill}</div>
                        <div>Waiting from Sell: {WaitingBill}</div>
                        <div className={classes.authorInfo}> AuthorInfo  <AuthorCard author={author}/></div>

                    </div>
                    <div class={classes.bookImg}>
                        <div class={classes.urlPic}><img alt={shortDescription} src={urlPic} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;