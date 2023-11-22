import { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

function Header({ linkActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="new-page-navbar">
      <div>
        <Navbar expand="md" className="new-navbar">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto text-right z-index-1" navbar>
              <NavItem
                className={`text-right ${
                  linkActive === "home" ? "new-page-navbar-active" : ""
                }`}
                onClick={() => {
                  setLinkActive("home");
                }}
              >
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={"#"}
                  className={`${
                    linkActive === "features" ? "new-page-navbar-active" : ""
                  }`}
                  onClick={() => {
                    linkClicked("new-features");
                  }}
                >
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={"#"}
                  className={`${
                    linkActive === "sites" ? "new-page-navbar-active" : ""
                  }`}
                  onClick={() => {
                    linkClicked("new-sites");
                  }}
                >
                  Sites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={"#"}
                  className={`${
                    linkActive === "faq" ? "new-page-navbar-active" : ""
                  }`}
                  onClick={() => {
                    linkClicked("new-faq");
                  }}
                >
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/blog"
                  className={`${
                    linkActive === "blog" ? "new-page-navbar-active" : ""
                  }`}
                  onClick={() => {
                    setLinkActive("blog");
                  }}
                >
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
            <a
              // href="https://account.stellaraio.com"
              href="#"
              // rel="noreferrer"
              // target={"_blank"}
            >
              <Button className="new-gradient-button new-nav-btn">
                Dashboard
              </Button>
            </a>
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
