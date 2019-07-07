import React from 'react';

const PostsFilter = ( props ) => {
    return (
        <div className="posts-filter">
            Filter:
            <input type="text" onChange={props.changed} value={props.filter} />
        </div>
    )
};

export default PostsFilter;