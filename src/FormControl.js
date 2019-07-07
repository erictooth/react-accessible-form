//@flow
import * as React from "react";
import classNames from "classnames";

import { FormGroupContext } from "./FormGroupContext.js";

type Props = {
    as?: React.ElementType,
    className?: string,
};

export const FormControl = React.forwardRef<Props, HTMLElement>((props: Props, ref) => {
    const { as = "input", className, ...rest } = props;

    const groupContext = React.useContext(FormGroupContext);

    if (!groupContext) {
        throw new Error("FormControl must be used inside of a FormGroup");
    }

    const { disabled, id, required } = groupContext;

    const inputProps = {
        className: classNames("form__control", className),
        disabled,
        id,
        required,
    };
    //$FlowFixMe
    return React.createElement(as, { ...inputProps, ...rest, ref });
});

FormControl.displayName = "Form.Control";
