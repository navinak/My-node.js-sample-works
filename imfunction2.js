/**
 * Created by navina on 21/5/16.
 */
var a='abc';
console.log(a);
    (
        function hai() {
            a='123';
            //var a=123
            console.log(a);

        }
    )();

console.log(a);//local and global variable