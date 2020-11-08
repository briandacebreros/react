#!/usr/bin/env node

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uniqid = require('uniqid');

//configurations:
const port=4001;

const items=[...Array(100).keys()].reduce((a,i)=>{
	a[i]={"name":"bicycle "+i,"id":i}
	return a;
	} ,{}
);
 
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200).json({"how it works":"list,edit,delete or create items",});
  res.end();
});

app.get('/items/:id', (req, res) => {
  let { id } = req.params;
  console.log("body and params",req.body,req.params);
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200).json(items[id]);
  res.end();
});

app.get('/items', (req, res) => {
  console.log("body and params",req.body,req.params);
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200).json(items);
  res.end();
});

app.put('/items/:id', (req, res) => {
  let { id } = req.params;
  console.log("body and params",req.body,req.params);
  items[id]={...items[id],...req.body,id:id};
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200).json(items);
  res.end();
});

app.post('/items', (req, res) => {
  let uid=uniqid();
  items[uid]={...req.body,id:uid};
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200).json({"result":"OK",id:uid});
  res.end();
});

app.delete('/items/:id', (req, res) => {
  let { id } = req.params;
  delete items[id];
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200).json({"result":"OK"});
  res.end();
});

 
app.listen(port, () =>
  console.log(`Our backEnd services are runing on port ${port}!`),
);
