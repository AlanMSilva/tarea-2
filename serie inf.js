var x=2,s=0,s2=0,frac=0,suma;
for(var i = 2; i<=6;i++)
{ 
    s=x-1/x;
    frac=1/i;
    suma=Math.pow(s,i)
    s2+=frac*s;
}
console.log(s2)