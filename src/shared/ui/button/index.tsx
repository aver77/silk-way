import React, { FC, ComponentProps } from "react";
import cx from "classnames";

import { TypesEnum, SizesEnum } from "../index";

import styles from "./Button.module.scss";

interface IButton extends ComponentProps<"button"> {
    variant?: TypesEnum;
    size?: SizesEnum;
}

const Button: FC<IButton> = ({
    variant = TypesEnum.PRIMARY,
    size = SizesEnum.MEDIUM,
    children,
    ...restProps
}) => {
    const { className, disabled, style, ...finalProps } = restProps || {};

    return (
        <button
            {...finalProps}
            disabled={disabled}
            style={style}
            className={cx(
                styles.button,
                variant && styles[variant],
                size && styles[size],
                disabled && styles.disabled,
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
