
// LOAD DATA

var notesData = require("../db/db.json");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  // API POST Requests
  

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware    
      notesData.push(req.body);
      res.json(req.body);
  });

//   app.delete("/api/notes/:id", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
};