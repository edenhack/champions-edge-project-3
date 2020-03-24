import axios from "axios";

const BASEURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/`;
const APIKEY = "?api_key=RGAPI-bd437fc1-2419-479e-a859-868287fd1dca";

summonerName

export default {
  search: function (summonerName) {
    return axios.get(BASEURL + summonerName + APIKEY);
  }
};
