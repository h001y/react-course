 import React from 'react';
import AuthorList from "./AuthorList";

const styles = {
    hotPngImg: {
        width: '90px',
        height: '90px'
    }
}

const classes = {
    mainContainer: 'w3-container',
    bookInfo: "w3-row w3-col m2",
    bookImg: "w3-row w3-col m4",
    bookCard: 'w3-row',
    headTitle: 'w3-row',
    name: 'w3-col w3-padding w3-xxlarge w3-margin-top w3-margin-left left',
    shortDescription: 'w3-row w3-padding m6 w3-margin-top w3-margin-left left',
    pagesNum: 'w3-row w3-padding m2',
    language: 'w3-row w3-padding m2',
    progress: 'w3-row w3-padding m2',
    urlPic: 'w3-row w3-padding m6',
    authorInf: 'w3-row w3-col m6'
}

class BookCard extends React.Component {
    render(){
        if (!this.props.book)
            return <div>Empty book</div>;

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
                WaitingBill,
                subscribers,
                hotPngImg
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
                        <div>Subscribers: {subscribers}</div>
                            {
                                subscribers > 300 &&
                            <img style={styles.hotPngImg} src={hotPngImg} />
                        }
                    </div>
                    <div className={classes.bookImg}>
                        <div className={classes.urlPic}><img alt={shortDescription} src={urlPic} /></div>
                    </div>
                    <div className={classes.authorInf}>

                        <AuthorList authors={authors} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;
