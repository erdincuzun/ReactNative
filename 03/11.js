var list = [ 1, 2, 3 ];
console.log(list);
var tmp = list[0]; 
list[0] = list[2]; 
list[2] = tmp;
console.log(list);

let list1 = [ 1, 2, 3 ]
list1 = [ list1[2], list1[1],list1[0] ] = [ list1[0], list1[1], list1[2]]
console.log(list1)

var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list

console.log(a, b, c, d)

const a1 = [1,2,3,4,5]
const [birinci, ikinci] = a1
console.log(birinci, ikinci)
const [m, n, , , y] = a1
console.log(m, n, y)