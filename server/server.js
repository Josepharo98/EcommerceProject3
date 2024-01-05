const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const userController = require('./controllers/userController');

const app = express();

// Other server configuration and middleware

app.post('/register', userController.register);
app.post('/login', userController.login);
app.post('/authenticate', userController.authenticate);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Connect to your MongoDB database
//replace 'mongodb://localhost:27017/mydatabase' with 
//the appropriate MongoDB connection string for your database.

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

server.applyMiddleware({ app });

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});