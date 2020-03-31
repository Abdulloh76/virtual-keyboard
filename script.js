document.body.insertAdjacentHTML('beforeEnd', '<div class="wrapper"></div>');
const wrapper = document.querySelector('.wrapper');

wrapper.insertAdjacentHTML('afterBegin', '<textarea>');
const input = document.querySelector('textarea');

input.insertAdjacentHTML('afterEnd', '<div class="keyboard"></div>');
const keyboard = document.querySelector('.keyboard');

let keys = [
[['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['backspace', 'backspace']], 
[['tab', 'tab'], ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['\\', '|'], ['del', 'del']],
[['caps lock', 'caps lock'], ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ['\'', '"'], ['enter', 'enter']],
[['shift', 'shift'], ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], ['▲', '▲'], ['shift', 'shift']],
[['ctrl', 'ctrl'], ['win', 'win'], ['alt', 'alt'], ['space', 'space'], ['alt', 'alt'], ['◄', '◄'], ['▼', '▼'], ['►', '►'], ['ctrl', 'ctrl']]
];


function createKeys(isHead=0) {
    keys.forEach(element => {
        keyboard.insertAdjacentHTML('beforeEnd', '<div class="keyboard-row"></div>'); 
        let keyRow=document.querySelectorAll('.keyboard-row');
        element.forEach(item => {
            switch(item[isHead]) {
                case 'backspace':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key backspace">${item[isHead]}</div>`);
                    break;
                case 'tab':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key tab">${item[isHead]}</div>`);
                    break;
                case 'del':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key del">${item[isHead]}</div>`);
                    break;
                case 'caps lock':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key caps-lock">${item[isHead]}</div>`);
                    break;
                case 'enter':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key enter">${item[isHead]}</div>`);
                    break;
                case 'shift':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key shift">${item[isHead]}</div>`);
                    break;
                case 'ctrl':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key ctrl">${item[isHead]}</div>`);
                    break;
                case 'space':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key space">${item[isHead]}</div>`);
                    break;
                case 'alt':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key alt">${item[isHead]}</div>`);
                    break;
                case '▲':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key upArrow">${item[isHead]}</div>`);
                    break;
                case '◄':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key leftArrow">${item[isHead]}</div>`);
                    break;
                case '▼':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key downArrow">${item[isHead]}</div>`);
                    break;
                case '►':
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key rightArrow">${item[isHead]}</div>`);
                    break;
                default: 
                    keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', `<div class="key">${item[isHead]}</div>`);
            }

        });
        
        // element[element.length-1].style.width = '105px';
    });
}
createKeys(0);


