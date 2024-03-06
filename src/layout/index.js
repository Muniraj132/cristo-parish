import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "70vh", padding: "10px" }}>
        <Outlet />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default MainLayout;
