/* 
   Составить HTML шаблон c id="row-tpl", который принимает
   массив символов и создает одну строку клавиаутры состоящую
   из элементов  button, обернутых в общий div, текстовый
   контент которых будет буквами из массива символов.
   

   html разметка должна быть такая, emmet сокращение
   div>button*n{значение элемента массива}, где n это
   кол-во элементов массива


   <div id = "row-tpl"><button></button></div>
*/

// пример массивов символов которые будут передаваться в шаблон

/* 
  *** К этому pen подключена библиотека Lodash ***
  
  Используя свой шаблон из Задания 1, написать функцию
  renderRow которая принимает 3 аргумента: 
  - html шаблон: tpl
  - массив символов: row
  - ссылку на элемент в который будет рендериться результат,
    div c id=row-container: parent
  
  Используя функцию Lodash  _.template() и параментры функции
  renderRow, зарендерить результат обработки шаблона и данных
  в parent.
*/

/*const rows = {
  top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
};*/

//function renderRow(tpl, row, parent) {
  // тут пишем логику работы функции
//}

// Если передать в renderRow rows.middle или rows.bottom,
// то в превью должна зарендерится строка кнопок с соответствующими
// символами
//renderRow(rows.top);
//______________________________________________________________________________________________________________________________________

const rows = {
	top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
	middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
	bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
};
// Функция для проверки, она использует шаблон с id=row-tpl
// и рендерит строку в элемент с id=row-container.
// Если вы верно запишите шаблон, то в превью отобразится
// строка кнопок
// Подставив rows.middle или rows.middle вмето rows.top,
// изменится строка кнопок на те что указаны в строке
const shablon = document.querySelector('#row-tpl').textContent.trim();
console.log(shablon)
const compiled = _.template(shablon);
console.log(compiled)
var outer = document.querySelector("#row-container")


//tpl, row, parent
function renderRow(tpl, row, parent) {
	const compiled = _.template(tpl);

	const result = compiled(row);
	console.log(result.textContent)
	return outer.innerHTML = result;
}
renderRow(shablon, rows.top, outer)
renderRow(rows.middle)
//renderRow(rows.bottom)




