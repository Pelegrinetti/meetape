import classNames from "classnames";
import styles from "./Container.module.css";

const Container = (props) => {
  const {
    as: Component = "div",
    variant = "fixed",
    className,
    children,
    ...rest
  } = props;

  return (
    <Component
      className={classNames(
        className,
        variant === "fixed" ? styles.Fixed : styles.Fluid
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Container;
