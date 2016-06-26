/**
 * Created by navina on 23/5/16.
 */
var i=5;
for(s=5;s>0;s--)
{

    var a=[];
    var b=[];
    for(j=5;j>i;j--)
    {
        process.stdout.write(" ");
        //b.push(" ")
    }
    //console.log(b);
    for(r=1;r<=(2*s-1);r++)
    {
        process.stdout.write("*");
        a.push("*")

    }
    //console.log(a);
    i--;
    console.log("\n");
}
