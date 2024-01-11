import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="justify-content-between px-3">
        <div className="d-flex align-items-center font-weight-bold"> 
           <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">TV Shows</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Recently Added</Nav.Link>
                <Nav.Link href="#">My List</Nav.Link>
            </Nav> 
        </div>

        <div className="d-flex align-items-center justify-content-between" style={{width: "7%"}}>
            <Navbar.Text><FaSearch /></Navbar.Text>
            <div id="kids">KIDS</div>
            <Navbar.Text><BsBell /></Navbar.Text>
            <Navbar.Text><FaUser /></Navbar.Text>
        </div>
    </Navbar>
  );
};

export default MyNavbar;