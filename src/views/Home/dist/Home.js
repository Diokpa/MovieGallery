"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var useMovies_1 = require("../../hooks/useMovies");
var Home = function () {
    var _a = useMovies_1.useMovies(), movies = _a.movies, nextPage = _a.nextPage, prevPage = _a.prevPage, movieAction = _a.movieAction;
    return (react_1["default"].createElement("div", null, movies === null || movies === void 0 ? void 0 : movies.map(function (movie) {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null, movie.title),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(core_1.Button, { onClick: function () { return movieAction(movie.id, 'like'); } }, "like"))));
    })));
};
exports["default"] = Home;
