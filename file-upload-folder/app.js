const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/upload", function (request, response, next) {
  next();
});

app.get('/api/upload', (req, res) => {
  res.json({ 'message': 'hello' });
});

app.post('/api/upload', multipartMiddleware, (req, res) => {
  res.json({ 'message': req.files });
});

app.use(function (err, req, res, next) {
  res.json({ 'error': err.message })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var fs = require('fs'); //File System
var usersFilePath = '../file-upload-folder/uploads/'; 
fs.readdir(usersFilePath, function (err, files) {
  if (err) { throw err; }
  var users = getNewestFile(files, usersFilePath);
  let rawdata = fs.readFileSync('../file-upload-folder/uploads/' + users);
  const newJSON = JSON.parse(rawdata);
  console.log(newJSON);
});

// Return only base file name without dir
function getNewestFile(files, path) {
  var out = [];
  files.forEach(function (file) {
    var stats = fs.statSync(path + "/" + file);
    if (stats.isFile()) {
      out.push({ "file": file, "mtime": stats.mtime.getTime() });
    }
  });
  out.sort(function (a, b) {
    return b.mtime - a.mtime;
  })
  return (out.length > 0) ? out[0].file : "";
}

