/*  Функционал:
    1. Перевод из одной системы в другую при вводе значения;
    2. При потере фокуса стираются введенные значения;
    3. Во второй инпут можно вводить только цифры 1 и 0;
    4. Кнопки изменения числа в инпуте отсутствуют;
*/

let dec = document.querySelector('#dec');
let bin = document.querySelector('#bin');
let test = document.querySelector('#test');

dec.addEventListener('input', function(){
    let num = +dec.value;
    let arr = [];
    while(num > 1){
        if(Math.floor(num) % 2 == 0) arr.push(0);
        else {            
            arr.push(1);
        }
        num = num / 2;
    }

    bin.value = arr.reverse().join('');
})