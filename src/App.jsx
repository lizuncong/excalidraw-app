import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import 'antd/dist/antd.less';
import { Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import MENUS from "./menus";
import "./App.css";

window.EXCALIDRAW_ASSET_PATH = process.env.NODE_ENV === "development" ? "/" : '/excalidraw-app/';


function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div className="virgil">dd</div>
      <div className={["left", show && "show"].join(" ")}>
        <Menu
          style={{ height: "100%", overflow: "auto" }}
          defaultOpenKeys={["canvas_base"]}
          selectedKeys={[location.pathname]}
          mode="inline"
          items={MENUS}
        />
      </div>
      <div className="right">
        <header>
          <span onClick={() => setShow(!show)}>
            {show ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </header>
        <div className="page-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
