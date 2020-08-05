import React from 'react';

const styles = {
    avatarUrl: {
        width: '200px',
    },
}

const classes = {
    authorCol: 'w3-padding w3-col',
    authorAbout: 'w3-padding w3-xxlarge',
    imgBlock: 'w3-right w3-padding',
    name: 'w3-padding w3-xlarge',
    eMail:'w3-padding w3-text-blue w3-padding w3-xlarge',
    about: 'w3-padding'
}


class AuthorCard extends React.Component {
    render(){
        const{
            author: {
                name,
                eMail,
                avatarUrl,
                about
            }
        } = this.props;


        return (
            <div class={classes.authorCol}>
                <div>
                    <div class={classes.authorAbout}>
                        About author
                    </div>
                    <div class={classes.imgBlock}>
                        <img style={styles.avatarUrl} src={avatarUrl} />
                    </div>
                    <div class={classes.name}>
                        <span>{name}</span>
                    </div>
                    <div class={classes.eMail}>
                        <a href={`mailto:${eMail}`}> E-mail </a>
                    </div>
                    <div class={classes.about}>
                        <span>{about}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorCard;