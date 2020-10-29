#!/usr/bin/env node

const express = require('express');
const app = express();

//configurations:
const port=3001;
 
app.get('/list', (req, res) => {
  let l={"items":
	  [...Array(100).keys()].map(i =>i).reduce((a,i)=>a.concat({"name":"bicycle "+i,"id":i}) ,[])
  };
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200).json(l);
  res.end();

});
 
app.listen(port, () =>
  console.log(`Our backEnd services are runing on port ${port}!`),
);
