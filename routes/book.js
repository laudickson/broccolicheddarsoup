var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next){
  response.send('Express REST API')
});

module.exports = router;
