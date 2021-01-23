import React from 'react';
import AuthorList from "../../../components/pages/authorCard/AuthorList";
import BookName from "./BookName";
import SimpleRow from "./SimpleRow";

const styles = {
    hotPngImg: {
        width: '90px',
        height: '90px'
    }
}

class BookCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){

        if (!this.props.book)
            return <div>Empty book</div>

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
        } = this.props.book;


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
}

export default BookCard;