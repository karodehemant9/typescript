"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import express from 'express';
//require method is only available in Node environment and not on browser. TS doesn't know where we will execute this code. To let Ts know that there is a require method we use npm install -dev @types/node
//@ provides typescript translation for node packages. So that typescript gets to know what JS code we are writing
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
//@express/node does same thing, provides typescript translation for express node package
app.listen(3000);
