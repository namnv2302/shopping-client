import Logo from "@layouts/components/Header/components/NavigationBar/components/Logo";
import { Input, Space, Typography } from "antd";
import classNames from "classnames/bind";
import styles from "../../Footer.module.scss";

const cx = classNames.bind(styles);

const ContactInfo = () => {
  return (
    <Space direction="vertical">
      <Logo />
      <Input
        className={cx("input")}
        placeholder="Enter email address"
        suffix={
          <Typography.Text className={cx("input-text")}>
            Sign Up
          </Typography.Text>
        }
      />
      <Typography.Text
        style={{
          fontSize: "1.3rem",
          fontWeight: 400,
          color: "#8A8FB9",
          lineHeight: "19px",
        }}
      >
        Contact Info
      </Typography.Text>
      <Typography.Text
        style={{
          fontSize: "1.3rem",
          fontWeight: 400,
          color: "#8A8FB9",
          lineHeight: "19px",
        }}
      >
        17 Princess Road, London, Greater London NW1 8JR, UK
      </Typography.Text>
    </Space>
  );
};

export default ContactInfo;
