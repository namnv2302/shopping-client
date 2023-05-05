import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Col, Row, Typography } from "antd";
import ContactInfo from "@layouts/components/Footer/components/ContactInfo";
import ListInfo from "@layouts/components/Footer/components/ListInfo";
import listContactInfo from "@assets/listContactInfo";

const cx = classNames.bind(styles);

export type ListContactInfoType = {
  label: string;
  items: string[];
};

const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Row align={"top"} gutter={{ lg: 48 }}>
          <Col lg={{ span: 9 }}>
            <ContactInfo />
          </Col>
          {listContactInfo.map((data: ListContactInfoType) => (
            <Col lg={{ span: 5 }} key={data.label}>
              <ListInfo data={data} />
            </Col>
          ))}
        </Row>
      </div>
      <Row
        align={"middle"}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          padding: "20px 0",
          backgroundColor: "#E7E4F8",
        }}
      >
        <Col lg={{ span: 8, offset: 4 }}>
          <Typography.Text
            style={{
              fontSize: "1.3rem",
              fontWeight: 400,
              color: "#8A8FB9",
              lineHeight: "19px",
            }}
          >
            ©Webecy - All Rights Reserved
          </Typography.Text>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
