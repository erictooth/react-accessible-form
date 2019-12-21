import * as React from "react";
import classNames from "classnames";

import { BoxProps } from "./Box.type";
import { useGroupContext } from "./useGroupContext";

export type FormControlProps = React.HTMLAttributes<any> &
    Record<string, unknown> &
    BoxProps<
        { className: string; disabled: boolean; id: string; required: boolean } & Record<
            string,
            unknown
        >
    >;

export const FormControl: React.RefForwardingComponent<
    HTMLElement,
    FormControlProps
> = React.forwardRef<HTMLElement, FormControlProps>((props: FormControlProps, ref) => {
    const { as = "input", className, ...rest } = props;

    const { disabled, id, required } = useGroupContext("FormControl");

    return React.createElement(as, {
        className: classNames("form__control", className),
        disabled,
        id,
        required,
        ...rest,
        ref,
    });
});

FormControl.displayName = "Form.Control";
