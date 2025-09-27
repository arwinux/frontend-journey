import React from "react";
import AppNav from "./AppNav";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <AppNav />
      <Outlet />
      <footer style={{ marginTop: "5rem" }}>this is footer section</footer>
    </div>
  );
}

export default Layout;
