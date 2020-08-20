import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBRow,
} from "mdbreact";
class PathAd extends Component {





render() {
    return (
      <div className="adPathForm">
        <div className="search_bar_ad">
          <div className="SearchInputs">
            <MDBRow>
              <MDBRow size="5">
                <MDBCol className="mt-5" size="1">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                </MDBCol>
                <MDBCol size="9">
                  <MDBInput label="Départ" type="text"></MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow size="5">
                <MDBCol className="mt-5" size="1">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                </MDBCol>
                <MDBCol size="9">
                  <MDBInput label="Arrivée" type="text"></MDBInput>
                </MDBCol>
              </MDBRow>
            </MDBRow>
            <MDBRow>
              <MDBCol size="4">
                <MDBInput label="Date de départ" size="sm" type="date">
                  <i class="far fa-calendar-alt"></i>
                </MDBInput>
              </MDBCol>
              <MDBCol size="4">
                <MDBInput label="Date d'arrivé" size="sm" type="date">
                  <i class="far fa-calendar-alt"></i>
                </MDBInput>
              </MDBCol>
            </MDBRow>
          </div>
          </div>
          <div><button class="btn blue-gradient">Publier une annonce </button>
          <button class="btn blue-gradient">Trouver des livraisons</button>
          <button class="btn blue-gradient">Trouver des voyageurs</button>
          
          </div>
          </div>
          )
          }
          }
          export default PathAd