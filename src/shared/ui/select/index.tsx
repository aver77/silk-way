import React, { FC, ComponentProps } from "react";

import { TypesEnum, SizesEnum } from "../index";

import cx from "classnames";
import styles from "./Select.module.scss";

interface ISelect extends ComponentProps<"select"> {
    variant?: TypesEnum;
    _size?: SizesEnum;
    options: string[] | Record<string, any>[];
}

const Select: FC<ISelect> = ({
    variant = TypesEnum.PRIMARY,
    _size = SizesEnum.MEDIUM,
    options,
    ...restProps
}) => {
    const { className, style, disabled, ...finalProps } = restProps || {};

    return (
        <select
            disabled={disabled}
            className={cx(
                styles.select,
                className,
                disabled && styles.disabled,
                _size && styles[_size],
                variant && styles[variant]
            )}
            {...finalProps}
        >
            {options.map((opt) => {
                if (typeof opt === "string") {
                    return (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    );
                } else {
                    return (
                        <option key={opt.name} value={opt.value}>
                            {opt.name}
                        </option>
                    );
                }
            })}
        </select>
    );
};

export default Select;
