import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostsDetails from '../components/Posts/Details';
import CommentsForm from '../components/Posts/CommentsForm';
import {fetchPostDetails, addComment, deleteComment} from '../store/actions/posts';

class PostDetailsPage extends Component {
    componentDidMount() {
        this.props.fetchPostDetails(this.props.id);
    }

    onCommentAdd(comment) {
        this.props.addComment({
            ...comment,
            postId: this.props.post.id
        });
    }

    render() {
        const {post, loading, changePageTo} = this.props;

        if(loading === false){
            return (
                <main>
                    <PostsDetails
                        goBack={() => changePageTo('/list')}
                        deleteComment={(commentId) => this.props.deleteComment(commentId)}
                        post={post}/>
                    <CommentsForm onSubmit={this.onCommentAdd.bind(this)}/>
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
        addComment: (comment) => dispatch(addComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id)),
    };
};

export default connect(stateToProps, dispatchToProps)(PostDetailsPage);
