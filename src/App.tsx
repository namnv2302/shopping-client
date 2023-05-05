import { Suspense, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider, Spin } from "antd";
import { v4 as uuidV4 } from "uuid";
import ROUTER from "@constants/routers";
import DefaultLayout from "@layouts/DefaultLayout";

ConfigProvider.config({
  prefixCls: "hts",
});

function App() {
  return (
    <ConfigProvider
      prefixCls="hts"
      theme={{
        token: {
          fontFamily: "Montserrat",
        },
      }}
    >
      <div className="app">
        <Suspense fallback={<Spin />}>
          <Routes>
            {ROUTER.map(({ path, element, layout }) => {
              let Layout = DefaultLayout;
              if (layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={uuidV4()}
                  path={path}
                  element={<Layout>{element}</Layout>}
                />
              );
            })}
          </Routes>
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
