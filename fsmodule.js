/**
 * Created by navina on 24/5/16.
 */
var fs=require('fs');
//fs.writeFileSync('file1','file1 created');

console.log(fs.readFileSync('file1').toString());
fs.unlinkSync('hai');//file hai deled