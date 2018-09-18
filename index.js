// 1) Reverse a string
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

    // Testing
    console.log(reverseString("reverse this string"));
    console.assert(reverseString("reverse this string") === "gnirts siht esrever");

    console.log(reverseString("desrever si gnirts siht"));
    console.assert(reverseString("desrever si gnirts siht") === "this string is reversed");

    console.log(reverseString(""));


// 2) Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseStringWords(str) {
    if (str === "") {
        return "";
    } else {
        return str.split(" ").reverse().join(" ");
    }
}

    // Testing
    console.log(reverseStringWords("reverse this string"));
    console.assert(reverseStringWords("reverse this string") === "string this reverse");

    console.log(reverseStringWords("desrever si gnirts siht"));
    console.assert(reverseStringWords("desrever si gnirts siht") === "siht gnirts si desrever");

    console.log(reverseStringWords(""));


// 3) Find the minimum value in an array
let arrayValues = [2, 5, 7, 5, 3, 10, 9, 11, 6, 3];
let arrayValues2 = [-4, 5, 7, 15, 3, 10, 9, 11, 6, 3];

    // Testing
    const minValue = array => Math.min(...array);
    // function minValue (array) {
    //     return Math.min(...array);
    // }
    console.log("min: ", minValue(arrayValues));
    console.assert(minValue(arrayValues) === 2);

    console.log("min: ", minValue(arrayValues2));
    console.assert(minValue(arrayValues2) === -4);

    console.log(reverseStringWords(""));

// function minValue() {
//     let sorted = arrayValues.slice().sort(function(a, b) {
//         return a - b;
//     });
    
//     let min = sorted[0];
//     console.log("min: ", min);
    
// }
// minValue();

// function minValue2() {
//     let sorted = arrayValues2.slice().sort(function(a, b) {
//         return a - b;
//     });
    
//     let min = sorted[0];
//     console.log("min: ", min);
// }
// minValue2();


// 4) Find the maximum value in an array
    // Testing
    const maxValue = array => Math.max(...array);
    // function minValue (array) {
    //     return Math.min(...array);
    // }
    console.log("max: ", maxValue(arrayValues));
    console.assert(maxValue(arrayValues) === 11);

    console.log("max: ", maxValue(arrayValues2));
    console.assert(maxValue(arrayValues2) === 15);

    console.log(reverseStringWords(""));

// function maxValue() {
//     let sorted = arrayValues.slice().sort(function(a, b) {
//         return a - b;
//     });
    
//     let max = sorted[arrayValues.length - 1];
//     console.log("max: ", max);
// }
// maxValue();

// function maxValue2() {
//     let sorted = arrayValues2.slice().sort(function(a, b) {
//         return a - b;
//     });
    
//     let max = sorted[arrayValues2.length - 1];
//     console.log("max: ", max);
// }
// maxValue2();

// 5) Calculate a remainder (given a numerator and denominator)
function remainder(numerator, denominator) {
    return numerator % denominator;
}

    // Testing
    console.log("remainder(10, 2): ", remainder(10, 2));
    console.assert(remainder(10, 2) === 0)

    console.log("remainder(14, 3): ", remainder(14, 3));
    console.assert(remainder(14, 3) === 2)

    console.log(reverseStringWords(""));


// 6) Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
let a = [1, 3, 5, 3, 7, 3, 1, 1, 5];
let b = [12, 3, 5, 3, 7, 13, 1, 1, 5, 2, 2, 7, 5];

function distinct(value, index, self) {
    return self.indexOf(value) === index;
}

    // Testing
    let result1 = a.filter(distinct);
    console.log(result1);
    console.assert(result1 = [1, 3, 5, 7]);

    let result2 = b.filter(distinct);
    console.log(result2);
    console.assert(result2 = [12, 3, 5, 7, 13, 1, 2]);

    console.log("");

// 7) Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
let counts = {}, i, values;
let counts2 = {}, i2, values2;
function distinct(value, index, self) {
    return self.indexOf(value) === index;
}

    // Testing
    for (i = 0; i < a.length; i++) {
        values = a[i];
        if (typeof counts[values] === "undefined") {
            counts[values] = 1;
        } else {
            counts[values]++;
        }
    }
    console.log(counts);
    console.assert(counts = {1: 3, 3: 3, 5: 2, 7: 1});

    
    for (i2 = 0; i2 < b.length; i2++) {
        values2 = b[i2];
        if (typeof counts2[values2] === "undefined") {
            counts2[values2] = 1;
        } else {
            counts2[values2]++;
        }
    }
    console.log(counts2);
    console.assert(counts2 = {1: 5, 2: 2, 3: 5, 5: 5, 7: 3, 12: 1, 13: 1});

    console.log("");


// 8) Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
let pairs = {
    a: 1,
    b: 7,
    c: 3,
    d: 14
}
function algebra(a, b, c, d) {
    return pairs.a + pairs.b + pairs.c - pairs.d;
}
console.log(algebra(pairs));
console.assert(algebra(pairs) === -3);

let pairs2 = {
    a: 4,
    b: 2,
    c: 3,
    d: 6
}
function algebra2(a, b, c, d) {
    return pairs2.a + pairs2.b + pairs2.c - pairs2.d;
}
console.log(algebra2(pairs2));
console.assert(algebra2(pairs2) === 3);