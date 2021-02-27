"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var Favorite_1 = require("@material-ui/icons/Favorite");
var FavoriteBorder_1 = require("@material-ui/icons/FavoriteBorder");
var useMovies_1 = require("../../hooks/useMovies");
var styles_1 = require("./styles");
var FavoriteToggleButton = function (_a) {
    var movie = _a.movie;
    var classes = styles_1["default"]();
    var _b = useMovies_1.useMovies(), toggleLike = _b.toggleLike, isLiked = _b.isLiked;
    return (React.createElement(core_1.Button, { onClick: function () { return toggleLike(movie.id); }, variant: 'contained', color: 'default', className: classes.button, endIcon: isLiked ? React.createElement(Favorite_1["default"], null) : React.createElement(FavoriteBorder_1["default"], null) }, isLiked ? 'Liked' : 'Like'));
};
exports["default"] = FavoriteToggleButton;
