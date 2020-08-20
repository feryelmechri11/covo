import React, { Component } from "react";
class RecapParcel extends Component {
  render() {
    return <div>
<h2> récapitulatif de colis </h2>
<h3> Adresse de livraison</h3>
  <h5> Colis à livré num <strong>houni num de colis {}</strong> <br/> </h5>
 <p> de <strong> Ville de départ {} </strong> vers <strong>Ville d'arrivée {}</strong> <br/>
  </p> 
  <h3> Date de livraison</h3>

 <p> à partir de <strong> date de départ {} </strong> jusqu'à  <strong>date d'arrivée {}</strong> <br/>
  </p> 
  <h3> Frais de livraison</h3>
  <p> {} prix : <strong> 1000 DT </strong></p>

    </div>;
  }
}
export default RecapParcel ; 
