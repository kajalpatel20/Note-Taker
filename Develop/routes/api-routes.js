
// ROUTING
const notes = require('../db/db.json')

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', function(req, res){
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

  app.post('/api/notes', function(req, res){
        console.log('note', req.body)
        var newNote = {
            tilte: req.body.title,
            text: req.body.text,
            id: uuidv4()
        }
//read db.json file; get an array back.
//push newNote obj into the array
//write new array into db.json file


  });


};
