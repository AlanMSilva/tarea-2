function coseno(){
    let x=1,y=2,s=y,l=1;
    for(i = 1; i<=7;i++)
    {
        x*=i;
        y=Math.pow(y,i);
        if(i%2==0)
        {
            if(l==1) 
            {
                s-=y/x;
                l--;
            }
            else
            {
                s+=y/x;
                l++;
            }           
        }
        y=2;
    }
    return s-1;
}
var resultado;
console.log(coseno(resultado));



