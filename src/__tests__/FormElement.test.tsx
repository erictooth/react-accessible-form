import * as React from "react";
import { render } from "@testing-library/react";

import { FormElement } from "../FormElement";

describe("FormElement", () => {
    it("passes through labelProps and controlProps", () => {
        const { container } = render(
            <FormElement
                label="Test"
                labelProps={{ htmlFor: "test-1" }}
                controlProps={{ id: "test-1" }}></FormElement>
        );
        expect(container.querySelector("#test-1")).not.toBe(null);
        expect(container.querySelector("label")!.htmlFor).toBe("test-1");
    });
});
