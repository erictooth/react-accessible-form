import * as React from "react";
import classNames from "classnames";

import { BoxProps } from "./Box.type";
import { useGroupContext } from "./useGroupContext";

export type FormLabelProps = BoxProps<{ htmlFor: string; className: string }> & {
    children: React.ReactNode;
    className?: string;
};

export const FormLabel = React.forwardRef<HTMLElement, FormLabelProps>(
    (props: FormLabelProps, ref) => {
        const { as = "label", className, ...rest } = props;

        const { disabled, id, required } = useGroupContext("FormLabel");

        return React.createElement(as, {
            htmlFor: id,
            className: classNames(
                "form__label",
                className,
                {
                    "form__label--required": required,
                },
                { "form__label--disabled": disabled }
            ),
            ...rest,
            ref,
        });
    }
);

FormLabel.displayName = "Form.Label";
