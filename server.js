const express = require('express')
const app = express();

app.use("/squad/", require("./routes/squadRoute"));

app.listen(3001, function() {
    console.log("Server is running on port 3001")
})