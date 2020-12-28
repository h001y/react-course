import React from 'react';
import AuthorList from "./AuthorList";
import WithLoader from "./HOC-comp/WithLoader";
import UseBooks from "./hooks/UseBooks";

const styles = {
    hotPngImg: {
        width: '90px',
        height: '90px'
    }
}

const classes = {
    mainContainer: 'w3-container',
    bookInfo: "w3-row w3-col m5",
    bookImg: "w3-row w3-col m4",
    bookCard: 'w3-row',
    headTitle: 'w3-row',
    name: 'w3-col w3-padding w3-xxlarge left',
    shortDescription: 'w3-row w3-padding m6 left',
    pagesNum: 'w3-row w3-padding m2',
    language: 'w3-row w3-padding m2',
    progress: 'w3-row w3-padding m2',
    urlPic: 'w3-row w3-padding m6',
    authorInf: 'w3-row w3-col m6',
    simpleRow: 'w3-row w3-padding m2'
}


 const BookCard = () => {

     const books = UseBooks()

     if (!books)
         return <div>Empty book</div>

     const book = books[0]
     const book_id = book.id

     const{
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
     } = book;


     if (!books)
         return <div>Empty book</div>

        return (
            <div className={classes.mainContainer}>
                <div className={classes.bookCard}>
                    <div className='w3-row'>
                        <div className={classes.name}>{name}</div>
                    </div>
                    <div className={classes.bookInfo}>
                        <div className={classes.shortDescription}>{shortDescription}</div>
                        <div className={classes.pagesNum}>Pages: {pagesNum}</div>
                        <div className={classes.language}>Book Language: {language}</div>
                        <div className={classes.progress}>Progress: {progress}</div>
                        <div className={classes.simpleRow}>Minimum Price: {minPrice}</div>
                        <div className={classes.simpleRow}>Expecting Price: {expectPrice}</div>
                        <div className={classes.simpleRow}>Taken from Sell: {takenBill}</div>
                        <div className={classes.simpleRow}>Waiting from Sell: {WaitingBill}</div>
                        <div className={classes.simpleRow}>Subscribers: {subscribers}</div>
                            {
                                subscribers > 300 &&
                            <img style={styles.hotPngImg} src={hotPngImg} />
                        }
                    </div>
                    <div className={classes.bookImg}>
                        <div className={classes.urlPic}><img className='w3-col m12 l6' alt={shortDescription} src={urlPic} /></div>
                    </div>
                    <div className={classes.authorInf}>
                        <AuthorList authors={authors} />
                    </div>
                </div>
            </div>
        );
}

 export default WithLoader(BookCard);
