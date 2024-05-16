let count = 0;


function incrementCounter(counter) {
    var currentCount = parseInt(counter.innerHTML);
    currentCount++;
    counter.innerHTML = currentCount;
}


function decrementCounter(counter) {
    var currentCount = parseInt(counter.innerHTML);
    if (currentCount > 0) {
        currentCount--;
        counter.innerHTML = currentCount;
    }
}


document.querySelectorAll('.button.increment').forEach(function (button) {
    button.addEventListener('click', function () {
        incrementCounter(button.parentElement.querySelector('#counter'));
    });
});


document.querySelectorAll('.button.decrement').forEach(function (button) {
    button.addEventListener('click', function () {
        decrementCounter(button.parentElement.querySelector('#counter'));
    });
});


let count2 = 2;


document.querySelectorAll('#counter2').forEach(function (counter) {
    counter.innerHTML = count2;
});


function incrementCounter2(counter) {
    var currentCount2 = parseFloat(counter.innerHTML);
    currentCount2 += 0.5;
    counter.innerHTML = currentCount2;
}


function decrementCounter2(counter) {
    var currentCount2 = parseFloat(counter.innerHTML);
    if (currentCount2 > count2) {
        currentCount2 -= 0.5;
        counter.innerHTML = currentCount2;
    }
}


document.querySelectorAll('.button.increment2').forEach(function (button) {
    button.addEventListener('click', function () {
        incrementCounter2(button.parentElement.querySelector('#counter2'));
    });
});


document.querySelectorAll('.button.decrement2').forEach(function (button) {
    button.addEventListener('click', function () {
        decrementCounter2(button.parentElement.querySelector('#counter2'));
    });
});


function addRow() {
    var table = document.getElementById('area selection');
    var primaryRow = table.rows[1];


    var newRow = primaryRow.cloneNode(true);


    newRow.querySelector('.box').innerHTML = '0';
    newRow.querySelector('.dropdown').selectedIndex = 0;


    newRow.querySelector('.button.increment').addEventListener('click', function () {
        incrementCounter(newRow.querySelector('.box'));
    });


    newRow.querySelector('.button.decrement').addEventListener('click', function () {
        decrementCounter(newRow.querySelector('.box'));
    });


    table.appendChild(newRow);
}


document.getElementById('add-row').addEventListener('click', addRow);


//NAVIGATION JS
document.addEventListener('DOMContentLoaded', function () {
    const serviceSelection = document.querySelector('.SERVICE_SELECTION');
    const orderPlacement1 = document.querySelector('.ORDER_PLACEMENT1');
    const orderPlacement2 = document.querySelector('.ORDER_PLACEMENT2');
    const orderRegistration = document.querySelector('.ORDER_REGISTRATION');
    const submit1Button = document.querySelector('.submit1');
    const submit2Button = document.querySelector('.submit2');
    const homeContainer = document.querySelector('.home-container');
    const officeContainer = document.querySelector('.office-container');


    function showOrderRegistration() {
        serviceSelection.style.display = 'none';
        orderPlacement1.style.display = 'none';
        orderPlacement2.style.display = 'none';
        orderRegistration.style.display = 'block';
    }


    function showOrderPlacement1() {
        serviceSelection.style.display = 'none';
        orderPlacement1.style.display = 'block';
        orderPlacement2.style.display = 'none';
        orderRegistration.style.display = 'none';
    }


    function showOrderPlacement2() {
        serviceSelection.style.display = 'none';
        orderPlacement1.style.display = 'none';
        orderPlacement2.style.display = 'block';
        orderRegistration.style.display = 'none';
    }


    // Event listener for buttons
    submit1Button.addEventListener('click', function (event) {
        event.preventDefault();
        showOrderRegistration();
    });


    submit2Button.addEventListener('click', function (event) {
        event.preventDefault();
        showOrderRegistration();
    });


    homeContainer.addEventListener('click', function() {
        showOrderPlacement1();
    });


    officeContainer.addEventListener('click', function() {
        showOrderPlacement2();
    });
});
