/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы 
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.
  
    showResults добавляет в список с классом .results 
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, 
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const inputs = document.querySelectorAll(".validate");
const validateObj = {};
submitBtn.addEventListener("click", validate);
submitBtn.addEventListener("click", showResults);

function validate(evt) {
  evt.preventDefault();
  for(let i = 0; i < inputs.length; i++){
    inputs[i].setAttribute("required", "");
  }
  if(inputs[0].checkValidity()){
    validateObj.name = inputs[0].value;
  }
  if(inputs[1].checkValidity()){
    validateObj.lastName = inputs[1].value;
  }
  if(inputs[2].checkValidity()){
    validateObj.tel = inputs[2].value;
  }
  console.log(validateObj)
}

function showResults(results) {
  resultsList.innerHTML = "";
  let resName = document.createElement("li");
  let resLastName = document.createElement("li");
  let resTel = document.createElement("li");
  if(validateObj.name){
    resName.textContent = validateObj.name;
  } else {
    resName.textContent = "Error";
  }
  resultsList.appendChild(resName);
  if(validateObj.name){
    resLastName.textContent = validateObj.lastName;
  } else {
    resLastName.textContent = "Error";
  }
  resultsList.appendChild(resLastName);
  if(validateObj.tel){
    resTel.textContent = validateObj.tel;
  } else {
    resTel.textContent = "Error";
  }
  resultsList.appendChild(resTel);
}
