import React from 'react';
import Posts from './Posts';
import PostDetails from './Details';

const PAGES = {
    '/list': Posts,
    '/details': PostDetails,
};

export default (props) => {
    if(!PAGES.hasOwnProperty(props.name)){
        return <h1>404</h1>
    }

    const Handler = PAGES[props.name];

    return <Handler {...props} />
};