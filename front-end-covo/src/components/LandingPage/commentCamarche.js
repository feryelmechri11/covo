import React, { Component } from "react";
import "./comment.css";
import { MDBBtn, MDBIcon } from "mdbreact";
class CommentCamarche extends Component {
  render() {
    return (
      <div>
        <div className="container-ccm">
          <h2>Envoyer avec Covo,</h2>
          <button className="ccmbtn"> comment ça marche ?</button>

          <div className="steps">
            <div className="step">
              <MDBBtn className="iconbtn" color="cyan lighten-3">
                <MDBIcon /> <i class="fas fa-cube"></i>
              </MDBBtn>
              <h5> Déposez une annonce</h5>
              <p>Rapide et simple : votre demande est en ligne en quelques instants.</p>
            </div>
            <div className="step">
              <MDBBtn className="iconbtn" color="cyan lighten-3">
                <MDBIcon /> <i class="fas fa-car-alt"></i>
              </MDBBtn>
              <h5>Contactez les voyageurs de votre choix.</h5>
              <p>Vous êtes en contact avec les membres qui effectuent un trajet compatible. Mettez-vous d’accord sur les modalités du transport.</p>
            </div>
            <div className="step">
              <MDBBtn className="iconbtn" color="cyan lighten-3">
                <MDBIcon /> <i class="fas fa-check-circle"></i>
              </MDBBtn>
              <h5> Colis livré</h5>
              <p>Une fois d'accord,Votre colis est transporté par le messager choisi et vous lui laissez un avis.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CommentCamarche;
