let a = "global";

function print1() {
    console.log(a);
}

function print2() {
    let a = "local";
    print1();
}

print1();
print2();