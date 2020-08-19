import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="navbarcolor" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/Colis">
                <i class="fas fa-cube"> &nbsp;&nbsp;Envoyer colis</i>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/Trajet">
                <i class="fas fa-road">&nbsp;&nbsp;Proposer un trajet </i>
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/ADS">
                <i class="fas fa-bullhorn">&nbsp;&nbsp; Voir les annonces </i>
              </MDBNavLink>
            </MDBNavItem>

            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <Link to="/Inscription">
              <button class="inghost mr-3"> Inscription</button>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/Auth">
                <button className="ghost">Connexion</button>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>{" "}
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
