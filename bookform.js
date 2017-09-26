const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'bookform.html'));
})
app.post('/', function(req, res) {
  console.log('Got something');
  console.log(req);
  fs.writeFile(path.join(__dirname, 'libary.json'), JSON.stringify(req.fields), function(error) {
    if (error ===' ') {
      console.log("error on the write");
    } else {
        res.send("Thanks for the form")
    }
  })
})
app.listen(3000, function() {
  console.log('Server has started')
});
