/**
 * Created by navina on 24/5/16.
 */
var os=require('os');
//var gigabyte=math.power(1024,3);
var gigabyte=1/(1024*1024*1024);
console.log("this computer has",os.cpus().length);
console.log("total memory is",os.totalmem()*gigabyte);
console.log("Free memmory is",os.freemem()*gigabyte);
