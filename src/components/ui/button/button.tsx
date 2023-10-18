import React, { FC, SyntheticEvent } from "react";
import styles from "./button.module.css";

interface IButton
  extends React.PropsWithChildren<React.HTMLProps<HTMLButtonElement>> {
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  htmlType: "button" | "submit" | "reset";
}

const Button: FC<IButton> = ({ children, onClick, htmlType, ...rest }) => {
  return (
    <button type={htmlType} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
