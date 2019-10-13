//@flow
import * as React from "react";
import classNames from "classnames";
import uuidv4 from "uuid/v4";

import { FormContext, Layout } from "./Form";
import { FormGroupContext } from "./FormGroupContext";

type Props = {
    as?: React.ElementType;
    children?: React.ReactNode[];
    className?: string;
    disabled?: boolean;
    layout?: Layout;
    id?: string;
    required?: boolean;
};

const renderSections = (children: React.ReactNode) => {
    const childrenArr = React.Children.toArray(children);
    if (childrenArr.length === 0) {
        return null;
    }
    return (
        <>
            <div className="form__group__section">{childrenArr[0]}</div>
            <div className="form__group__section">{childrenArr.slice(1)}</div>
        </>
    );
};

export const FormGroup = React.forwardRef<HTMLElement, Props>((props: Props, ref) => {
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
    const { disabled: formDisabled, layout: formLayout } = React.useContext(FormContext);
    const layout = propLayout || formLayout;
    const formGroupContext = React.useMemo(
        () => ({
            disabled: formDisabled || disabled,
            id: id || uuidv4(),
            required,
        }),
        [disabled, formDisabled, id, required]
    );
    //$FlowFixMe
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
});

FormGroup.displayName = "Form.Group";
