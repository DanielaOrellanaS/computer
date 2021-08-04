"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    model: String,
    brand: String,
    so: String,
    ram: Number,
    rom: Number
}, {
    timestamps: false,
    versionKey: false
});
exports.default = mongoose_1.model("Computer", schema);
