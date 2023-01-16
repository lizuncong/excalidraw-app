import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "antd";
import MENUS from './menus'
import "./App.css";


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <div className="left">
        <Menu
          style={{ height: "100%", overflow: "auto" }}
          defaultOpenKeys={["canvas_base"]}
          selectedKeys={[location.pathname]}
          mode="inline"
          items={MENUS}
        />
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}


export default App;
