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
            <div className='w3-center w3-padding'>
                <h2> Subscribe plz</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='w3-padding'>
                        <label htmlFor='user_name'>
                            Your name:
                        </label>
                        <input
                            type="text"
                            placeholder={this.state.name}
                            onChange={this.handleChange}
                            name='name'/>
                    </div>
                    <div className='w3-padding'>
                    <label htmlFor='user_name'>
                        Your e-mail:
                    </label>
                    <input
                        type="text"
                        placeholder={this.state.eMail}
                        onChange={this.handleChange}
                        name='eMail'/>
                    </div>
                    <input className='w3-button w3-blue' type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}

export default FormName;