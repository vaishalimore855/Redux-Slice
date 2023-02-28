import axios from "axios";

export const FETCH_SOMETHING = "FETCH_SOMETHING";
const FetchWeather = (data) => {
  //console.log(data)
  return {
    type: FETCH_SOMETHING,
    payload: data,
  };
};

export default FetchWeather;
