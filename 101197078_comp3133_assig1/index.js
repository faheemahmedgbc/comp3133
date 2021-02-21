const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./schema');
const Resolvers = require('./resolvers');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');


var dbUrl="mongodb+srv://faheem:faheem@m0.jwrmy.mongodb.net/assignment1Faheem?retryWrites=true&w=majority"

const connect = mongoose.connect(dbUrl, 
{ 
      useNewUrlParser: true,
      useUnifiedTopology: true
});

connect.then((db) => {
      console.log('Connected to mongoDB');
}, (err) => {
      console.log(err);
});

const server = new ApolloServer({
      typeDefs: TypeDefs.typeDefs,
      resolvers: Resolvers.resolvers
});


const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port:4002}, () =>
console.log(` Server location: http://localhost:4002${server.graphqlPath}`));