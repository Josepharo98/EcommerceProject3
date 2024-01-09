const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const userController = require('./controllers/userController');

const app = express();

// Other server configuration and middleware

app.post('/register', userController.register);
app.post('/login', userController.login);
app.post('/authenticate', userController.authenticate);

// Connect to your MongoDB database
// Replace 'mongodb://localhost:27017/mydatabase' with
// the appropriate MongoDB connection string for your database.

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    // You can add any additional context here, such as the database connection
    return {
      // Add your database connection here
    };
  },
});

server.start().then(() => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});