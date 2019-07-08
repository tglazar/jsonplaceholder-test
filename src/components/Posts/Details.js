import React from "react";
import './Details.scss';

export default ({post, goBack, deleteComment}) => {
    return (
        <div className="posts-details">
            <p>
                <span onClick={goBack} className="posts-details__back">&laquo; Back</span>
            </p>
            <h1 className="posts-details__title">{post.title}</h1>
            <p className="posts-details__author">by: <span className="posts-details__author-name">{post.author}</span></p>
            <p className="posts-details__body">{post.body}</p>
            <h2>Comments</h2>
            <ol>
                {post.comments.map((comment) =>
                    <li key={comment.id}>
                        {comment.body}
                        <p className="posts-details__delete-comment">
                            <span onClick={() => deleteComment(comment.id)}>Delete comment</span>
                        </p>
                    </li>
                )}
            </ol>
        </div>
    );
};