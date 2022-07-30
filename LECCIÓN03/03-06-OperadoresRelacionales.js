// Operaciones Relacionales
let a= 3, b=2, c="3", d=3;

//
//  <
//

// 3 < 2    -> false
let z = a < b;
console.log(z);

// 2 < 3    -> true
z = b < a;
console.log(z);

// "3" < 3    -> false
z = c < a;
console.log(z);

//
//  >
//

// 3 > 2    -> true
z = a > b;
console.log(z);

// 2 > 3    -> false
z = b > a;
console.log(z);

// 3 > "3"    -> false
z = a > c;
console.log(z);

//
//  <=
//

// 3 <= 2    -> false
z = a <= b;
console.log(z);

// 2 <= 3    -> true
z = b <= a;
console.log(z);

// "3" <= 3    -> true
z = c <= a;
console.log(z);

//
//  >=
//

// 3 >= 2    -> true
z = a >= b;
console.log(z);

// 2 >= 3    -> false
z = b >= a;
console.log(z);

// 3 >= "3"    -> true
z = a >= c;
console.log(z);