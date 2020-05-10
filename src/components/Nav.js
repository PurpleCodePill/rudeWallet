import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Img from '../assets/img/logo.svg';
const NavStyles = styled.h2`

background-color: #EFF1F6;
display: flex;
justify-content: space-between;


ul {
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  align-items:center;
  li{
    list-style: none;
    letter-spacing: 2px;
    margin-left: 25px;
    
    padding-right:70px;
    font-size:20px;
  } 
  a{
    color:#5C5C5C;
    font-family: 'Arimo', sans-serif;
  }
}

.logo {
  height: 52px;
  width: 42px; 
  margin-right: 24px;
  margin-left: 25px;
  font-size:34px;
}

.logo-con {
  display: flex;
  align-items: center;

}

h4 {
  margin: 0px;
  font-size: 26px;
  color: #499EF8;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}


`;


const Nav = () => (

  <NavStyles>

    <div className="logo-con">
      <img className="logo" src={Img} alt=""/>
      <h4>RudeWallet</h4>
    </div>

    <ul className="nav-links">

      <li >
        <Link to="/">
            <a>Home</a>
        </Link>
      </li>

      <li>
        <Link to="/budget">
            <a>Budget</a>
        </Link>
      </li>

      <li>
        <Link to="/about">
            <h2 className="text-xl">About</h2>
        </Link>
      </li>
    </ul>


  </NavStyles>

  );

export default Nav;
