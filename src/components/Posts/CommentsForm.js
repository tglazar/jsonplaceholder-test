import React, { Component } from 'react';

export default class CommentsForm extends Component {
    state = {
        name: '',
        email: '',
        body: ''
    };

    updateStateFromValue(event, name) {
        this.setState({
            [name]: event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault();

        this.props.onSubmit({
            name: this.state.name,
            email: this.state.email,
            body: this.state.body
        });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>
                    <p>Name: <input type="text" onChange={(event) => this.updateStateFromValue(event, 'name')} value={this.state.name} required/></p>
                </label>
                <label>
                    <p>Email: <input type="email" onChange={(event) => this.updateStateFromValue(event, 'email')} value={this.state.email} required/></p>
                </label>
                <label>
                    <p>Text: <textarea onChange={(event) => this.updateStateFromValue(event, 'body')} value={this.state.body} required>

                    </textarea></p>
                </label>
                <p>
                    <button type="submit">Add</button>
                </p>
            </form>
        );
    }
}