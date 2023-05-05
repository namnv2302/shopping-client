import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./RightPanel.module.scss";

const cx = classNames.bind(styles);

const RightPanel = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Input
          className={cx("input")}
          suffix={<SearchOutlined className={cx("search-icon")} />}
        />
      </div>
    </div>
  );
};

export default RightPanel;
