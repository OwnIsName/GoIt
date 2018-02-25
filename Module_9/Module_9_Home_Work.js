/*
  
  Продолжаем тему клавиатуры. В этом задании необходимо
  создать шаблон целой клавиатуры по переданым строкам 
  и отрендерить результат.
  
  Дан объект rows который содержит 3 поля, каждое из которых
  содержит массив символов. Каждое из полей представляет
  собой строку клавиатуры.
  Для перебора полей объекта используйте Object.keys(obj).
  
  Напишите функцию renderKeyboard которая принимает 3
  аргумента:
  - шаблон: tpl
  - данные строк, обьект с полями: rows
  - ссылку на элемент-родитель в который будем рендерить результат: parent
_________________________________________________________________________________________________________________________
*/
const rows = {
  top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  space: ['Space']
};

var keys = [];
var notes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si', 'do', 're', 'mi', 'fa', 'sol', 'la', 'si']

const shablon = document.querySelector('#row-tpl').textContent.trim();
const compiled = _.template(shablon);
var outer = document.querySelector("#row-container")
var rowsLine = Object.keys(rows);

//-------------------------------------------------------------------------------------
var soundOn = function(note){
  var currentNote = document.querySelector(`audio[data-note=${note}]`);
    currentNote.currentTime = 0;
    currentNote.play();
};




function renderRow(tpl, row, parent) {
  const compiled = _.template(tpl);
 
  const result = compiled(row);
  outer.innerHTML = result;
}
renderRow(shablon, rows, outer)


var buttons = Array.from(document.querySelectorAll("button"));
console.log(buttons)



for(key in rows){
  var a = rows[key]
  a.forEach( function(element, index) {
    keys.push(element)
  });
};



console.log(keys)

window.addEventListener("keydown", function(e){
console.log(e)
    if(keys.includes(e.key) || keys.includes(e.code)){

        let button = buttons.find((elem) => elem.innerHTML === e.key || elem.innerHTML === "Space")
        button.classList.add('keyboard__btn--active');

        setTimeout(()=>button.classList.remove('keyboard__btn--active'), 100);
       let soundTrue = document.getElementById('slideThree');

        if(soundTrue.checked)
            soundOn(button.dataset.note);

    
    }
}, true);