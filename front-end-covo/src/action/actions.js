import axios from "axios";

/****************************  Action : Get Ads to API  ******************************* */
export function apiData(data) {
  return {
    type: "AdsListAction",
    data,
  };
}
export function getAdsFromApi(el) {
  return (dispatch) => {
    axios.get("http://localhost:4000/covo/ads/getAd",el,{
      withCredentials: true,
    }).then((res) => {
      dispatch(apiData(res.data));
    });
  };
}

/****************************  Action : Get TRAJECT to API -CLIENT - ******************************* */
export const getAllPaths = (payload) => ({
  type: "PathListAction",
  payload,
});

export function getPathsFromApi(el) {
  return (dispatch) =>
    axios
      .get("http://localhost:4000/covo/paths/getPath",el,{
        withCredentials: true,
      })
      .then((res) => dispatch(getAllPaths(res.data)));
}

/****************************  Action : Add new user  -SIgnup - ******************************* */

export function AddUserToApi(user) {
  console.log(user);

  axios.post("http://localhost:4000/covo/users/addUser", user).then((res) => {
    console.log("ertyui");
    if (res.status === 200) {
      window.location.assign("/");
    }
  });
}

/****************************  Action : Login User  -SIgnin - ******************************* */

export function LoginUser(user) {
  console.log(user);

  axios
    .post("http://localhost:4000/covo/login", user, { withCredentials: true })
    .then((res) => {
      console.log("ertyui");
      if (res.status === 200) {
        localStorage.setItem("logcheck", "true");
        window.location.assign("/");
      }
    });
}

/****************************  Action : Login User  -SIgnin - ******************************* */

export function LogoutUser() {
  axios
    .post(
      "http://localhost:4000/covo/login/logout",
      {},
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("logcheck", "false");
        window.location.assign("/Auth");
      }
    });
}
/****************************  Action : add ad to API  ******************************* */

export function addAdsToApi(el) {
  return () =>
    axios
      .post("http://localhost:4000/covo/ads/addAd", el, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
}
/****************************  Action : add Path to API  ******************************* */

export function addPathToApi(el) {
  return () =>
    axios
      .post("http://localhost:4000/covo/paths/addPath", el, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
}
