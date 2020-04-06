document.body.insertAdjacentHTML('beforeEnd', '<div class="wrapper"></div>');
const wrapper = document.querySelector('.wrapper');

wrapper.insertAdjacentHTML('afterBegin', '<textarea>');
const input = document.querySelector('textarea');

input.insertAdjacentHTML('afterEnd', '<div class="keyboard"></div>');
const keyboard = document.querySelector('.keyboard');

let engKeys = [
[['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['backspace', 'backspace']], 

[['tab', 'tab'], ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['\\', '|'], ['del', 'del']],

[['caps-lock', 'caps-lock'], ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ['\'', '"'], ['enter', 'enter']],

[['shift', 'shift'], ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], ['▲', '▲'], ['shift', 'shift']],

[['ctrl', 'ctrl'], ['win', 'win'], ['alt', 'alt'], ['space', 'space'], ['alt', 'alt'], ['◄', '◄'], ['▼', '▼'], ['►', '►'], ['ctrl', 'ctrl']]
];

let rusKeys = [
[['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['backspace', 'backspace']],
    
[['tab', 'tab'], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\', '/'], ['del', 'del']],
    
[['caps-lock', 'caps-lock'], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], ['enter', 'enter']],
    
[['shift', 'shift'], ['я', 'Я'], ['ч', 'Ч'], ['с', 'С'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ','], ['▲', '▲'], ['shift', 'shift']],
    
[['ctrl', 'ctrl'], ['win', 'win'], ['alt', 'alt'], ['space', 'space'], ['alt', 'alt'], ['◄', '◄'], ['▼', '▼'], ['►', '►'], ['ctrl', 'ctrl']]
]
    
let keyCodes=[
['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],

['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],

['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],

['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],

['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];


for (let i=0; i<keyCodes.length; i++) {
    keyboard.insertAdjacentHTML('beforeEnd', '<div class="keyboard-row"></div>'); 
    let keyRow=document.querySelectorAll('.keyboard-row');

    for (let j=0; j<keyCodes[i].length; j++) {
        keyRow[keyRow.length-1].insertAdjacentHTML('beforeEnd', 
            `<div class="key ${keyCodes[i][j]}"> 
                <span class="eng hidden"> 
                    <span class="lower">${engKeys[i][j][0]}</span>
                    <span class="upper hidden">${engKeys[i][j][1]}</span>
                </span> 
                <span class="rus "> 
                    <span class="lower ">${rusKeys[i][j][0]}</span>
                    <span class="upper hidden">${rusKeys[i][j][1]}</span>
                </span> 
            </div>`
        );
    }
}

let str='';
 
function caseChanging() {
    document.querySelectorAll('.key').forEach(el => {
        if(!el.querySelector('.eng').classList.contains('hidden')) {
            if(!el.querySelectorAll('.eng>span')[0].classList.contains('hidden')) {
                el.querySelectorAll('.eng>span')[0].classList.add('hidden');
                el.querySelectorAll('.eng>span')[1].classList.remove('hidden');
            }
            else {
                el.querySelectorAll('.eng>span')[1].classList.add('hidden');
                el.querySelectorAll('.eng>span')[0].classList.remove('hidden');
            }
        }
        else {
            if(!el.querySelectorAll('.rus>span')[0].classList.contains('hidden')) {
                el.querySelectorAll('.rus>span')[0].classList.add('hidden');
                el.querySelectorAll('.rus>span')[1].classList.remove('hidden');
            }
            else {
                el.querySelectorAll('.rus>span')[1].classList.add('hidden');
                el.querySelectorAll('.rus>span')[0].classList.remove('hidden');
            }
        }
    });
}

function functionalKeys(key) {

    switch(key.classList[1]) {
        case 'Backspace': 
            str=str.replace(str[str.length-1], '');
            break;
        case 'Tab':
            str+='\t';
            break;
        case 'CapsLock':
            caseChanging();
            key.classList.toggle('active');
            break;
        case 'Enter':
            str+='\n';
            break;
        case 'Space':
            str+=' ';
            break;
        case 'ShiftRight': case 'ShiftLeft':
            caseChanging();
            break;

    }
}


keyboard.addEventListener('mousedown', (event) => {
    console.log(event.target.closest('.key'))
    if(event.target.innerText.length>2) {
        functionalKeys(event.target.closest('.key'));
    }

    else {
        str += event.target.innerText;
    }
    
    
});
keyboard.addEventListener('mouseup', (event) => {
    if (event.target.closest('.key').innerText=='shift') {
        caseChanging();
    }
});

document.onclick = () =>  input.value=str; 


