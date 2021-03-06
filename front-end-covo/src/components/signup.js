import React, { Component } from "react";
import "./signup.css";

import { AddUserToApi } from "../action/actions";

class Authentification extends Component {
  state = {
    name: "",
    password: "",
    phone_number: "",
    email: "",
  };
  render() {
    return (
      <div className="Autho">
        {/* <h2> Sign in/up Form</h2> */}
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Inscription avec </h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <input
                type="text"
                placeholder="Nom Prénom"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Num de tel"
                onChange={(e) =>
                  this.setState({ phone_number: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Adresse e-mail"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Mot de passe 
"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <a href="#">Mot de passe oublié ?</a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  AddUserToApi(this.state);
                }}
              >
                Connexion
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Connexion</h1>
                <p>Déjà membre ? Connectez-vous</p>
                <button className="ghost" id="signUp">
                  Connexion
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>
            Created with <i className="fa fa-heart"></i> by
            <a target="_blank" href="#">
              Feryel Mechri
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
export default Authentification;
