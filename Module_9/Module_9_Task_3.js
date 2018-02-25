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
	bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
};

const shablon = document.querySelector('#row-tpl').textContent.trim();
console.log(shablon)
const compiled = _.template(shablon);
console.log(compiled)
var outer = document.querySelector("#row-container")
var rowsLine = [];

//tpl, row, parent
function renderRow(tpl, row, parent) {
	const compiled = _.template(tpl);
  console.log(compiled)
	rowsLine = Object.keys(row)
	console.log(rowsLine)


	const result = compiled(row);
	outer.innerHTML = result;
}
renderRow(shablon, rows, outer)
//renderRow(rows.middle)
//renderRow(rows.bottom)




