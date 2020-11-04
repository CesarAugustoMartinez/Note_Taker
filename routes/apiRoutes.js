// DEPENDENCIES
const store = require("../db/store");


// ROUTING

module.exports = function(app) {
   
  // API GET Requests
  app.get("/api/notes", store.getNotes);

  // API POST Requests
  app.post("/api/notes", store.postNotes);

  // API DELETE Requests
  app.delete("/api/notes/:id", store.deleteNotes);

};