let dec = document.querySelector('#dec');
let bin = document.querySelector('#bin');

dec.addEventListener('input', function(){
    let num = +dec.value;
    let arr = [];
    while(num >= 1){
        if(Math.floor(num) % 2 == 0) arr.push(0);
        else {            
            arr.push(1);
        }
        num = num / 2;
    }

    bin.value = arr.reverse().join('');
})

dec.addEventListener('keyup', function(){
    this.value = this.value.replace (/\D/, '');
})

bin.addEventListener('input', function(){
    let result = 0;
    bin.value.split('').reverse().forEach((elem, index) => 
        result +=(+elem * Math.pow(2, index))
        );
    dec.value = result;
})

bin.addEventListener('keydown', function(event){
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  ||
        (event.keyCode == 65 && event.ctrlKey === true) ||
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        return;
      } else {
        if ((event.keyCode < 48 || event.keyCode > 49) && (event.keyCode < 96 || event.keyCode > 97 )) {
          event.preventDefault();
        }
    }
})