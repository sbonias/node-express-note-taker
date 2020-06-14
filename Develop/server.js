// Dependencies
//  requires express and links us to the express library
var express = require("express");

// Express configuration
//  informs node that we are creating an express server
var app = express();

//  sets a port for server to run on and also sets an environmental
//  variable PORT essentially passing a parameter
//  Heroku won't work without the "process.env.PORT" code
var PORT = process.env.PORT || 8080;

// Establishes middleware
//  sets up the express app to handle data parsing
//  if you attempt to access request.body without this, it won't work
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
//  the below points our server to a series of "route" files
//  these routes give our server a "map" of how to respond when users
//  visit or request data from various URLs
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
//  The below code starts our server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
