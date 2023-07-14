const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require('path')
const db = require("./config/connection");
const {authMiddleWare } = require("./utils/auth")

// Import the typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

// Set the port
const PORT = process.env.PORT || 4000;
// Setup Express
const app = express();

// Setup the Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleWare,
});

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/images", express.static(path.join(__dirname,"../client/images")))


// Middleware for Express and Apollo
server.applyMiddleware({ app });

// Connection to MongoDB
// mongoose
//   .once("open", () => console.log("Connected to MongoDB"))
//   .on("error", (error) => console.log("Error connecting to MongoDB:", error));

const startApolloServer = async ()=> {
  await server.start();
  server.applyMiddleware({app});
  db.once("open", ()=>{
    // Start the server
    app.listen(PORT, () => {
      console.log(`API server running on port: ${PORT}`);
      console.log(
        `GraphQL is running on http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  })

}

startApolloServer()

