/**
 * Created by navina on 24/5/16.
 */
var t1 = new Date().getTime();
var foo1 = require('./foo');
console.log(new Date().getTime() - t1);

var t2 = new Date().getTime();
var foo2 = require('./foo');
console.log(new Date().getTime() - t2);