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

/****************************  Action : Get TRAJECT to API -CLIENT - ******************************* */
export const getAllPaths = (payload) => ({
  type: "PathListAction",
  payload,
});

export function getPathsFromApi() {
  return (dispatch) =>
    axios
      .get("http://localhost:8000/paths")
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
        window.location.assign("/");
      }
    });
}
