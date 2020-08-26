import React, { Component } from "react";
class RecapParcel extends Component {
  render() {
    return (
      <div>
        <h2> récapitulatif de colis </h2>
        <h3> Adresse de livraison</h3>
        <h5>
          {" "}
          Colis à livré num <strong>houni num de colis {}</strong> <br />{" "}
        </h5>
        <p>
          {" "}
          de{" "}
          <strong>
            {" "}
            Ville de départ {this.props.ads.starting_address}{" "}
          </strong>{" "}
          vers <strong>Ville d'arrivée {this.props.ads.arrival_address}</strong>{" "}
          <br />
        </p>
        <h3> Date de livraison</h3>

        <p>
          {" "}
          à partir de{" "}
          <strong> date de départ {this.props.ads.date_departure} </strong>{" "}
          jusqu'à <strong>date d'arrivée {this.props.ads.arrival_date}</strong>{" "}
          <br />
        </p>
        <h3> Frais de livraison</h3>
        <p>
          {" "}
          {} prix : <strong>{this.props.ads.price} DT</strong>
        </p>
      </div>
    );
  }
}
export default RecapParcel;
