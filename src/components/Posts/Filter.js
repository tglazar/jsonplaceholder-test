import React from 'react';

import './Filter.scss';

const PostsFilter = ( props ) => {
    return (
        <div className="posts-filter">
            <span className="posts-filter__label">Filter:</span>
            <input
                type="text"
                onChange={props.changed}
                value={props.filter}
                placeholder="Type author's name"
                className="posts-filter__input"/>
        </div>
    )
};

export default PostsFilter;