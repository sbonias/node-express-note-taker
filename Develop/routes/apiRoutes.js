// - The following API routes should be created:
//   - GET `/api/notes` - Should read the `db.json` file and
//     return all saved notes as JSON.
//   - POST `/api/notes` - Should receive a new note to save on the request body
//     , add it to the `db.json` file, and then return the new note to the client.
//   - DELETE `/api/notes/:id` - Should receive a query parameter containing the
//     id of a note to delete. This means you'll need to find a way to give each
//     note a unique `id` when it's saved. In order to delete a note, you'll need
//     to read all notes from the `db.json` file, remove the note with the given
//     `id` property, and then rewrite the notes to the `db.json` file.

// Dependencies
//  including fs library for use of readFile and writeFile modules
const fs = require("fs");
//  we need to include the "path" package to get the correct file path for our html
const path = require("path");
//  referencing .json file for use in this file
const notes = require("../db/db.json");

// we need to export our router so that it can be included in our server.js
module.exports = (app) => {
  // API GET Request
  // Below code handles when users "visit" a page.
  // In the below case when the user visits the defined link they are shown all notes in JSON format
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  // API POST Request
  // this allows user to add messages that get added to json file within the correct format
  // TODOS: need to figure out how to assign a unique id to each new note - DONE
  // Added new property of "id" to db.json file in order to make this work
  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let otherId = notes[notes.length - 1]["id"];
    let brandNewId = otherId + 1;
    newNote["id"] = brandNewId;
    notes.push(newNote);
    console.log(newNote);
    res.json(newNote);
    // use fs.writeFile to post newNote to db.json file
    // had to use writeFileSync due to callback error
    // https://stackoverflow.com/questions/51150956/how-to-fix-this-error-typeerror-err-invalid-callback-callback-must-be-a-funct/51151244
    writeFile();
  });

  // API DELETE Request
  // this allows user to delete messages that get added to json file within the correct format
  // TODOS: need to figure out how to assign a unique id to each new note
  app.delete("/api/notes", (req, res) => {});
};

const writeFile = () => {
  fs.writeFileSync("./db/db.json", JSON.stringify(notes)),
    function (err) {
      if (err) {
        throw err;
      }
      console.log("Successfully wrote to db.json file!");
    };
};
