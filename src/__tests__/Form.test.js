import * as React from "react";
import "jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Form from "../index.js";

const getTestComponent = () => (
    <Form layout="aligned" onSubmit={(e) => e.preventDefault()}>
        <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control />
        </Form.Group>
        <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control />
        </Form.Group>
        <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" min="0" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
            <small>You may occasionally receive marketing emails from us.</small>
        </Form.Group>
        <Form.Group>
            <Form.Control type="checkbox" />
            <Form.Label>Receive Newsletter</Form.Label>
        </Form.Group>
        <Form.Group>
            <Form.Label>Newsletter Frequency</Form.Label>
            <Form.Control as="select">
                <option>Daily</option>
                <option>Monthly</option>
                <option>Quarterly</option>
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <span />
            <Form.Control as="button">Submit</Form.Control>
        </Form.Group>
    </Form>
);

describe("Form", () => {
    it("renders and matches snapshot", () => {
        expect(() => {
            const { container } = render(getTestComponent());
            expect(container).toMatchSnapshot();
        }).not.toThrow();
    });
    it("applies layout classname", () => {
        const LAYOUT = "ABC";
        const { container } = render(<Form layout={LAYOUT} />);

        expect(container.querySelector(`.form--${LAYOUT}`)).not.toBe(null);
    });
});
