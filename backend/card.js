const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
    // "_id":{"$oid":"61e126a3fae5888ca39525c5"},
    "artist":String,
    "cardClass":String,
    "collectible":Boolean,
    "cost":Number,
    "dbfId":Number,
    "flavor":String,
    "id":String,
    "name":String,
    "rarity":String,
    "referencedTags":[String],
    "set":String,
    "text":String,
    "type":String});
    
const dataModel = mongoose.model('card', dataSchema,'cards.collectible');
module.exports = dataModel;