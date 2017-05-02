var express = require('express');

// Create our app

var app = express();

app.use(express.static('public'));
app.listen(3000, function () {
  console.log('its running on port 3000')
})


// Heroku setup
// const PORT = process.evn.PORT || 3000;
//
// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect('http://'+ req.hostname + req.url);
//   } else {
//     next();
//   }
// });
//
// app.use(express.static('public'));
//
// app.listen(PORT, function () {
//   console.log('its running on port' + PORT)
// });
