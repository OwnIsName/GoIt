/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время

const string = "qryte";
const charsArr = string.split("");
const exerciseOutput = document.querySelector(".exercise")
const timerOutput = document.querySelector(".timer");
const keyboard = document.querySelector(".keyboard");
let arrMain = [];//создаем массив где будут хранится все верно введенные буквы
let counter = 0;//создаем счетчик для таймера

// создаем таймер с помощью setInterval и выводим его значение в див с таймером(timerOutput)
let time = setInterval(() => {
  counter++;
  timerOutput.innerHTML = counter;
}, 1000);

//выводим строку string
exerciseOutput.innerHTML = string;

//выводим результат из localStorage с помощью метода getItem и получаем цифру(время последней попытки ввести буквы)
keyboard.textContent = `Your last result: 5 letters in ${localStorage.getItem("data")} sec`;

//вешаем слушателя на весь документ
window.addEventListener("keydown", function(e){
// при нажатии кнопки клавиатуры пушем в массив где будут хранится все буквы которые мы ввели(не только те что есть в string)
 if(e.keyCode > 64 && e.keyCode < 91){
  console.log(e)
  arrMain.push(e.key);
    if(arrMain.length > 4){
      for(let i = 0; i < arrMain.length; i++){
        
        if(arrMain[i] == charsArr[i]){
          console.log(arrMain[i] + '=? ' + charsArr[i])
          clearInterval(time);
      keyboard.textContent = "";
      //код(3)
      keyboard.textContent = `Your result: 5 letters in ${counter} sec`;
      //код(4)
      localStorage.setItem("data", JSON.stringify(counter));
            
        }else {
            clearInterval(time);
            keyboard.textContent = "You looooooose!";
        } 
      }
          
    }
      // если в массиве allKeys больше чем 5 букв, остановить таймер и вывести что ты проиграл.
  } 
});
