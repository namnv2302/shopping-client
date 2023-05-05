import {
  DownOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import classNames from "classnames/bind";
import CustomItem from "@components/CustomItem";
import styles from "./OptionBar.module.scss";

const cx = classNames.bind(styles);

const OptionBar = () => {
  return (
    <div className={cx("wrapper")}>
      <CustomItem label="English" icon={<DownOutlined />} />
      <CustomItem label="USD" icon={<DownOutlined />} />
      <CustomItem label="Login" icon={<UserOutlined />} />
      <CustomItem label="Wishlist" icon={<HeartOutlined />} />
      <CustomItem icon={<ShoppingCartOutlined style={{ fontSize: 18 }} />} />
    </div>
  );
};

export default OptionBar;
