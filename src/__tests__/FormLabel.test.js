import * as React from "react";
import { render } from "@testing-library/react";

import { FormLabel } from "../FormLabel.js";

const getTestComponent = (props) => <FormLabel {...props} />;

describe("FormLabel", () => {
    it("throws when used outside of a FormGroupContext", () => {
        expect(() => render(<FormLabel />)).toThrow();
    });
});
