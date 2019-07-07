import React from "react";

export default ({post, goBack}) => {
    return (
        <div>
            <p>
                <span onClick={goBack}>&laquo; Back</span>
            </p>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <p>{post.body}</p>
            <ol>
                {post.comments.map((comment) =>
                    <li key={comment.id}>
                        {comment.body}
                    </li>
                )}
            </ol>
        </div>
    );
};