// DEPENDENCIES
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// LOAD DATA

var notesData = require("../db/db.json");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/notes", function(req, res) {
    res.json(notesData); // Display all notes
  });

  // API POST Requests
  // Creating a new note and saving into db.json file
  app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    let lastId;
    if (notesData.length===0){ // Condition to control if the db.json is empty.
      lastId=0;
    }else {
      lastId = notesData[notesData.length-1]["id"];
    }
    newNote["id"]=lastId + 1;
    notesData.push(newNote);
    writeFileAsync("./db/db.json", JSON.stringify(notesData)).then(function() {
        console.log("db.json has been updated!");
    });
    res.json(notesData);

  });

  //Deleting a note selected by id
  app.delete("/api/notes/:id", function(req, res) {
    const id = parseInt(req.params.id);

    for (let i=0; i < notesData.length; i++){
        if (id === notesData[i].id) { // Finding the note to be deleted.
            notesData.splice(i,1);
            let newContent = JSON.stringify(notesData,null,2); 
            writeFileAsync("./db/db.json", newContent).then(function() {
            console.log ("Note has been deleted!");
            });
        }
    }
    res.json(notesData);
  });


};