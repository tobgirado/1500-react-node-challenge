import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import List from "../component/List.js"

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with a list", () => {
    let listOfResults = ['pepe', 'pipi', 'popo', 'pupu'];
    act(() => {
        render(<List dataFromParent={listOfResults} />, container);
    });
    expect(container.textContent).toBe("Results:pupupopopipipepe");
});