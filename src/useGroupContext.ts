import { useContext } from "react";
import { FormGroupContext, FormGroupContextValue } from "./FormGroupContext";

export const useGroupContext = (elemName = "useGroupContext"): FormGroupContextValue => {
    const groupContext = useContext(FormGroupContext);

    if (!groupContext) {
        throw new Error(`${elemName} must be used inside of a FormGroup`);
    }

    return groupContext;
};
