import React from "react";
import { create } from "react-test-renderer";
import Button from './Button';

describe("Button component", () => {
    it("Matches the snapshot", () => {
        const component = create(<Button />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders children", () => {
        const component = create(<Button>Test</Button>);
        const instance = component.root;
        const button = instance.findByProps({className: "button"});

        expect(button.props.children).toEqual('Test');
    });

    it("calls onClick prop when is clicked", () => {
        const mockCallback = jest.fn();
        const component = create(<Button onClick={mockCallback}/>);
        const instance = component.root;
        const button = instance.findByProps({className: "button"});
        button.props.onClick();

        expect(mockCallback).toHaveBeenCalled();
    });
});