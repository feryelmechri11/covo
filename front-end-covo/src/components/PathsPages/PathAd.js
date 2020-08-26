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
import { connect } from "react-redux";
import { addPathToApi } from "../../action/actions";
class PathAd extends Component {
  state = {
    starting_address: "",
    arrival_address: "",
    date_departure: "",
    arrival_date: "",
  };
  /******************************************Get  path items  ******************************** */
  handleChangestarting_address = (event) => {
    this.setState({ starting_address: event });
  };
  handleChangearrival_address = (event) => {
    this.setState({ arrival_address: event });
  };
  handleChangedate_departure = (event) => {
    this.setState({ date_departure: event });
  };
  handleChangearrival_date = (event) => {
    this.setState({ arrival_date: event });
  };

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
                  <MDBInput
                    label="Départ"
                    type="text"
                    onChange={(e) =>
                      this.handleChangestarting_address(e.target.value)
                    }
                  ></MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow size="5">
                <MDBCol className="mt-5" size="1">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                </MDBCol>
                <MDBCol size="9">
                  <MDBInput
                    label="Arrivée"
                    type="text"
                    onChange={(e) =>
                      this.handleChangearrival_address(e.target.value)
                    }
                  ></MDBInput>
                </MDBCol>
              </MDBRow>
            </MDBRow>
            <MDBRow>
              <MDBCol size="4">
                <MDBInput
                  label="Date de départ"
                  size="sm"
                  type="date"
                  onChange={(e) =>
                    this.handleChangedate_departure(e.target.value)
                  }
                >
                  <i class="far fa-calendar-alt"></i>
                </MDBInput>
              </MDBCol>
              <MDBCol size="4">
                <MDBInput
                  label="Date d'arrivé"
                  size="sm"
                  type="date"
                  onChange={(e) =>
                    this.handleChangearrival_date(e.target.value)
                  }
                >
                  <i class="far fa-calendar-alt"></i>
                </MDBInput>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        <div>
          <button class="btn blue-gradient" 
             onClick={() =>
              this.props.addPath({
                starting_address:this.state.starting_address,
                arrival_address:this.state.arrival_address,
                date_departure:this.state.date_departure,
                arrival_date:this.state.arrival_date
              })
            }>Publier une annonce </button>
          <button class="btn blue-gradient">Trouver des livraisons</button>
          <button class="btn blue-gradient">Trouver des voyageurs</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPath: (el) => dispatch(addPathToApi(el)),
});
export default connect(null, mapDispatchToProps)(PathAd);
