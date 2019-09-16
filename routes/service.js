var express = require('express');
var router = express.Router();
var fs = require("fs"); 
var path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var obj={
        'table':[]
       };
   
   for (i=0; i <3 ; i++){
          obj.table.push({"id":i,"square":i*i});
   }
   fs.writeFile('./public/data/data.json', JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.send('respond with a resource');
});

module.exports = router;
