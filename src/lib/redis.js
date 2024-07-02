"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioredis_1 = require("ioredis");
require("dotenv/config");
var redisUrl = process.env.KV_URL;
var token = process.env.KV_REST_API_TOKEN;
var redis = new ioredis_1.default(redisUrl, {
    password: token,
    tls: {}
});
exports.default = redis;
