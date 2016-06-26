/**
 * Created by navina on 23/5/16.
 */
var a=[2,5,1,7,4,6,9];
/*for(i=0;i<7;i++)
{
    min=i;
    for(j=i+1;j<7;j++)
    {
        if(a[min]>a[j])
        {
            min=j
        }

    }
    if(min!=i)
    {
        temp=a[i];
        a[i]=a[min];
        a[min]=temp;

    }

}*/
 for(i=0;i<6;i++){
     for(j=i+1;j<7;j++){
         if(a[i]>a[j]){
             temp=a[i];
             a[i]=a[j];
             a[j]=temp;
         }
     }
 }
console.log(a);