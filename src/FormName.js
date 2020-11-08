import React from 'react';

class FormName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "input your name",
            eMail: "input your e-mail"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Input name:' + this.state.name);
        console.log('Input email:' + this.state.eMail);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='user_name'>
                    Your name:
                </label>
                <input
                    type="text"
                    placeholder={this.state.name}
                    onChange={this.handleChange}
                    name='name' />
                    <br />
                <label htmlFor='user_name'>
                    Your e-mail:
                </label>
                <input
                    type="text"
                    placeholder={this.state.eMail}
                    onChange={this.handleChange}
                    name='eMail' />
                <br />
                            <input type="submit" value="Send" />
            </form>
        );
    }
}

export default FormName;