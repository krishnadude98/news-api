const axios = require("axios");
const newsController = {};
require("dotenv").config();
const BASE_URL = "https://gnews.io/api/v4/top-headlines";
const SEARCH_URL = "https://gnews.io/api/v4/search";

newsController.get = async (req, res) => {
  let lang = req.params.lang ? req.params.lang : "eng";
  let category = req.query.category ? req.query.category : "general";
  let country = req.query.country ? req.query.country : "in";
  let max = req.query.max ? req.query.max : 20;

  try {
    axios
      .get(BASE_URL, {
        params: {
          apikey: process.env.API_KEY,
          lang,
          category,
          country,
          max,
        },
      })
      .then((response) => {
        res.status(200).json({ result: response.data });
      });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

newsController.search = async (req, res) => {
  let lang = req.params.lang ? req.params.lang : "eng";
  let category = req.query.category ? req.query.category : "general";
  let country = req.query.country ? req.query.country : "in";
  let max = req.query.max ? req.query.max : 20;
  let keyword = req.query.keyword ? req.query.keyword : "";
  let from = req.query.from ? req.query.from : "";
  let to = req.query.to ? req.query.to : "";
  let sortBy = req.query.sortBy ? req.query.sortBy : "";

  if (sortBy != "publishedAt" && sortBy == "relevance" && sortBy != "") {
    return res.status(400).json({ message: "invalid Sorty by requested" });
  }
  try {
    axios
      .get(BASE_URL, {
        params: {
          apikey: process.env.API_KEY,
          q: keyword,
          lang,
          category,
          country,
          max,
          from,
          to,
        },
      })
      .then((response) => {
        res.status(200).json({ result: response.data });
      });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = newsController;
