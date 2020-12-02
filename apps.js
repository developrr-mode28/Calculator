const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let numbers = btns[i].getAttribute('data-num');
        screen.value += numbers;
    });
}

equalBtn.addEventListener('click', function() {
    if(screen.value === '') {
         alert('You Have Chosen an empty input. Please Choose Another Input')
    }
        else {
    let value = eval(screen.value);
        screen.value = value;
        } 
    });
                                            
    clearBtn.addEventListener('click', function() {
        screen.value = '';
    }); 
