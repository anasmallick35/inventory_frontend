import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Home.css";
//import heroImg from "../../assets/hero-img.png";
import heroImg1 from "../../assets/hero-img2.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <img src = {Logo} alt = "" width = {75}/>
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-secondary">
              <Link to="/register">Register</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-secondary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management </h2>
          <p>
          A robust inventory management system designed to streamline product tracking and warehouse operations, offering real-time insights to enhance business efficiency and growth.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Book A Demo</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="100+" text="Global Clients" />
            <NumberText num="2K" text="Active Users" />
            <NumberText num="30K+" text="Products Listed" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg1} alt="Inventory"/>
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
