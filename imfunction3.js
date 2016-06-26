/**
 * Created by navina on 21/5/16.
 */
var foo = 123;

    (function () {
        var foo = 456;
        console.log(foo);
    })();

console.log(foo); 