import React from 'react';

const styles = {
    avatarUrl: {
        width: '120px',
        height: '120px'
    },
    authorBlock: {
        maxWidth: '220px',
        maxHeight: '300px',
        overflowX: 'hidden'
    }
}
const classes = {
    authorCol: 'w3-padding w3-col',
    authorAbout: 'w3-padding w3-large',
    imgBlock: 'w3-right w3-padding',
    name: 'w3-padding w3-xlarge',
    eMail:'w3-text-blue w3-padding w3-large',
    about: 'w3-padding'
}

class AuthorCard extends React.Component {
    render(){
        if (!this.props.author)
            return <div>Empty author</div>;

        const{
                author: {
                    authorName,
                    eMail,
                    avatarUrl,
                    about
                }
        } = this.props;

        return (
            <div style={styles.authorBlock} className={classes.authorCol}>
                <div>
                    <div className={classes.imgBlock}>
                        <img alt={authorName} style={styles.avatarUrl} src={avatarUrl} />
                    </div>
                    <div className={classes.name}>
                        <span>{authorName}</span>
                    </div>
                    <div className={classes.eMail}>
                        <a href={`mailto:${eMail}`}> E-mail </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorCard;