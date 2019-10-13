import * as React from "react";

export type FormGroupContextValue = {
    id: string;
    disabled: boolean;
    required: boolean;
};

export const FormGroupContext = React.createContext<FormGroupContextValue | null>(null);
