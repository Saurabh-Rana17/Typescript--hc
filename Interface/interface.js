var student = {
    name: "saurabh",
    email: "ds",
    roll: 4,
};
function addThree(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
console.log(addThree(1, 4));
console.log(addThree(1, 4, 3));
