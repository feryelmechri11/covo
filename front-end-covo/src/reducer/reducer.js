import { combineReducers } from "redux";

const listAds = [];
// const initialState = [];

function reducersAds(state = listAds, action) {
  if (action.type === "AdsListAction") {
    return action.data;
  }
  return state;
}

function reducersAdslist(state = listAds, action) {
  if (action.type === "getAdsFromApi") {
    return action.data;
  }
  return state;
}


const allReducers = combineReducers({
  adsReducerkey: reducersAds,
  getAdsFromApiListReducer: reducersAdslist,
 
});

export default allReducers;