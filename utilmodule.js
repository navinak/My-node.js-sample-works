/**
 * Created by navina on 24/5/16.
 */
var util=require('util');
util.log('sample message');
var name="anu";
var money=25;
var ab=[];

console.log(util.format('%s has %d dollars', name, money));
console.log(util.isArray(ab));
console.log(util.isArray({}));
console.log(util.isDate(new Date()));
