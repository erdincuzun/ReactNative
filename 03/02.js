//çok parametreli 
// ES5
var carpES5 = function(x, y) {
    return x * y;
};
console.log(carpES5(5, 6))
  
// ES6
const carpES6 = (x, y) => { return x * y };
console.log(carpES6(5, 6))

//ES6, function tek satırsa paranteze gerek yok.
const carpES61 = (x, y) => x * y;
console.log(carpES61(5, 6))

//tek parametreli
//ES5
var phraseBolEs5 = function phraseBol(phrase) {
    return phrase.split(' ');
  };
console.log(phraseBolEs5("ES5 function açılmadan function olmaz"));
//ES6
const phraseBolEs6 = phrase => phrase.split(" ");
console.log(phraseBolEs6("ES6 tek satırda fonksiyon"));

//parametresiz
//ES5
var LogEs5 = function docLog() {
    console.log("Merhaba ES5");
};
LogEs5();

//ES6
var LogEs6 = () => { console.log("Merhaba ES6"); };
LogEs6();


//Nesne değeri döndürme
//ES5
var nesneEs5 = function setNesne(id, name) {
    return {
      id: id,
      name: name
    };
  };
  console.log(nesneEs5(2009, "ES5")); 
  
  // ES6
  let nesneEs6 = (id, name) => ({ id: id, name: name }); 
  console.log(nesneEs6(2015, "ES6")); 

  //"this" problemi
  function kisi1() {
    this.yas = 0;
    setInterval(function buyu() {
      this.yas++; //ne yazık ki bu işlem kisi fonksiyonuna işlemez!
      console.log("kisi1: " + this.yas);
    }, 1000);
  }
  var p1 = new kisi1();
  
  //Çözüm ES5
  function kisi2() {
    var that = this;
    that.yas = 0;
  
    setInterval(function buyu() {
      that.yas++; //ne yazık ki bu işlem kisi fonksiyonuna işlemez!
      console.log("kisi2: " + that.yas);
    }, 1000);
  }
  var p2 = new kisi2();

  //ES6 bu problem çözümüştür
  function kisi3(){
    this.yas = 0;
  
    setInterval(() => {
      this.yas++; // kisi2 nesnesine atıfta bulunur.
      console.log("kisi3: " + this.yas);
    }, 1000);
  }
  var p3 = new kisi3();