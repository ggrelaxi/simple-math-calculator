let result = '';
let user_integer = '';
// блоки с цифрами

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const sever = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

// операции

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const division = document.getElementById('division');
const multi = document.getElementById('multi');

const dot = document.getElementById('dot');
const del = document.getElementById('delete');
const result_button = document.getElementById('result');

// События нажатия по цифрам

one.addEventListener('click', function() {
    user_integer += '1';
    document.getElementById('user__integer').value = user_integer;
});

two.addEventListener('click', function() {
    user_integer += '2';
    document.getElementById('user__integer').value = user_integer;
});

three.addEventListener('click', function() {
    user_integer += '3';
    document.getElementById('user__integer').value = user_integer;
});

four.addEventListener('click', function() {
    user_integer += '4';
    document.getElementById('user__integer').value = user_integer;
});

five.addEventListener('click', function() {
    user_integer += '5';
    document.getElementById('user__integer').value = user_integer;
});

six.addEventListener('click', function() {
    user_integer += '6';
    document.getElementById('user__integer').value = user_integer;
});

seven.addEventListener('click', function() {
    user_integer += '7';
    document.getElementById('user__integer').value = user_integer;
});

eight.addEventListener('click', function() {
    user_integer += '8';
    document.getElementById('user__integer').value = user_integer;
});

nine.addEventListener('click', function() {
    user_integer += '9';
    document.getElementById('user__integer').value = user_integer;
});

zero.addEventListener('click', function() {
    user_integer += '0';
    document.getElementById('user__integer').value = user_integer;
});

dot.addEventListener('click', function() {
    user_integer += '.';
    document.getElementById('user__integer').value = user_integer;
});

// математические операции

plus.addEventListener('click', function() {
    user_integer += ' + ';
    document.getElementById('user__integer').value = user_integer;
});

minus.addEventListener('click', function() {
    user_integer += ' - ';
    document.getElementById('user__integer').value = user_integer;
});

division.addEventListener('click', function() {
    user_integer += ' / ';
    document.getElementById('user__integer').value = user_integer;
});

multi.addEventListener('click', function() {
    user_integer += ' * ';
    document.getElementById('user__integer').value = user_integer;
});

del.addEventListener('click', function() {
    user_integer = '';
    document.getElementById('user__integer').value = user_integer;
    document.getElementById('result__block').value = '';
});


const calculation = () => {
    result = eval(user_integer);
    return result;
};

result_button.addEventListener('click', function() {
    document.getElementById('result__block').value = calculation();
    document.getElementById('user__integer').value = calculation();
    user_integer = eval(user_integer);
});