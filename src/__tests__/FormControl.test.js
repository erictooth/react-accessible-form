import * as React from "react";
import { render } from "@testing-library/react";

import { FormControl } from "../FormControl.js";

const getTestComponent = (props) => <FormControl {...props} />;

describe("FormControl", () => {
    it("throws when used outside of a FormGroupContext", () => {
        expect(() => render(<FormControl />)).toThrow();
    });
});
