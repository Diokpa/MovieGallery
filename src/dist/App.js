"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
var useMovies_1 = require("./hooks/useMovies");
var Header_1 = require("./components/Header/Header");
var Home_1 = require("./views/Home/Home");
var FavoriteMovies_1 = require("./views/FavoriteMovies/FavoriteMovies");
var App = function () {
    var _a = useMovies_1.useMovies(), movies = _a.movies, likedMovies = _a.likedMovies, nextPage = _a.nextPage, prevPage = _a.prevPage, movieAction = _a.movieAction;
    console.log(movies);
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", { style: { display: 'flex' } },
            react_1["default"].createElement(core_1.CssBaseline, null),
            react_1["default"].createElement(Header_1.Header, null),
            react_1["default"].createElement(react_toastify_1.ToastContainer, { position: 'bottom-right' }),
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                    react_1["default"].createElement(Home_1["default"], null)),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/liked" },
                    react_1["default"].createElement(FavoriteMovies_1["default"], null))))));
};
exports["default"] = App;
