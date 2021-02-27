"use strict";

exports.__esModule = true;
exports.useHttp = void 0;

var axios_1 = require("axios");

exports.useHttp = function () {
  axios_1["default"].defaults.baseURL = process.env.REACT_APP_API_URL;

  try {
    var getMovie = axios_1["default"].get('movie/popular', {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    }).then;
    return {
      getMovie: getMovie
    };
  } catch (error) {
    throw error;
  }
};