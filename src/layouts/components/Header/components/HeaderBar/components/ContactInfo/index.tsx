import classNames from "classnames/bind";
import { Typography } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import styles from "../../HeaderBar.module.scss";

const cx = classNames.bind(styles);

const ContactInfo = () => {
  return (
    <div className={cx("contact-info")}>
      <Typography.Text
        className={cx("contact-info-text")}
        style={{ marginBottom: 0, fontWeight: 400, fontSize: 16 }}
      >
        <MailOutlined style={{ marginRight: 10 }} />
        nvn1992002@gmail.com
      </Typography.Text>
      <Typography.Text
        className={cx("contact-info-text")}
        style={{ marginBottom: 0, fontWeight: 400, fontSize: 16 }}
      >
        <PhoneOutlined style={{ marginRight: 10 }} />
        (12345)67890
      </Typography.Text>
    </div>
  );
};

export default ContactInfo;
