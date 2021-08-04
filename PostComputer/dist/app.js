"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("./config/config"));
var computer_routes_1 = __importDefault(require("./app/routes/computer.routes"));
var app = express_1.default();
//settings
app.set("port", config_1.default.PORT);
//middlewares
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//routes
app.use("/", computer_routes_1.default);
exports.default = app;
