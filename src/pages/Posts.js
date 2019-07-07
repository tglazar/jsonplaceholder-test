import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostsList from '../components/Posts/List';
import PostsFilter from '../components/Posts/Filter';
import {fetchPosts, updateAuthorFilter} from '../store/actions/posts';

class PostsPage extends Component {
    componentDidMount() {
        if (!this.props.posts.length) {
            this.fetchPosts();
        }
    }

    onItemClickHandler = (postId) => {
        this.props.changePageTo('/details', postId);
    };

    fetchPosts = () => {
        this.props.fetchPosts();
    };

    filterChangedHandler = (event) => {
        const author = event.target.value;

        this.props.updateAuthorFilter(author);
    };

    render() {
        let posts = <p>No posts</p>;

        if (this.props.posts.length) {
            posts = <PostsList
                onItemClick={this.onItemClickHandler}
                posts={this.props.posts}/>
        }

        return (
            <main>
                <button onClick={this.fetchPosts}>Refresh</button>
                <PostsFilter
                    filter={this.props.authorName}
                    changed={this.filterChangedHandler}/>
                {posts}
            </main>
        )
    };
}

function filterPosts(state, filterValue) {
    if (filterValue.length < 3) {
        return state.posts.data
    }

    return state.posts.data.filter((post) => {
        return post.author.toLowerCase().includes(filterValue.toLowerCase());
    });
}

const stateToProps = state => {
    return {
        authorName: state.posts.authorName,
        posts: filterPosts(state, state.posts.authorName)
    };
};

const dispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        updateAuthorFilter: (author) => dispatch(updateAuthorFilter(author)),
    };
};

export default connect(stateToProps, dispatchToProps)(PostsPage);
