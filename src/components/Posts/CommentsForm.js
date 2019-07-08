import React, { Component } from 'react';
import './CommentsForm.scss';

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
            <form onSubmit={this.onSubmit.bind(this)} className="comments-form">
                <label>
                    <p className="input-group">
                        <span className="input-group__label">Name:</span>
                        <input className="input-group__input"
                               type="text"
                               onChange={(event) => this.updateStateFromValue(event, 'name')}
                               value={this.state.name} required/>
                    </p>
                </label>
                <label>
                    <p className="input-group">
                        <span className="input-group__label">E-mail:</span>
                        <input className="input-group__input"
                               type="email"
                               onChange={(event) => this.updateStateFromValue(event, 'email')}
                               value={this.state.email} required/>
                    </p>
                </label>
                <label>
                    <p className="input-group input-group--full">
                        <span className="input-group__label input-group__label--full">Text:</span>
                        <textarea className="input-group__textarea"
                                  onChange={(event) => this.updateStateFromValue(event, 'body')}
                                  value={this.state.body} required>
                        </textarea>
                    </p>
                </label>
                <p>
                    <button className="button" type="submit">Add</button>
                </p>
            </form>
        );
    }
}