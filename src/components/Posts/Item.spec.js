import React from "react";
import { create } from "react-test-renderer";
import PostItem from './Item';

describe("Post Item component", () => {
    it("Matches the snapshot", () => {
        const component = create(<PostItem />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders title and author", () => {
        const title = 'Test title';
        const author = 'Test author';
        const component = create(<PostItem title={title} author={author}/>);
        const instance = component.root;
        const titleElement = instance.findByProps({className: "posts-item__title"});
        const authorElement = instance.findByProps({className: "posts-item__author-name"});

        expect(titleElement.props.children).toEqual(title);
        expect(authorElement.props.children).toEqual(author);
    });

    it("calls onClick prop when title is clicked", () => {
        const mockCallback = jest.fn();
        const component = create(<PostItem click={mockCallback}/>);
        const instance = component.root;
        const title = instance.findByProps({className: "posts-item__title"});
        title.props.onClick();

        expect(mockCallback).toHaveBeenCalled();
    });
});