import * as React from "react";

import { FormControl, FormControlProps } from "./FormControl";
import { FormGroup, FormGroupProps } from "./FormGroup";
import { FormLabel, FormLabelProps } from "./FormLabel";

type Props = Omit<FormGroupProps, "as"> &
    FormControlProps & {
        label: FormLabelProps["children"];
    };

const FormElement: React.RefForwardingComponent<HTMLDivElement, Props> = React.forwardRef<
    HTMLDivElement,
    Props
>((props: Props, ref) => {
    // Group props
    const { className, children, layout, disabled, required, ...afterGroup } = props;

    // Label props
    const { label, ...afterLabel } = afterGroup;

    // Control props
    const { as, ...rest } = afterLabel;

    return (
        <FormGroup
            ref={ref}
            className={className}
            disabled={disabled}
            layout={layout}
            required={required}>
            <FormLabel>{label}</FormLabel>
            <FormControl as={as} {...rest}></FormControl>
            {children}
        </FormGroup>
    );
});

FormElement.displayName = "Form.Element";

export { FormElement };
