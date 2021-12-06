// declare the array starting with the first 2 values of the fibonacci sequence
let fibonacci = [0,1];
    
function listFibonacci(num) {
// starting at array index 1, and push current index + previous index to the array
    for (let i = 1; i < num; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    return fibonacci
}

console.log(listFibonacci(4));