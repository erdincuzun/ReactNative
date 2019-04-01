const params = [ "merhaba", true, 7 ]
const diger = [ 1, 2, ...params ]

console.log(params)
console.log(diger)

function f (x, y, ...a) {
    return (x + y) * a.length
}

console.log(f(1, 2, ...diger))

const str = "Merhaba"
const chars = [ ...str ]
console.log(str)
console.log(chars)