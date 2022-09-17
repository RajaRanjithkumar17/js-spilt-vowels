//hoiw to separate vowels in string in js?
let str = "Hello World";

let res = str.match(/[aeiou]/ig).join("");
console.log(res);

let res2 = str.match(/[^aeiou]/ig).join("");
console.log(res2);


