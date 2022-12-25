import React from "react";
import {ButtonForm, ButtonIO} from "./models/button.model";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonIO> = (props) => {
    const {
        onClick = () => null,
        children,
        form = ButtonForm.ellipse,
        disabled = false,
        loading = false,
    } = props;
    return <button
        className={styles.button}
        onClick={onClick}
        disabled={disabled || loading}
    >
        {children}
    </button>
}

export default Button;
