//@flow
import * as React from "react";
import classNames from "classnames";

type Props = {
    as?: React.ElementType,
    children: React.Node,
    className?: string,
    layout?: Layout,
    disabled?: boolean,
};

export type Layout = "stacked" | "aligned";

export const Form = React.forwardRef<Props, HTMLFormElement>((props: Props, ref) => {
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
    //$FlowFixMe
    return React.createElement(
        as,
        { className: classNames(className, `form--${layout}`), ref, ...rest },
        <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>
    );
});

Form.displayName = "Form";

export type FormContextValue = {|
    disabled: boolean,
    layout: Layout,
|};

export const FormContext = React.createContext<FormContextValue>({
    disabled: false,
    layout: "stacked",
});
