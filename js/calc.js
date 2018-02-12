window.onload = function () {
    const display = document.querySelector('.display');
    const panel = document.querySelector('.buttonpanel');
    const calcdiv = document.querySelector('.calc');
    let element = 0, diya = false, result = '';

    const events = ['dblclick', 'selectstart', 'mousedown', 'contextmenu', 'touchstart', 'touchmove', 'click'];
    for (let i=0; i<events.length; i++) {
        calcdiv.addEventListener(events[i], evt => {
        evt.preventDefault();
        });
    };

    addDigit(element);

    const but = [ '\u03C0', '+-', '\u221A', 'C', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+' ];
    for (let i=0;i<but.length;i++){
      panel.innerHTML += `<div class="buttoncalc">${but[i]}</div>`;
    };

    const buttons = document.querySelectorAll('.buttoncalc');
    for (let i=0; i<buttons.length; i++){
        buttons[i].addEventListener(  'click', push );
        buttons[i].addEventListener(  'touchstart', push );
        };

    function push() {
        let pushbtn = this.innerHTML;

        if (pushbtn === '\u03C0'){
            display.innerHTML = '';
            pushbtn = Math.PI.toString().slice(0, 10);
        };

        if (pushbtn === '\u221A'){
            pushbtn = Math.sqrt(element).toString().slice(0, 10);
            display.innerHTML = '';
        };

        if (pushbtn === '+-'){
          display.innerHTML = 0-Number(display.innerHTML);
          pushbtn ='';
        };

        if (diya === true) {
            display.innerHTML = '';
            diya = false;
        };

        if (isNaN(pushbtn) && pushbtn !=='.') {
            calculating(pushbtn);
        }
        else {
            if (display.innerHTML === '0') display.innerHTML = '';
            element = addDigit(pushbtn);
        };
    };

    function addDigit(digit) {
        if (display.innerHTML.length<10) {
            display.innerHTML += digit;
        };
        return display.innerHTML;
    };

    function calculating(push) {

    if (push !== '=') {
    element = display.innerHTML;
    result += element + push;
    diya = true;
    };

    if (push === '=') {
        display.innerHTML = '';
        result += element;
        display.innerHTML = eval(result).toString().slice(0, 10);
        element = eval(result);
        result ='';
    };

    if (push === 'C') {
      element = 0; display.innerHTML = 0; result = '';
    }};
}