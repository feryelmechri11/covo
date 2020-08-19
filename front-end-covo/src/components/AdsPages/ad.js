import React, { Component } from "react";
import { connect } from "react-redux";
import { apiData, getAdsFromApi } from "../../action/actions";
import "./ad.css";
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
class AdCard extends Component {
  componentDidMount() {
    this.props.getAds();
  }
  state = {
    starting_address: "",
    arrival_address: "",
    date_departure: "",
    arrival_date: "",
    picture: "",
    delivery_user_name: "",
  };
  render() {
    return (
      <div className="Card">
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
          <select className="browser-default custom-select">
            <option>Type d'objet</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="3">XL</option>
          </select>
        </div>
        <div className="ad_card">
          {this.props.listAds.map((el) => (
            <MDBCol
              style={{ maxWidth: "22rem" }}
              className="adItem"
              key={el.id}
            >
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Colis type </MDBCardTitle>
                  <MDBCardText>
                    {" "}
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {el.starting_address}
                  </MDBCardText>
                  <MDBCardText>
                    {" "}
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {el.arrival_address}
                  </MDBCardText>
                  <MDBCardText>
                    {" "}
                    <i class="far fa-calendar-alt"></i> à livrer entre{" "}
                    {el.date_departure}
                    et le {el.arrival_date}
                  </MDBCardText>
                  <MDBCardText>
                    {" "}
                    <MDBIcon icon="user" /> expédiée par le livreur{" "}
                    {el.delivery_user_name}
                  </MDBCardText>
                  <MDBBtn href="#">Me proposer </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listAds: state.adsReducerkey,
});
const mapDispatchToProps = (dispatch) => ({
  getAds: () => dispatch(getAdsFromApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdCard);
