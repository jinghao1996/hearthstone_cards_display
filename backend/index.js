const express = require('express');
const mongoose = require('mongoose');
// const card = require('./card')
const cors = require("cors");


const app = express();

mongoose.connect('mongodb://localhost:27017/test');

const port = 8081;

var corsOption = {
  origin:"*",
  optionsSuccessStatus:200,
};

app.use(cors(corsOption));


const dataSchema = new mongoose.Schema(
  {
  // "_id":{"$oid":"61e126a3fae5888ca39525c5"},
  "artist":String,
  "cardClass":String,
  "collectible":Boolean,
  "cost":Number,
  "dbfId":Number,
  "flavor":String,
  "health":Number,
  "id":String,
  "name":String,
  "rarity":String,
  "referencedTags":[String],
  "set":String,
  "text":String,
  "type":String,
  "rating": Number,
  "people_rated": Number});
  
const dataModel = mongoose.model('card', dataSchema,'cards.collectible');


async function random_search(){
    var user = {name:"there is nothing"};
    try{
      // const user = await card.findById("61e126a3fae5888ca39523e5");
      // console.log(card);
      var user = await dataModel.aggregate([{ $sample: { size: 12 } }]);
        console.log(user);
      return user;}
    catch(error){
        console.log(error);
    }
    return user;
}

async function search_by_id(id){
  var user = {name:"there is nothing"};
  try{
    // const user = await card.findById("61e126a3fae5888ca39523e5");
    // console.log(card);
    var user = await dataModel.where("id").equals(id);
      console.log(user);
    return user;}
  catch(error){
      console.log(error);
  }
  return user;
}

async function search_by_name(name){
  var user = {name:"there is nothing"};
  try{
    // const user = await card.findById("61e126a3fae5888ca39523e5");
    // console.log(card);
    var user = await dataModel.find({"name":{$regex:name}})
      console.log(user);
    return user;}
  catch(error){
      console.log(error);
  }
  return user;
}


app.get('/', (req, res) => {
  // res.send({
  //   Data:"there is nothign to see here again"
  // });
  
  const temp = random_search().then(
    response => {
      // console.log(response);
      // let url = "https://art.hearthstonejson.com/v1/render/latest/enUS/256x/" +id +".png";
      res.send({
        Data:response
      });
    }
  )

  
})

app.get('/card/:id', function(req, res) {
  const temp = search_by_id(req.params.id).then(
    response => {
    res.send({Data:response});

    }
  )
});

app.get('/search/:id', function(req, res) {
  const temp = search_by_name(req.params.id).then(
    response => {
    res.send({Data:response});

    }
  )
});

app.get('/:id/:rating', function(req, res) {
  var new_rating = "nothing";
  var temp = search_by_id(req.params.id).then(response => {

    var new_rating = (response[0].rating * response[0].people_rated + Number(req.params.rating)) / (response[0].people_rated + 1);
    console.log(new_rating);
    dataModel.collection.updateOne( {"id" : req.params.id },
    { $set: { "rating" : new_rating }});
    dataModel.collection.updateOne( {"id" : req.params.id },
    { $inc: {"people_rated":  1} });
    res.send({Data:temp,number:new_rating});
  })


  // 
  // var response = search_by_id(req.params.id);
  // console.log(response);
  // response = {"status":500};
  

    
  
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})