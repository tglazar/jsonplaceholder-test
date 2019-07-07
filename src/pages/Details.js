import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostsDetails from '../components/Posts/Details';
import {fetchPostDetails} from '../store/actions/posts';

class PostDetailsPage extends Component {
    componentDidMount() {
        this.props.fetchPostDetails(this.props.id);
    }

    render() {
        const {post, loading, changePageTo} = this.props;

        if(loading === false){
            return (
                <main>
                    <PostsDetails
                        goBack={() => changePageTo('/list')}
                        post={post}/>
                </main>
            );
        }

        return (
            <main>
                <p>Loading...</p>
            </main>
        );
    };
}

const stateToProps = state => {
    return {
        loading: state.posts.loadingPost,
        post: state.posts.currentPost
    };
};

const dispatchToProps = dispatch => {
    return {
        fetchPostDetails: (id) => dispatch(fetchPostDetails(id)),
    };
};

export default connect(stateToProps, dispatchToProps)(PostDetailsPage);
