/// create a functiom that takes a s string and returns it backwards
function reverseString(str) {
    return str.split("").reverse().join("");
}

// return in terminal with node test.js
console.log(reverseString("hello"));
