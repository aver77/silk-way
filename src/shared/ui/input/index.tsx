import React, { FC, ComponentProps } from "react";
import cx from "classnames";

import { TypesEnum, SizesEnum } from "../index";

import styles from "./Input.module.scss";

interface IInput extends ComponentProps<"input"> {
    variant?: TypesEnum;
    _size?: SizesEnum;
}

const Input: FC<IInput> = ({
    variant = TypesEnum.PRIMARY,
    _size = SizesEnum.MEDIUM,
    children,
    ...restProps
}) => {
    const { className, style, disabled, ...finalProps } = restProps || {};

    return (
        <input
            {...finalProps}
            disabled={disabled}
            style={style}
            className={cx(
                styles.input,
                className,
                disabled && styles.disabled,
                _size && styles[_size],
                variant && styles[variant]
            )}
        />
    );
};

export default Input;
