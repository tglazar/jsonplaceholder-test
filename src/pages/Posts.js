import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostsList from '../components/Posts/List';
import { fetchPosts } from '../store/actions/posts';

class PostsPage extends Component {
    componentDidMount() {
        if(!this.props.posts.length){
            this.fetchPosts();
        }
    }

    onItemClickHandler = (postId) => {
        this.props.changePageTo('/details', postId);
    };

    fetchPosts = () => {
        this.props.fetchPosts();
    };

    render() {
        let posts = <p>No posts</p>;

        if(this.props.posts.length){
            posts = <PostsList
                onItemClick={this.onItemClickHandler}
                posts={this.props.posts}/>
        }

        return (
            <main>
                <button onClick={this.fetchPosts}>Refresh</button>
                {posts}
            </main>
        )
    };
}

const stateToProps = state => {
    return {
        authorName: state.posts.authorName,
        posts: state.posts.data
    };
};

const dispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch( fetchPosts() ),
    };
};

export default connect(stateToProps, dispatchToProps)(PostsPage);
