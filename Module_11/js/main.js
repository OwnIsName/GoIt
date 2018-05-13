
/*Написать приложение для работы с REST сервисом http://fecore.net.ua/rest/, 
реализовать следующий функционал:

+функция getUsers должна получать текущий список всех пользователей в БД.
+функция addUser должна записывать в БД юзера с полями name и score.
+функция removeUser должна удалять из БД юзера по id.
функция updateUser должна обновлять данные пользователя по id.
Сделать минимальный графический интерфейс в виде панели с полями и кнопками, 
а так же панелью для вывода результатов операций с REST сервисом.

Внимание: при попытке запроса по HTTPS протоколу будет ошибка (CORS).

API имеет слудующий функционал:

http://fecore.net.ua/rest/?action=3&id=1 - удаление
http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 - изменение
http://fecore.net.ua/rest/?action=1&name=Mark&score=100 - добавление
http://fecore.net.ua/rest/?action=4 - описание доступного функционала*/

//кнопка вывода Базы Данных на страницу
var dataBaseButt = document.querySelector(".dataBaseButt")
//Поле вывода Базы Данных на страницу
var outerdataBaseList = document.querySelector(".dataBaseList")
//Номер строки с данными про пользователя в БД
var counter = 0;
//Функция getUsers - выводит БД на страницу по нажатию на кнопку
var nextImg = document.createElement("img")

var getUsers = function(){
	fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3e34c7da83f9851126f4c11c91d181e8&format=json")
	.then(res => res.json())
	.then(res => {
		var topTracks = res.tracks.track
		console.log(topTracks)
		for(key in topTracks){
			var linkName = JSON.stringify(topTracks[key].name);
			var linkImage = JSON.stringify(topTracks[key].image[0]['#text']);
			var linkUrl = JSON.stringify(topTracks[key].url);
			
			counter ++; 
			
			outerdataBaseList.innerHTML += `<div>${counter}. <a href=${linkUrl}><img src=${linkImage}>
			 ${linkName}</a></div>`;
			
		}
	})

};
//Событие по нажатию на кнопку dataBaseButt
dataBaseButt.addEventListener("click", getUsers);

//Поле для ввода id 
var inputsId = document.querySelector(".inputs__id")
//Поле для ввода name
var inputsName = document.querySelector(".inputs__name")
//Поле для ввода score
var inputsScore = document.querySelector(".inputs__score")

//кнопка записи в БД нового юзера с полями name и score
var addUserButt = document.querySelector(".butt")

//Функция addUser - записывает в БД юзера с полями name и score по нажатию на кнопку
var addUser = function(){
	fetch(`http://fecore.net.ua/rest/?action=1&name=${inputsName.value}&score=${inputsScore.value}`)
	.then(res => res.json())
	.then(res => {
		console.log(res)
	}
)};
//Событие по нажатию на кнопку addUserButt
addUserButt.addEventListener("click", addUser);



//кнопка delete user
var deleteButton = document.querySelector(".deleteButt")
//Функция удаляет юзера с БД
var removeUser = function(){
	fetch(`http://fecore.net.ua/rest/?action=3&id=${inputsId.value}`)
	.then(res => res.json())
	.then(res => {
		console.log(res)
	}
)};
//Событие по нажатию на кнопку addUserButt
deleteButton.addEventListener("click", removeUser);


//кнопка изменения в БД юзера
var updateButton = document.querySelector(".updateButt")
var updateUser = function(){
	fetch(`http://fecore.net.ua/rest/?action=2&id=${inputsId.value}&name=${inputsName.value}&score=${inputsScore.value}`)
	.then(res => res.json())
	.then(res => {
	}
)};
//Событие по нажатию на кнопку addUserButt
updateButton.addEventListener("click", updateUser);