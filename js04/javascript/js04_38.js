function sum(...args) {
    let total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1))
    return total;
}
console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    let total = a + b;
    for (let i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));