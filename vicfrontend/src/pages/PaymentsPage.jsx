import React from "react";
import Sidebar from "../components/SideBar/SideBar";
import PaymentDetails from "../components/Payments/PaymentDetails";

const PaymentsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "#fff",
        zIndex: 1000,
      }}
    >
      <div style={{ flex: "1", display: "flex" }}>
        <div style={{ flex: "0 0 25vw 100vh" }}>
          <Sidebar />
        </div>
        <div style={{ flex: "1", padding: "1% 10%", boxSizing: "border-box" }}>
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
