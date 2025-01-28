function foo(a,b){    if(a === b) {        return true;    }else{        return false;    }}

console.log(foo(NaN,NaN)); //true
console.log(foo(0, -0)); //false