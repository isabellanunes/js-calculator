const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const clear = document.getElementById('clear');

const output = document.getElementById('output');

one.addEventListener('click', () => {
    output.value += 1;
})

two.addEventListener('click', () => {
    output.value += 2;
})

three.addEventListener('click', () => {
    output.value += 3;
})

four.addEventListener('click', () => {
    output.value += 4;
})

five.addEventListener('click', () => {
    output.value += 5;
})

six.addEventListener('click', () => {
    output.value += 6;
})

seven.addEventListener('click', () => {
    output.value += 7;
})

eight.addEventListener('click', () => {
    output.value += 8;
})

nine.addEventListener('click', () => {
    output.value += 9;
})

zero.addEventListener('click', () => {
    output.value += 0;
})

clear.addEventListener('click', () => {
    output.value = '';
})