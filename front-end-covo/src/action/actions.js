import axios from "axios";

/****************************  Action : Get Ads to API  ******************************* */
export function apiData(data) {
    return {
      type: "AdsListAction",
      data,
    };
  }
  export function getAdsFromApi() {
    return (dispatch) => {
      axios.get("http://localhost:8000/ads").then((res) => {
        dispatch(apiData(res.data));
      });
    };
  }