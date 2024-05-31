document.addEventListener("DOMContentLoaded", function() {

    var displayBlock = document.querySelector('.display_block');
    var decreaseBtn = document.querySelector('.decrease_btn');
    var resetBtn = document.querySelector('.reset_btn');
    var increaseBtn = document.querySelector('.increase_btn');

    // Add click event listener to the decrease button
    decreaseBtn.addEventListener('click', function() {
        var currentValue = parseInt(displayBlock.innerText);
        var newValue = currentValue - 1;
        displayBlock.innerText = newValue;
    });

    // Add click event listener to the increase button
    increaseBtn.addEventListener('click', function() {
        var currentValue = parseInt(displayBlock.innerText);
        var newValue = currentValue + 1;
        displayBlock.innerText = newValue;
    });

    // Add click event listener to the reset button
    resetBtn.addEventListener('click', function() {
        displayBlock.innerText = 0;
    });
});