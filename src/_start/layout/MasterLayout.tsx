import React from "react";
import { AsideDefault } from "./components/aside/AsideDefault";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { Sidebar } from "./components/Sidebar";
import { Toolbar } from "./components/Toolbar";
import { ScrollTop } from "./components/ScrollTop";
import { Content } from "./components/Content";
import { MasterInit } from "./MasterInit";
import { PageDataProvider } from "./core";
import { ExploreMain } from "../partials";
import { toAbsoluteUrl } from "../helpers";

const MasterLayout: React.FC = ({ children }) => {
  let bgImagePath = toAbsoluteUrl(`/media/pages/dashboard/background.jpg`);

  if (bgImagePath) {
    bgImagePath = `url("${bgImagePath}")`;
  }

  return (
    <PageDataProvider>
      <div className="d-flex flex-column flex-root" style={{ backgroundImage: bgImagePath }}>
        <div className="page d-flex flex-row flex-column-fluid">
          <AsideDefault />
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="hb_wrapper"
          >
            <HeaderWrapper />
            <div className="d-flex flex-column flex-column-fluid">
              <Toolbar />
              <div
                className="content fs-6 d-flex flex-column-fluid"
                id="hb_content"
              >
                <Content>{children}</Content>
              </div>
            </div>
            <Footer />
          </div>
          <Sidebar />
        </div>
      </div>
      <ScrollTop />
      <MasterInit />
      <ExploreMain />
    </PageDataProvider>
  );
};

export { MasterLayout };