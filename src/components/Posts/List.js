import React, { Component } from 'react';
import PostItem from './Item';

export default class PostsList extends Component {
    render(){
        return (
            <ol>
                {this.props.posts.map((post) =>
                    <li key={post.id}>
                        <PostItem title={post.title} author={post.author}/>
                    </li>
                )}
            </ol>
        );
    }
}