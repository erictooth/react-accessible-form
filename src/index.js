//@flow
import * as React from "react";
import classNames from "classnames";
import uuidv4 from "uuid/v4";

type Layout = "stacked" | "aligned";

type FormContextValue = {|
    disabled: boolean,
    layout: Layout,
|};

type FormGroupContextValue = {|
    id: string,
    disabled: boolean,
    required: boolean,
|};

const FormContext = React.createContext<FormContextValue>({
    disabled: false,
    layout: "stacked",
});

const FormGroupContext = React.createContext<?FormGroupContextValue>();

const generateId = uuidv4;

const renderSections = (children) => {
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

export const useGroupContext = () => {
    const groupContext = React.useContext(FormGroupContext);

    if (!groupContext) {
        throw new Error("useGroupContext must be used inside of a FormGroup");
    }

    return groupContext;
};

const Form = React.forwardRef<
    {
        as: any,
        children: React.Node,
        layout?: Layout,
        disabled?: boolean,
    },
    HTMLFormElement
>((props, ref) => {
    const { as = "form", children, disabled = false, layout = "stacked", ...rest } = props;
    const formContextValue = React.useMemo(
        () => ({
            disabled,
            layout,
        }),
        [disabled, layout]
    );
    return React.createElement(
        as,
        {
            ref,
            ...rest,
        },
        <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>
    );
});

Form.displayName = "Form";

const FormGroup = React.forwardRef<
    {
        as: any,
        children: React.Node,
        className?: string,
        disabled: boolean,
        required: boolean,
    },
    HTMLDivElement
>((props, ref) => {
    const { as = "div", children, className, disabled = false, required = false, ...rest } = props;
    const { disabled: formDisabled, layout } = React.useContext(FormContext);
    const formGroupContext = React.useMemo(
        () => ({
            disabled: formDisabled || disabled,
            id: generateId(),
            required,
        }),
        [disabled, formDisabled, required]
    );
    return React.createElement(
        as,
        { className: classNames("form__group", `form__group--${layout}`, className), ref, ...rest },
        <FormGroupContext.Provider value={formGroupContext}>
            {layout === "aligned" ? renderSections(children) : children}
        </FormGroupContext.Provider>
    );
});

FormGroup.displayName = "Form.Group";

const FormLabel = React.forwardRef<
    {
        as?: any,
        children: React.Node,
        className?: string,
    },
    HTMLLabelElement
>((props, ref) => {
    const { as = "label", className, ...rest } = props;
    const groupContext = React.useContext(FormGroupContext);

    if (!groupContext) {
        throw new Error("FormLabel must be used inside of a FormGroup");
    }

    const { disabled, id, required } = groupContext;

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
});

FormLabel.displayName = "Form.Label";

const FormControl = React.forwardRef<
    {
        as?: React.Node,
        className?: string,
        render: ({
            className: string,
            disabled: boolean,
            id?: string,
            required: boolean,
        }) => React.Node,
    },
    HTMLInputElement
>((props, ref) => {
    const { as = "input", className, render, ...rest } = props;

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
    if (render) {
        return render(inputProps);
    }
    return React.createElement(as, { ...inputProps, ...rest, ref });
});

FormControl.displayName = "Form.Control";

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
export default Form;
