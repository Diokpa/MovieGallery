"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var FavoriteToggleButton_1 = require("../Button/FavoriteToggleButton");
var styles_1 = require("./styles");
var Movie = function (_a) {
    var movie = _a.movie;
    var classes = styles_1["default"]();
    var _b = react_1.useState('front'), imageType = _b[0], setImageType = _b[1];
    var displayDescription = function (e) {
        switch (e.type) {
            case 'mouseenter':
                setImageType('back');
                break;
            case 'mouseleave':
                setImageType('front');
                break;
        }
        ;
    };
    return (React.createElement(core_1.Card, { onMouseLeave: displayDescription, onMouseEnter: displayDescription, className: classes.root },
        imageType === 'front' && React.createElement(core_1.CardMedia, { className: classes.media, image: "http://image.tmdb.org/t/p/w500/" + movie.poster_path, title: movie.title }),
        imageType === 'back' && React.createElement(core_1.CardMedia, { style: {
                margin: '1em'
            } },
            React.createElement(core_1.Typography, { variant: "caption" },
                React.createElement(core_1.Box, { textAlign: "justify" }, movie.overview))),
        React.createElement(core_1.CardContent, null,
            React.createElement("div", { className: classes.cardContent },
                React.createElement(core_1.Typography, { gutterBottom: true, variant: "h5", component: "h2" }, movie.title),
                React.createElement(core_1.Typography, { gutterBottom: true, variant: "h5", component: "h2" },
                    React.createElement(FavoriteToggleButton_1["default"], { movieDetails: movie }))),
            React.createElement(core_1.Typography, { dangerouslySetInnerHTML: { __html: "Rating: " + movie.vote_average + " | " + movie.vote_count + " votes" }, variant: "body2", color: "textSecondary", component: "p" }))));
};
exports["default"] = Movie;
