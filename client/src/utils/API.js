import axios from "axios";

const authKey = "b374b0d5d62040c9a7db208eba9a3654";

export default {
  articleSearch: function() {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=");
  },
};