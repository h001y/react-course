import React from 'react';

const classes = {
    root: 'w3-container',
    dropdownCard: 'w3-dropdown-content w3-card-4',
    authorCard: 'w3-col'
}

const styles = {
    dropdownCard: {
        width: '250px',
    },
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
            <div class={classes.dropdownCard} style={styles.dropdownCard}>
                <div class={classes.authorCard}>
                    <div>
                        <img src={avatarUrl} />
                    </div>
                    <div>
                        <span>{name}</span>
                    </div>
                    <div>
                        <span>{eMail}</span>
                    </div>
                    <div>
                        <span>{about}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorCard;