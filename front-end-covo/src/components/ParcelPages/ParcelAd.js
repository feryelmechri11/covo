import React, { useState } from "react";
import Parcelform from "../ParcelPages/Parcelfrom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RecapParcel from "./RecapParcel";

import { addAdsToApi } from "../../action/actions";
import { useDispatch } from "react-redux";

const ParcelAd = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Informations de colis", "Récapitulatif", "Validation"];
}

function getStepContent(stepIndex, props) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <Parcelform
            handleChangestarting_address={props.handleChangestarting_address}
            handleChangearrival_address={props.handleChangearrival_address}
            handleChangedate_departure={props.handleChangedate_departure}
            handleChangearrival_date={props.handleChangearrival_date}
            handleChangepicture={props.handleChangepicture}
            handleChangeobject_type={props.handleChangeobject_type}
            handleChangedescription={props.handleChangedescription}
            handleChangeprice={props.handleChangeprice}
          />
        </div>
      );
    case 1:
      return (
        <div>
          <RecapParcel ads={props.ads}/>
        </div>
      );
    case 2:
      return (
        <div>
          <h3>
            {" "}
            votre annonce a été publiée avec <strong>succés</strong>
          </h3>
        </div>
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const [ads, setAds] = useState({
    starting_address: "",
    arrival_address: "",
    date_departure: "",
    arrival_date: "",
    picture: "",
    object_type: "",
    price: "",
    description: "",
  });
  const dispatch = useDispatch();
  const classes = ParcelAd();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  /******************************************Get  ads items  ******************************** */
  const handleChangestarting_address = (event) => {
    ads.starting_address = event;
    setAds(ads);
    console.log(ads);
  };
  const handleChangearrival_address = (event) => {
    ads.arrival_address = event;
    setAds(ads);
    console.log(ads);
  };
  const handleChangedate_departure = (event) => {
    ads.date_departure = event;
    setAds(ads);
    console.log(ads);
  };
  const handleChangearrival_date = (event) => {
    ads.arrival_date = event;
    setAds(ads);
    console.log(ads);
  };
  const handleChangepicture = (event) => {
    ads.picture = event;
    setAds(ads);
    console.log(ads);
  };
  const handleChangeobject_type = (event) => {
    ads.picture = event;
    setAds(ads);
    console.log(ads);
  };
  const handleChangeprice = (event) => {
    ads.price = event;
    setAds(ads);
    console.log(ads);
  };

  const handleChangedescription = (event) => {
    ads.description = event;
    setAds(ads);
  };
  /************************************************************ */

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, {
                handleChangestarting_address: (e) =>
                  handleChangestarting_address(e),
                handleChangearrival_address: (e) =>
                  handleChangearrival_address(e),
                handleChangedate_departure: (e) =>
                  handleChangedate_departure(e),
                handleChangearrival_date: (e) => handleChangearrival_date(e),
                handleChangepicture: (e) => handleChangepicture(e),
                handleChangeobject_type: (e) => handleChangeobject_type(e),
                handleChangedescription: (e) => handleChangedescription(e),
                handleChangeprice: (e) => handleChangeprice(e),
                ads:ads
              })}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  let test = localStorage.getItem("logcheck");
                  if (activeStep === steps.length - 2) {
                    if (test !== "true") {
                      alert("merci de se connecter");
                      window.location.assign("/Auth");
                    } else {
                      handleNext();
                      dispatch(addAdsToApi(ads));
                    }
                  } else {
                    handleNext();
                    console.log(ads);
                  }
                }}
              >
                {activeStep === steps.length - 1 ? "Valider" : "Suivant"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
