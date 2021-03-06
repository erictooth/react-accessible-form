import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import Form from "../src/index";

//@ts-ignore
import Select from "react-select";
//@ts-ignore
import { Switch } from "pretty-checkbox-react";

const stories = storiesOf("Form", module);
stories.addDecorator(withKnobs);

const layoutKnob = () => select("layout", ["aligned", "stacked"], "aligned");

stories.add("basic", () => {
    return (
        <Form layout={layoutKnob()} onSubmit={(e) => e.preventDefault()}>
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
            <Form.Group layout="aligned">
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
});

stories.add("custom controls", () => {
    return (
        <Form layout={layoutKnob()} onSubmit={(e) => e.preventDefault()}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>Visibility</Form.Label>
                <Form.Control
                    as={({ className, ...props }) => <Select {...props} />}
                    options={[
                        { value: "private", label: "Private" },
                        { value: "public", label: "Public" },
                    ]}
                />
            </Form.Group>
            <Form.Group layout="aligned">
                <Form.Control
                    as={({ className, ...props }) => <Switch {...props} />}
                    shape="fill"
                />
                <Form.Label>Archived</Form.Label>
            </Form.Group>
        </Form>
    );
});

stories.add("Form.Element", () => {
    return (
        <Form layout={layoutKnob()} onSubmit={(e) => e.preventDefault()}>
            <Form.Element label="Name" />

            <Form.Element label="Age" type="number" min="0" />

            <Form.Element label="Bio" as="textarea" />

            <Form.Element label="Email" type="email">
                <small>You may occasionally receive marketing emails from us.</small>
            </Form.Element>

            <Form.Element
                label="Visibility"
                as={({ className, ...props }) => <Select {...props} />}
                options={[
                    { value: "private", label: "Private" },
                    { value: "public", label: "Public" },
                ]}
            />

            <Form.Group layout="aligned">
                <Form.Control
                    as={({ className, ...props }) => <Switch {...props} />}
                    shape="fill"
                />
                <Form.Label>Archived</Form.Label>
            </Form.Group>
        </Form>
    );
});
