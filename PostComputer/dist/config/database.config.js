"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("./config"));
var URL = "mongodb+srv://" + config_1.default.MONGO_USER + ":" + config_1.default.MONGO_PASSWORD + "@" + config_1.default.MONGO_CLUSTER + "/" + config_1.default.MONGO_NAME + "?retryWrites=true&w=majority";
mongoose_1.default.connect(URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function (db) { return console.log("Mongo connection: " + db.connection.name); })
    .catch(function (error) { return console.log(error); });
