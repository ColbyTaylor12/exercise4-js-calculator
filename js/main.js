let firstValue = "";
let secondValue = "";
let calcButtons = ['c', '', '', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '', '='];
const operators = ['c', '/', 'x', '-', '+', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let mainlen = calcButtons.length;
let isFirstNumber = true;
let currentOperator = '';
const container = document.getElementById('main_container');
const screen = document.getElementById('screen');
const row = document.createElement('div');
row.classList.add("row");
container.appendChild(row);

function screenUpdate(value) {
    screen.innerHTML = value;
}

function calculate() {
    let x = parseInt(firstValue);
    let y = parseInt(secondValue);
    let result = 0

    switch (currentOperator) {
        case '/':
            result = x / y;
            break;
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case 'x':
            result = x * y;
            break;
        default:
            break;
    }
    return result;
}

function operatorHandle(value) {
    switch (value) {
        case 'c':
            firstValue = '';
            secondValue = '';
            screenUpdate('');
            currentOperator = '';
            isFirstNumber = true;
            break;
        case '/':
            if (currentOperator === '') {
                currentOperator = value;
                isFirstNumber = false;
                screenUpdate(value);
            }
            else {
                firstValue = calculate();
                secondValue = '';
                currentOperator = value;
                screenUpdate(firstValue);
                isFirstNumber = false;
            }
            break;
        case 'x':
            if (currentOperator === '') {
                currentOperator = value;
                isFirstNumber = false;
                screenUpdate(value);
            }
            else {
                firstValue = calculate();
                secondValue = '';
                currentOperator = value;
                screenUpdate(firstValue);
                isFirstNumber = false;

            }
            break;
        case '+':
            if (currentOperator === '') {
                currentOperator = value;
                isFirstNumber = false;
                screenUpdate(value);
            }
            else {
                firstValue = calculate();
                secondValue = '';
                currentOperator = value;
                screenUpdate(firstValue);
                isFirstNumber = false;

            }
            break;
        case '-':
            if (currentOperator === '') {
                currentOperator = value;
                isFirstNumber = false;
                screenUpdate(value);
            }
            else {
                firstValue = calculate();
                secondValue = '';
                currentOperator = value;
                screenUpdate(firstValue);
                isFirstNumber = false;

            }
            break;
        case '=':
            let result = calculate();
            screenUpdate(result);
            break;
    }
}


for (let i = 0; i < mainlen; i += 1) {
    let current = calcButtons[i];
    const btn = document.createElement('button');
    const filler = document.createTextNode(current);
    btn.id = "btn" + i;
    btn.value = calcButtons[i];
    if (numbers.includes(current)) {
        btn.classList.add("number");
    }
    else if (operators.includes(current)) {
        btn.classList.add("operator");
    }
    else {
        btn.classList.add("space");
    }

    btn.appendChild(filler);
    const col = document.createElement('div');
    col.classList.add("col-3");
    col.appendChild(btn);
    row.appendChild(col);
}


$('.number').on('click', function () {
    let valPressed = this.value;
    console.log(valPressed);
    if (isFirstNumber) {
        firstValue = firstValue + valPressed;
        screenUpdate(firstValue);
        console.log("First Value Update");
    }
    else {
        secondValue = secondValue + valPressed;
        screenUpdate(secondValue);
        console.log("Second Value Update");
    }
});

$('.operator').on('click', function () {
    let valPressed = this.value;
    operatorHandle(valPressed);
});

$('.space').on('click', function () {
    console.log('space pressed');
})


//event listener to listen for clicks
// const one = document.getElementById("btn1");
// one.addEventListener('click', function(){
//     console.log("One was pressed");
//     console.log(one.value);
// })


// for (let i = 0; i < operators.length; i+=1)  {
//     const btn = document.createElement('button');
//     const filler = document.createTextNode(operators[i]);
//     btn.id = "btn" + i + "Operator";
//     btn.appendChild(filler);
//     const col = document.createElement('div');
//     col.classList.add("col-3");
//     col.appendChild(btn);
//     row.appendChild(col);
// }






// // created a function to make a 4 by 4 set of buttons 
// document.body.onload = function calcFunction() {
//     var str = "";
//     var obj = document.getElementById("main_container");
//     // use a function to create rows columns for the calculator 
//     for (var i = 0; i < 4; i++) {
//         str += "<div class='row' id='row" + i + "'>";
//         var str2 = "";
//         for (var j = 0; j < 4; j++) {
//             var key ="index"+String(i)+String(j);
//             str2 += "<div class='col' id='col" + key + "'>";
//         var key2="btn" + String(i) + String(j);
//             str2 += "<button type= 'button' id= '"+key2+"' class= 'btn btn-primary'></button>";
//             str2 += "</div>";
//         }
//         str += str2;
//         str += "</div>";
//     }
//     obj.innerHTML = str;
// }