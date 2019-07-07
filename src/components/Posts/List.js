import React, { Component } from 'react';
import PostItem from './Item';

export default class PostsList extends Component {
    onItemClickHandler = (postId) => {
        this.props.onItemClick(postId);
    };

    render(){
        return (
            <ol>
                {this.props.posts.map((post) =>
                    <li key={post.id}>
                        <PostItem
                            title={post.title}
                            author={post.author}
                            click={this.onItemClickHandler.bind(this, post.id)}/>
                    </li>
                )}
            </ol>
        );
    }
}