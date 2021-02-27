"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var styles_js_1 = require("./styles.js");
var Movie = function (_a) {
    var movie = _a.movie;
    var classes = styles_js_1["default"]();
    return (React.createElement(core_1.Card, { className: classes.root },
        React.createElement(core_1.CardMedia, { className: classes.media, image: './default.png', title: movie.title }),
        React.createElement(core_1.CardContent, null,
            React.createElement("div", { className: classes.cardContent },
                React.createElement(core_1.Typography, { gutterBottom: true, variant: "h5", component: "h2" }, movie.title),
                React.createElement(core_1.Typography, { gutterBottom: true, variant: "h5", component: "h2" },
                    "$",
                    movie.title)),
            React.createElement(core_1.Typography, { dangerouslySetInnerHTML: { __html: movie.title }, variant: "body2", color: "textSecondary", component: "p" })),
        React.createElement(core_1.CardActions, { disableSpacing: true, className: classes.cardActions })));
};
exports["default"] = Movie;
