import React from 'react';
import Posts from './Posts';

const PAGES = {
    '/list': Posts,
};

export default (props) => {
    if(!PAGES.hasOwnProperty(props.name)){
        return <h1>404</h1>
    }

    const Handler = PAGES[props.name];

    return <Handler {...props} />
};