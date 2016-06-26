/**
 * Created by navina on 23/5/16.
 */
var a=[2,5,1,7,4,6,3];
for(i=0;i<7;i++)
{
    for(j=6;j>=0;j--)
    {
        if(a[j]>a[j+1])
        {
            temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
console.log(a);