/**
 * Created by fanbaolin on 15/10/27.
 * companyList
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var companyListSchema = new Schema({
    name: {type: String, default: 'unknow user'},//login account
    password: {type: String},
    companyName: {type: String},
    mapCollection: {type: String},// maping the company Collection
    departArray: []
});
companyList = mongoose.model('userList', companyListSchema);

module.exports = companyList;
