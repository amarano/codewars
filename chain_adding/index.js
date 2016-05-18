function add(n){
 var f = function(x){
     return add(n + x);
 }
 
 f.valueOf = function() {
     return n;
 }
 return f;
}

console.log(add(1));
console.log(add(1)(2));
console.log(add(1)(2)(3));