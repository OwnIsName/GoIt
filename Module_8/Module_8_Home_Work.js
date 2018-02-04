

/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/
const keyboard = {
	layouts: {
		en: {
			topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
			middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
			bottomRow: ["z", "x", "c", "v", "b", "n", "m"]
		}
	}
};

keyboard.createLayout = function() {
	var block = document.querySelector(".container");
	for (prop in this.layouts.en) {
		var block = document.querySelector(".container");
		var button = document.createElement('div');
		button.className = "box";
		button.id = prop;
		block.appendChild(button);
		var arrKeyb = this.layouts.en[prop];
		for (i = 0; i < arrKeyb.length; i++) {
			var rowButton = document.getElementById(prop);
			var buttons = document.createElement('button');
			buttons.id = arrKeyb[i];
			buttons.className = "butt";
			buttons.textContent = arrKeyb[i];
			rowButton.appendChild(buttons);
		}
	}
};
keyboard.createLayout();

window.addEventListener("keydown", keyKlick);//событие на уровне страницы(при Кейдаун сработает функция кейклик)


function keyKlick(e) {
	console.log(e.keyCode);
	if (e.keyCode > 64 && e.keyCode < 91) {
		var activeBut = document.getElementById(e.key);
		var soundKlick = document.createElement('audio');
		soundKlick.src = 'click.mp3';
		soundKlick.autoplay = true;
		if (activeBut.className == "butt") {
			activeBut.appendChild(soundKlick);
			activeBut.className = "keyboard__btn--active";
		} else {
			activeBut.appendChild(soundKlick);
			activeBut.className = "butt";
		}

	} 
	//console.log(activeBut);

}



