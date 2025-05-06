const value1 = document.createElement('input');
value1.placeholder = 'Enter first number';
value1.type = 'number';
const value2 = document.createElement('input');
value2.placeholder = 'Enter second number';
value2.type = 'number';

const add = document.createElement('button');
add.type = 'button';
add.textContent = 'Add';

const sub = document.createElement('button');
sub.type = 'button';
sub.textContent = 'Subtract';

const mul = document.createElement('button');
mul.type = 'button';
mul.textContent = 'Multiply';

const div = document.createElement('button');
div.type = 'button';
div.textContent = 'Divide';

const result = document.createElement('input');
result.placeholder = 'Result';
result.type = 'number';
result.readOnly = true;

add.addEventListener('click', function() {
    result.value = parseInt(value1.value) + parseInt(value2.value);
    alert('Addition is: ' + result.value);
});

sub.addEventListener('click', function() {
    result.value = parseInt(value1.value) - parseInt(value2.value);
    alert('Subtraction is: ' + result.value);
});

mul.addEventListener('click', function() {
    result.value = parseInt(value1.value) * parseInt(value2.value);
    alert('Multiplication is: ' + result.value);    
});

div.addEventListener('click', function() {
    result.value = parseInt(value1.value) / parseInt(value2.value);
    alert('Division is: ' + result.value);
});

document.body.append(value1, value2, add, sub, mul, div, result);

