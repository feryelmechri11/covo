import React, { Component } from "react";
import "./testimonial.css";
import { MDBBtn, MDBIcon } from "mdbreact";
import { MDBMedia } from "mdbreact";

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial">
        <h2>Nos client nous aiment</h2>
        <div className="shadow-box-example hoverable testimonial-send">
        <div className="card-testimonial">
            <MDBMedia list className="mt-3">
              <MDBMedia tag="li">
                <MDBMedia left href="#">
                  <MDBMedia
                    object
                    src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg"
                    alt="Generic placeholder image"
                  />
                </MDBMedia>
                <MDBMedia body>
                  <MDBMedia heading>Anna Smith </MDBMedia>
                  <MDBMedia heading> <strong>Expéditrice Covo</strong></MDBMedia>
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="grey-text" />
                  <p>
                  <q>  Sans Covo, mon amie qui habite à 500km de chez moi n'aurait
                    jamais reçu son cadeau d'anniversaire.</q>
                  </p>
                </MDBMedia>
              </MDBMedia>
            </MDBMedia>
          </div>
          <div>
            <h3>Faites livrer vos colis et vos achats par des particuliers</h3>
            <button className="ccmbtn"> J'envois mon colis</button>
          </div>
          
        </div>
        <div className="shadow-box-example hoverable testimonial-carpooling">
        <div>
            <h3>Transporter un colis pour un particulier</h3>
            <button className="ccmbtn2"> Je rentabilise mon voyage</button>
          </div>
        <div className=" card-testimonial">
            <MDBMedia list className="mt-3">
              <MDBMedia tag="li">
                <MDBMedia left href="#">
                  <MDBMedia
                    object
                    src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg"
                    alt="Generic placeholder image"
                  />
                </MDBMedia>
                <MDBMedia body>
                  <MDBMedia heading>Anna Smith </MDBMedia>
                  <MDBMedia heading> <strong>Voyageuse Covo</strong></MDBMedia>
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="blue-text" />
                  <MDBIcon icon="star" className="grey-text" />
                  <p>
                 <q> j'adore l'idée de rentabiliser mes voyages</q>
                  </p>
                </MDBMedia>
              </MDBMedia>
            </MDBMedia>
          </div>
          
          
        </div>
      </div>
    );
  }
}
export default Testimonial;
