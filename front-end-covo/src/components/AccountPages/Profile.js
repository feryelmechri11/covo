import React, { Component } from "react";
import "./Profile.css";
import UserComments from "./UserComments";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <div className=" userDetails">
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Profile Image"
              className="profile-img"
            />
            <h2> User Name </h2>
            <p className="city"><i class="fas fa-map-pin"></i>Tunis</p>
            <div className="verified-items">
              <a href="#" className="social-icon facebook">
                <i className="fab fa-facebook-f"></i> &nbsp;&nbsp; Facebook
                verifié
              </a>
              <a href="#" className="social-icon twitter">
                <i class="fas fa-phone"></i> &nbsp;&nbsp; Numéro de téléphone
                vérifié
              </a>
              <a href="#" className="social-icon tumblr">
                <i class="fas fa-envelope"></i> &nbsp;&nbsp; Adresse email
                vérifié
              </a>
              <a href="#" className="social-icon youtube">
                <i class="fas fa-address-card"></i> &nbsp;&nbsp; Pièce
                d’identité vérifiée
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="desc">
              <h2>
                Bonjour, je m'appelle{" "}
                
                  {" "}
                  <strong>{}user name </strong>
                
                !
              </h2>

            <h5 >Membre depuis juillet 2020</h5>
            </div>
              <h2 className="full-name">Activité</h2>
             <div className="activity">
              <h5>
                <i class="fas fa-car"></i> &nbsp;&nbsp; {} nombre des trajets effectuées
              </h5>
              <h5>
                <i class="fas fa-cube"></i>  &nbsp;&nbsp;{} nombre des colis envoyés
              </h5>
              <h5>
                <i class="fas fa-comment-alt"></i> &nbsp;&nbsp;
                {} nombre des commentaires
              </h5>
              </div>
            </div>
          </div>
          <div>
            <UserComments />
          </div>
        </div>
      
    );
  }
}
export default Profile;
