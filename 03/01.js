//var: function-scoped
//let: block-scoped
//ES5
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i); //çıktı: 3

//ES6: let is block-scoped
for (let j = 0; j < 3; j++) {
    console.log(j);
}
//console.log(j) //ReferenceError: j is not defined

//ES5: var is function-based
function dongu_es5() {
    var m = 0
    for (m = 0; m < 3; m++) {
        console.log(m);
    }
}

dongu_es5();
//console.log(m); //ReferenceError: m is not defined

//  ES5 function and scopes
(function () {
    var foo = function () { return 1; }
    console.log(foo());
    (function () {
        var foo = function () { return 2; }
        console.log(foo());
    })();
    console.log(foo());
})();

// ES6 functions
{
    function foo () { return 2 } 
    //const foo = () => 1; //yukarıdaki ile aynı, arrow bölümünde anlatılacak

    console.log(foo());
    {
        function foo () { return 2 }
        console.log(foo());
    }
    console.log(foo());
}

const deg = 1903;
console.log(deg);
//deg = 1 //TypeError: Assignment to constant variable.