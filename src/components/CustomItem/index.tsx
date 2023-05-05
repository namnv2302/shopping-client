import { FC, ReactNode } from "react";
import { Button } from "antd";
import classNames from "classnames/bind";
import styles from "./CustomItem.module.scss";

const cx = classNames.bind(styles);

type CustomItemProps = {
  label?: string | null;
  icon?: ReactNode;
  color?: string;
};

const CustomItem: FC<CustomItemProps> = ({ label, icon, color }) => {
  return (
    <Button className={cx("wrapper")} style={{ color: color }} icon={icon}>
      {label}
    </Button>
  );
};

export default CustomItem;
