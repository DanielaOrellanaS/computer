"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_NAME: process.env.MONGO_NAME,
    PORT: process.env.PORT || 3000
};
