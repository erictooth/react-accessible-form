//@flow
import * as React from "react";
export type FormGroupContextValue = {|
    id: string,
    disabled: boolean,
    required: boolean,
|};

export const FormGroupContext = React.createContext<?FormGroupContextValue>();

export const useGroupContext = () => {
    const groupContext = React.useContext(FormGroupContext);

    if (!groupContext) {
        throw new Error("useGroupContext must be used inside of a FormGroup");
    }

    return groupContext;
};
