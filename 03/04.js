function* ciftsayilar() {
    let sayi = 0;
    while(true)
        yield sayi += 2;
}

const gen = ciftsayilar(); // "Generator { }"

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
  
  
  
  
  
  
  
  
  
  
  