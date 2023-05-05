import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import HeaderBar from "./components/HeaderBar";
import NavigationBar from "./components/NavigationBar";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("wrapper")}>
      <HeaderBar />
      <NavigationBar />
    </div>
  );
};

export default Header;
