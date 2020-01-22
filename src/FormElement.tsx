import * as React from "react";

import { FormControl, FormControlProps } from "./FormControl";
import { FormGroup, FormGroupProps } from "./FormGroup";
import { FormLabel, FormLabelProps } from "./FormLabel";

export type FormElementProps = Omit<FormGroupProps, "as"> &
    FormControlProps & {
        label: FormLabelProps["children"];
    };

export const createElementComponent: (FormElems: {
    Control: typeof FormControl;
    Group: typeof FormGroup;
    Label: typeof FormLabel;
}) => React.RefForwardingComponent<HTMLDivElement, FormElementProps> = ({
    Control,
    Group,
    Label,
}) => {
    const FormElement = React.forwardRef<HTMLDivElement, FormElementProps>(
        (props: FormElementProps, ref) => {
            // Group props
            const { className, children, layout, disabled, required, ...afterGroup } = props;

            // Label props
            const { label, ...afterLabel } = afterGroup;

            // Control props
            const { as, ...rest } = afterLabel;

            return (
                <Group
                    ref={ref}
                    className={className}
                    disabled={disabled}
                    layout={layout}
                    required={required}>
                    <Label>{label}</Label>
                    <Control as={as} {...rest}></Control>
                    {children}
                </Group>
            );
        }
    );

    FormElement.displayName = "Form.Element";

    return FormElement;
};

export const FormElement = createElementComponent({
    Control: FormControl,
    Group: FormGroup,
    Label: FormLabel,
});
