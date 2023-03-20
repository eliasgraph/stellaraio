import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Logo from "../../assets/imgs/Logo.png";
import Buttons from "../Generals/Buttons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hostname, setHostname] = useState("");
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHostname(window.location.origin);
  }, []);

  return (
    <div id="navbar" className="page-navbar container mb-20px">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <div className="d-flex align-items-center">
            {<img src={Logo} width={"50px"} alt="logo" />}
            <p className="brand-name mb-0">Stellar AIO</p>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto text-right z-index-1" navbar>
            <NavItem className="text-right">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={hostname + "/#features"}>Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={hostname + "/#sites"}>Sites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={hostname + "/#faq"}>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
          </Nav>
          <a
            href="https://account.stellaraio.com"
            rel="noreferrer"
            target={"_blank"}
          >
            <Buttons className="nav-btn" width={"14rem"} text={"Dashboard"} />
          </a>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
