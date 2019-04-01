class kisi {
    constructor(ad) {
      this.ad = ad;
    }
  
    merhaba() {
      return 'Merhaba ben ' + this.ad + '.';
    }
}
  
class futbolcu extends kisi {
    merhaba() {
      return super.merhaba() + ' Ben futbolcu.';
    }
}

let messi = new futbolcu('Messi');
console.log(messi.merhaba());

class kisi2 {
    constructor(ad) {
      this.ad = ad;
      this.yas = 20;
    }
  
    merhaba() {
      return 'Merhaba ben ' + this.ad + '.';
    }

    get bilgi(){
        return this.ad + " " +this.yas;
    }

    set yasi(yas){
        if(yas<1)
            this.yas = 1;
        else
            this.yas = yas;
    }
}
  
class futbolcu2 extends kisi2 {
    merhaba() {
      return super.merhaba() + ' Ben futbolcu.';
    }
}

let messi2 = new futbolcu2('Messi');
console.log(messi2.bilgi);
messi2.yasi = 21;
console.log(messi2.bilgi);


class sayi{
    constructor(s) {
        this.sayi = s;
    }

    static buyukmu(sayi1, sayi2) {
        return sayi1.sayi > sayi2.sayi ? true : false
      }
}

const s1 = new sayi(10)
console.log(s1.sayi)
const s2 = new sayi(20)
console.log(s2.sayi)
const s3 = new sayi(10)
console.log(s3.sayi)
console.log(sayi.buyukmu(s1, s2))
console.log(sayi.buyukmu(s2, s3))
console.log(sayi.buyukmu(s1, s3))