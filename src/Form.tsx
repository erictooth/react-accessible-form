import * as React from "react";
import classNames from "classnames";

import { FormControl } from "./FormControl";
import { FormGroup } from "./FormGroup";
import { FormLabel } from "./FormLabel";

type Props = {
    as?: React.ElementType;
    layout?: Layout;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLFormElement>;

export type Layout = "stacked" | "aligned";

const FormComponent = React.forwardRef<HTMLFormElement, Props>((props: Props, ref) => {
    const {
        as = "form",
        className,
        children,
        disabled = false,
        layout = "stacked",
        ...rest
    } = props;
    const formContextValue = React.useMemo(
        () => ({
            disabled,
            layout,
        }),
        [disabled, layout]
    );
    return React.createElement(
        as,
        { className: classNames(className, `form--${layout}`), ref, ...rest },
        <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>
    );
});

FormComponent.displayName = "Form";

const Form = Object.assign(
    {
        Group: FormGroup,
        Label: FormLabel,
        Control: FormControl,
    },
    FormComponent
);

export type FormContextValue = {
    disabled: boolean;
    layout: Layout;
};

export const FormContext = React.createContext<FormContextValue>({
    disabled: false,
    layout: "stacked",
});

export { Form };
