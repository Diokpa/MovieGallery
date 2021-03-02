"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var useMovies_1 = require("../../hooks/useMovies");
var Movie_1 = require("../../components/Movie/Movie");
var styles_1 = require("./styles");
var FavoriteMovies = function () {
    var classes = styles_1["default"]();
    var _a = useMovies_1.useMovies(), movies = _a.movies, likedMovies = _a.likedMovies, nextPage = _a.nextPage, prevPage = _a.prevPage, movieAction = _a.movieAction;
    return (react_1["default"].createElement("main", { className: classes.content },
        react_1["default"].createElement("div", { className: classes.toolbar }),
        react_1["default"].createElement(core_1.Grid, { container: true, justify: "center", spacing: 4 }, likedMovies === null || likedMovies === void 0 ? void 0 : likedMovies.map(function (movie) {
            return (react_1["default"].createElement(core_1.Grid, { key: movie.id, item: true, xs: 12, sm: 6, md: 4, lg: 3 },
                react_1["default"].createElement(Movie_1["default"], { movie: movie })));
        }))));
};
exports["default"] = FavoriteMovies;
