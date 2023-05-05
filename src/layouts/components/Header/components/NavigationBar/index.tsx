import classNames from "classnames/bind";
import styles from "./NavigationBar.module.scss";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const cx = classNames.bind(styles);

const NavigationBar = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default NavigationBar;
