import { ReactNode, FC } from "react";
import { Layout } from "antd";
import Header from "@layouts/components/Header";
import Footer from "@layouts/components/Footer";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout id="layout">
      <Layout.Header id="layout-header">
        <Header />
      </Layout.Header>
      <Layout.Content id="layout-content">{children}</Layout.Content>
      <Layout.Footer id="layout-footer">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default DefaultLayout;
