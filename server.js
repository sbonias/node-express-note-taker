// Dependencies
//  requires express and links us to the express library
const express = require("express");

// Express configuration
//  informs node that we are creating an express server
const app = express();

//  sets a port for server to run on and also sets an environmental
//  variable PORT essentially passing a parameter
//  Heroku won't work without the "process.env.PORT" code
const PORT = process.env.PORT || 8080;

// Establishes middleware
//  sets up the express app to handle data parsing
//  if you attempt to access request.body without this, it won't work
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  TODO: define this middleware that allows my html files to display appropriately, weren't displaying properly on localhost prior to adding this in
app.use(express.static("public"));

// Router
//  the below points our server to a series of "route" files
//  these routes give our server a "map" of how to respond when users
//  visit or request data from various URLs
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Listener
//  The below code starts our server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
