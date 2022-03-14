const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");


dotenv.config();

const {typeDefs, resolvers} = require('./schemas');

const db = requre('./config/connection');

const PORT = process.env.PORT || 3001;
const app  = express();

const server = new ApollowServer({
    typeDefs,
    resolvers,

    context:({req}) => {(req)}
});

server.applyMiddleware({ app });


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Aallow-Headers", "Origin, X- Requested-With, Content = Type, Acccept");
    next();
});




