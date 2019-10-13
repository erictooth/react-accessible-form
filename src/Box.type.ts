import * as React from "react";

export type BoxHTMLProps = React.HTMLAttributes<any> & React.RefAttributes<any>;

export type BoxProps<T = {}> = {
    as?: React.ElementType<T & BoxHTMLProps>;
};
