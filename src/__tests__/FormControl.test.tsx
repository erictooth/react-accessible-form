import * as React from "react";
import { render } from "@testing-library/react";

import { FormControl } from "../FormControl";

describe("FormControl", () => {
    it("throws when used outside of a FormGroupContext", () => {
        expect(() => render(<FormControl />)).toThrow();
    });
});