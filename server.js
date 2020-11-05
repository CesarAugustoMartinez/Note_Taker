var express = require("express");
// Tells node that we are creating an "express" server
var app = express();
var path = require("path");
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3030

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// What folder the browser can see
app.use(express.static(path.join(__dirname,"./public")));


// ROUTER
// The below points our server to a series of "route" files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
