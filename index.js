const mysql=require('mysql');
const express=require('express');
const bodyparser = require('body-parser');

var app=express();
app.use(bodyparser.json());
var con=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"aparna",
    database:"biodata"
});

con.connect(function(err){
    if(err)
     console.log("connection falied");
    console.log("Connected Successfully");
});
app.listen(3000,()=>console.log('express server is running in port no:3000'));
app.get('/person',(req,res)=>{
    con.query('SELECT * FROM person',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);})


    });
    //get an person
   
app.get('/person/:id',(req,res)=>{
 con.query('SELECT * FROM person where  personid=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
       })
});
//delete an person 
app.delete('/person/:id',(req,res)=>{
    con.query('delete FROM person where  personid=2',[req.params.id],(err,rows,fields)=>{
           if(!err)
           res.send('deleted succesfully');
           else
           console.log(err);
          })
   });