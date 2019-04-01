let m = new Map()
m.set("merhaba", 42)
m.set("map", 34)
m.set("sil", 24)
m.set("map", 14)
m.set(124, "deneme")
console.log(m.get("merhaba"))
console.log(m.get("map"))
console.log(m.get("yok"))
m.delete("sil")
for (let [ anahtar, deger ] of m.entries())
    console.log(anahtar + " = " + deger)

//array'a dönüştürme
const a1 = [...m.keys()]
console.log(a1)
const a2 = [...m.values()]
console.log(a2)

let s = new Set()
s.add("merhaba").add("set").add("merhaba") //zincirleme 
s.add("set")
console.log(s.size)
console.log(s.has("merhaba"))
console.log(s.has("bu değer yok!"))
for (let key of s.values()) // insertion order
    console.log(key)

//array'a dönüştürme
const a3 = [...s.keys()]
console.log(a3)
const a4 = [...s.values()]
console.log(a4)

let kume1 = new Set([1,2,3]);
let kume2 = new Set([4,3,2]);
let birlesim = new Set([...kume1, ...kume2]);
let kesisim = new Set([...kume1].filter(x => kume2.has(x)));
let fark = new Set([...kume1].filter(x => !kume2.has(x)));
console.log(birlesim)
console.log(kesisim)
console.log(fark)

