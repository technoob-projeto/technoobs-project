import React from "react";
import Header from "../../components/Header";
import { HomeStyle } from "./styles";
import matrix from "../../assets/matrix.png";

const Home = () => {
  return (
    <>
      <Header />
      <HomeStyle>
        <div className="div__background--3">
          <div className="div__background--1"></div>
          <div className="div__title--container">
            <div className="h2__title--1">
              <h2>A way to prove yourself and get real work experience</h2>
              <button className="button__candidate--register">Register</button>
            </div>
            <div className="h2__title--2">
              <h2>Register you company and find different talents</h2>
              <button className="button__company--register">Register</button>
            </div>
          </div>
          <div className="div__background--2"></div>
        </div>
      </HomeStyle>
    </>
  );
};

export default Home;
