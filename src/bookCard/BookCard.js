import React from 'react';
import AuthorList from "../AuthorList";
import BookName from "./BookName";
import SimpleRow from "./SimpleRow";
import WithLoader from "../HOC-comp/WithLoader";
import useBooks from "../hooks/UseBooks";


const styles = {
    hotPngImg: {
        width: '90px',
        height: '90px'
    }
}

const BookCard = () => {

    const books = useBooks()

    if (!books)
        return <div>Empty book</div>

    const book = books[0]
    const bookId = book.id
    const otherBooks = books.filter( book => book.id !== bookId)

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
            <div className="w3-container">
                <div className="w3-row">
                    <BookName name={name} />
                    <div className="w3-row w3-col m5">
                        <div className="w3-row w3-padding m6 left">{shortDescription}</div>
                        <SimpleRow label="pagesNum" rowDescription="Pages:" rowDynamic={pagesNum}/>
                        <SimpleRow label="language" rowDescription="Book Language:" rowDynamic={language}/>
                        <SimpleRow label="progress" rowDescription="Progress:" rowDynamic={progress}/>
                        <SimpleRow label="min_price" rowDescription="Minimum Price:" rowDynamic={minPrice}/>
                        <SimpleRow label="exp_price" rowDescription="Expecting Price:" rowDynamic={expectPrice}/>
                        <SimpleRow label="sell" rowDescription="Taken from Sell:" rowDynamic={takenBill}/>
                        <SimpleRow label="waiting" rowDescription="Waiting from Sell:" rowDynamic={WaitingBill}/>
                        <SimpleRow label="subscribers" rowDescription="Subscribers:" rowDynamic={subscribers}/>
                            {
                                subscribers > 300 &&
                            <img style={styles.hotPngImg} src={hotPngImg} />
                        }
                    </div>
                    <div className="w3-row w3-col m4">
                        <div className="w3-row w3-padding m6"><img alt={shortDescription} src={urlPic} /></div>
                    </div>
                    <div className="w3-row w3-col m6">
                        <AuthorList authors={authors} />
                    </div>
                </div>
            </div>
        );
    }

export default WithLoader(BookCard);