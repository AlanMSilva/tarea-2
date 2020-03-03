var resultado;
function serieinf(){
var x=2,s=0,s2=0,frac=0,suma=0;
    for(var i = 1; i<=3;i++)
    { 
        s=(x-1)/x;
        frac=1/i;
        suma=Math.pow(s,i)
        s2+=frac*suma;
    }
    return s2;
}
console.log(serieinf(resultado));