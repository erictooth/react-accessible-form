import * as React from "react";
import classNames from "classnames";
import nanoid from "nanoid";

import { BoxProps } from "./Box.type";
import { FormContext, Layout } from "./Form";
import { FormGroupContext } from "./FormGroupContext";

export type FormGroupProps = BoxProps & {
    disabled?: boolean;
    layout?: Layout;
    required?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const renderSections = (children: React.ReactNode): React.ReactNode => {
    const childrenArr = React.Children.toArray(children);
    if (childrenArr.length === 0) {
        return null;
    }
    return (
        <>
            <div className="form__section">{childrenArr[0]}</div>
            <div className="form__section">{childrenArr.slice(1)}</div>
        </>
    );
};

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
    (props: FormGroupProps, ref) => {
        const {
            as = "div",
            children,
            className,
            disabled = false,
            id,
            layout: propLayout,
            required = false,
            ...rest
        } = props;

        const groupId = React.useMemo(() => id || nanoid(), [id]);

        const { disabled: formDisabled, layout: formLayout } = React.useContext(FormContext);
        const layout = propLayout || formLayout;
        const formGroupContext = React.useMemo(
            () => ({
                disabled: formDisabled || disabled,
                id: groupId,
                required,
            }),
            [disabled, formDisabled, groupId, required]
        );
        return React.createElement(
            as,
            {
                className: classNames("form__group", `form__group--${layout}`, className),
                ref,
                ...rest,
            },
            <FormGroupContext.Provider value={formGroupContext}>
                {layout === "aligned" ? renderSections(children) : children}
            </FormGroupContext.Provider>
        );
    }
);

FormGroup.displayName = "Form.Group";
