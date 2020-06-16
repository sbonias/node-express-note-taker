//  The following HTML routes should be created:
//    GET `/notes` - Should return the `notes.html` file.
//    GET `*` - Should return the `index.html` file

// Dependencies
// We need to include the "path" package to get the correct file path for our html
const path = require("path");

// we need to export our router so that it can be included in our server.js
module.exports = (app) => {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  //  TODO: When below code is active it doesn't allow for an apiRoute to execute ????
  // If no matching route is found default to home
  // app.get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};
