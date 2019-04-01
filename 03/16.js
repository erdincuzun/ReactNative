let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'anahtar yok';
    }
};

let nesne = {
    deg1: 'ES6',
    deg2: 'Proxy'
}

let p = new Proxy(nesne, handler)

console.log(p.deg1)
console.log(p.deg2)
console.log(p.yok)