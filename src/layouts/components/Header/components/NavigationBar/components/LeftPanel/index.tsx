import { Space } from "antd";
import Logo from "@layouts/components/Header/components/NavigationBar/components/Logo";
import Navigation from "@layouts/components/Header/components/NavigationBar/components/Navigation";

const LeftPanel = () => {
  return (
    <Space align="center">
      <Logo />
      <Navigation />
    </Space>
  );
};

export default LeftPanel;
