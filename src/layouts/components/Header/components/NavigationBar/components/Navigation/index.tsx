import CustomItem from "@components/CustomItem";
import { Space } from "antd";

const Navigation = () => {
  return (
    <Space>
      <CustomItem label="Home" color="#000" />
      <CustomItem label="Pages" color="#000" />
      <CustomItem label="Products" color="#000" />
      <CustomItem label="Blog" color="#000" />
      <CustomItem label="Shop" color="#000" />
      <CustomItem label="Contact" color="#000" />
    </Space>
  );
};

export default Navigation;
