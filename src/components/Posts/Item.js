import React from "react";

const PostItem = ({title, author, click}) => {
    return (
        <div>
            <h2 onClick={click}>{title}</h2>
            <p>Author: {author}</p>
        </div>
    );
};

export default PostItem;