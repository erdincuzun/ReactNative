const topla = function(sayi1 = 10, sayi2 = 20) 
{
    return sayi1 + sayi2 
}
console.log(topla(20, 40));
console.log(topla(20));
console.log(topla(sayi2 = 40));
console.log(topla());

const cikar = (sayi1, sayi2 = 20) => sayi1 - sayi2
console.log(cikar(20, 40));
console.log(cikar(20));
console.log(cikar(sayi2 = 40));
console.log(cikar());
