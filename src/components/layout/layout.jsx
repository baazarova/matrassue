import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="div" style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
