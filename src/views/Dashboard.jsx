import { useEffect } from "react";
import { useState } from "react";
import { UseAuth } from "../cmps/UseAuth";
import { useNavigate } from "react-router-dom";

export const Dashboard = ({ code }) => {
  const accessToken = UseAuth(code);
  localStorage.setItem("accessToken", accessToken);

  console.log(accessToken);

  const history = useNavigate();

  useEffect(() => {
    if (!code) history("/login");
  }, [code]);

  return (
    <section className="dashboard-section">
      <h1>Dashboard </h1>
    </section>
  );
};
