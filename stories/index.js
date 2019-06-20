import React from "react";

import { storiesOf } from "@storybook/react";

import Form from "../src/index.js";

storiesOf("Form", module).add("aligned", () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form>
    );
});
