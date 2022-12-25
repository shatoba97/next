import React, {MouseEventHandler} from "react";

export interface ButtonIO {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    form?: ButtonForm;
    disabled?: boolean;
    loading?: boolean;
}

export enum ButtonForm {
    ellipse='ELLIPSE',
    circle='CIRCLE',
}
