import classNames from "classnames/bind";
import styles from "./HeaderBar.module.scss";
import ContactInfo from "./components/ContactInfo";
import OptionBar from "./components/OptionBar";

const cx = classNames.bind(styles);

const HeaderBar = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <ContactInfo />
        <OptionBar />
      </div>
    </div>
  );
};

export default HeaderBar;
