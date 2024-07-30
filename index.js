const path = require("path");
const express = require('express')
const app = express()
const port = 9000

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data in request body
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mainPage.html'));
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(` App listening on port ${port} inside the container and in port 7000 in the localhost`)
  })
}

module.exports = app;
