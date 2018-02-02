

/*Модуль 7 - Домашнее задание
Визуализируем клавиатуру.

Написать метод createLayout() который создает клавиатуру состоящую из 3-х строк, в каждой строке такое кол-во кнопок как длины topRow/middleRow и bottomRow полей.
Можно использовать либо createElement либо создавать строку из тегов и вешать через insertAdjacentHTML или innerHTML.
Добавить минимальное оформление на свой вкус.*/
const keyboard = {
    layouts: {
        en: {
            topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
            middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
            bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
        }
	}
};




	keyboard.createLayout = function(){
	var block = document.querySelector(".container");
	for(prop in this.layouts.en){
	var block = document.querySelector(".container");
	var button = document.createElement('div');
	button.className = "box";
	button.id = prop;
	block.appendChild(button);
	var arrKeyb = this.layouts.en[prop];
		for(i = 0; i < arrKeyb.length; i++){
			var rowButton = document.getElementById(prop);
			var buttons = document.createElement('button');
			buttons.id = "butt";
			buttons.textContent = arrKeyb[i];
			rowButton.appendChild(buttons)
			

		}
	}
};
keyboard.createLayout();




