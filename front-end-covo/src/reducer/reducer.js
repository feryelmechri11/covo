import { combineReducers } from "redux";

const listAds = [];
const listPaths = [];

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

function reducersPathlist (state = listPaths, action) {
  if (action.type === "PathListAction") {
    return action.payload;
  }

  return state;
}
const allReducers = combineReducers({
  adsReducerkey: reducersAds,
  getAdsFromApiListReducer: reducersAdslist,
  pathReducer:reducersPathlist
});

export default allReducers;