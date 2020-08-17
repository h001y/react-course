import React from 'react';

import AuthorCard from './AuthorCard';

class AuthorList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAllAuthors: false
        };
    }

    toggleShowAuthors() {
        this.setState({
            showAllAuthors: !this.state.showAllAuthors
        });
    }

    render() {
        if (!this.props.authors) {
            return <div>Empty authors</div>;
        }

        const { authors } = this.props;
        const { showAllAuthors } = this.state;

        const showedAuthors = showAllAuthors ? authors : authors.slice(0, 3);

        return (
                <div>
                    {
                        showedAuthors.map((author) => (
                            <div key={author.authorId}>
                                <AuthorCard author={ author } />
                            </div>
                        ))
                    }
                    <button onClick={() => this.toggleShowAuthors()}>Show all authors</button>
                </div>
        );
    }
}


export default AuthorList;