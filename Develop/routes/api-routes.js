
// ROUTING
const fs = require("fs");
const { fromString } = require('uuidv4');
const notes = require('../db/db.json')

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', function (req, res) {
    console.log('route hit', notes)
    res.json(notes)
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post('/api/notes', function (req, res) {
    console.log
    console.log('note', req.body)
    var newNote = {
      tilte: req.body.title,
      text: req.body.text,
      id: uuidv4()
    }
    fs.readFile(__dirname + '../db/db.json', 'UTF8', function (error, notes) {
      if (error) {
        return console.log(error)
      }
      notes = JSON.parse(notes)
      var activeNote = notes.concat(newNote)
      fs.writeFile(__dirname + '../db/db.json', JSON.stringify(activeNote), function (error, data) {
        if (error) {
          return console.log(error)
        }
        console.log(activeNote)
        res.json(activeNote)
      })

    })

    //push newNote obj into the array
    //write new array into db.json file


  });


};
