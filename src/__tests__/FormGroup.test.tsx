import * as React from "react";
import { render } from "@testing-library/react";

import { FormGroup } from "../FormGroup";

import { Form } from "../Form";

describe("FormGroup", () => {
    it("splits children into two sections when layout is aligned", () => {
        const { container } = render(
            <FormGroup layout="aligned">
                <span />
                <span />
                <span />
            </FormGroup>
        );
        const sections = container.querySelectorAll(".form__group__section");
        expect(sections).toHaveLength(2);
        expect(sections[0].querySelectorAll("span")).toHaveLength(1);
        expect(sections[1].querySelectorAll("span")).toHaveLength(2);
    });
    it("renders null instead of two empty sections when children is empty", () => {
        const { container } = render(<FormGroup layout="aligned"></FormGroup>);
        const sections = container.querySelectorAll(".form__group__section");
        expect(sections).toHaveLength(0);
    });
    it("doesn't render sections when layout is not aligned", () => {
        const { container } = render(
            <FormGroup layout="stacked">
                <span />
                <span />
                <span />
            </FormGroup>
        );
        const sections = container.querySelectorAll(".form__group__section");
        expect(sections).toHaveLength(0);
    });
    it("overrides layout from FormContext with layout prop if specified", () => {
        const { container } = render(
            //@ts-ignore
            <Form layout="ABC">
                {/*
                    // @ts-ignore */}
                <FormGroup layout="XYZ" />
            </Form>
        );

        expect(container.querySelector(".form__group--XYZ")).not.toBeNull();
    });
    it("inherits layout from FormContext when layout prop is not specified", () => {
        const { container } = render(
            //@ts-ignore
            <Form layout="ABC">
                <FormGroup />
            </Form>
        );

        expect(container.querySelector(".form__group--ABC")).not.toBeNull();
    });
});
