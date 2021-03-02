"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useMovies = void 0;
var react_1 = require("react");
var useHttp_1 = require("./useHttp");
exports.useMovies = function () {
    var get = useHttp_1.useHttp().get;
    var _a = react_1.useState(), movies = _a[0], setMovies = _a[1];
    var _b = react_1.useState([]), likedMovies = _b[0], setLikedMovies = _b[1];
    var _c = react_1.useState(1), page = _c[0], setPage = _c[1];
    var _d = react_1.useState(!false), isLiked = _d[0], setIsLiked = _d[1];
    //let LikedList: IMovie[] = [];
    var route = '/movie/popular/';
    react_1.useEffect(function () {
        var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get(route + "?page=" + page)];
                    case 1:
                        response = _a.sent();
                        setMovies(response.data.results);
                        return [2 /*return*/];
                }
            });
        }); };
        getData();
    }, [get, page]);
    var nextPage = function () {
        setPage(page + 1);
    };
    var prevPage = function () {
        setPage(page !== 0 ? page - 1 : 0);
    };
    var toggleLike = function (movieId) {
        setIsLiked(!isLiked);
        console.log(isLiked);
        var movie = movies === null || movies === void 0 ? void 0 : movies.find(function (x) { return x.id === movieId; });
        var foundMovie = likedMovies === null || likedMovies === void 0 ? void 0 : likedMovies.find(function (x) { return x.id === movieId; });
        if (isLiked) {
            if (!foundMovie) {
                setLikedMovies(function (prevLikedMovies) { return __spreadArrays(prevLikedMovies, [movie]); });
            }
        }
        else {
            setLikedMovies(likedMovies === null || likedMovies === void 0 ? void 0 : likedMovies.filter(function (x) { return x.id !== foundMovie.id; }));
        }
        console.log(likedMovies);
        var movieAction = function (id, action) {
            var movie = movies === null || movies === void 0 ? void 0 : movies.find(function (x) { return x.id === id; });
            var foundMovie = likedMovies === null || likedMovies === void 0 ? void 0 : likedMovies.find(function (x) { return x.id === id; });
            switch (action) {
                case 'like': {
                    if (!foundMovie)
                        likedMovies === null || likedMovies === void 0 ? void 0 : likedMovies.push(movie);
                    setLikedMovies(likedMovies);
                    break;
                }
                case 'unlike': {
                    if (foundMovie)
                        setLikedMovies(likedMovies === null || likedMovies === void 0 ? void 0 : likedMovies.filter(function (x) { return x.id !== foundMovie.id; }));
                    break;
                }
                default:
                    break;
            }
        };
        return {
            movies: movies,
            nextPage: nextPage,
            prevPage: prevPage,
            movieAction: movieAction,
            likedMovies: likedMovies,
            toggleLike: toggleLike,
            isLiked: isLiked
        };
    };
};
