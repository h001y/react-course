import React from 'react';

import AuthorCard from './AuthorCard';

class AuthorsList extends React.Component {
    constructor(props){
        super(props);

        this.state = { showAllAuthors: false };
    }

    toggleShowAuthors() {
        this.setState({showAllAuthors: !this.state.showAllAuthors });
    }

    render() {
        const { showAllAuthors } = this.state;
        return (
            <div>
                <button onClick= {() => this.toggleShowAuthors()}>Show All Authors</button>
            </div>
            <div>
                {this.props.authors.map((author, idx) => (
                <div key={idx} style={styles.item}>
                    <AuthorCard author={author} />
                </div>
                    ))}
            </div>
        );
    }
}

export default AuthorsList;

const styles = {
    item: {
        marginBottom:'25px',
    }
};