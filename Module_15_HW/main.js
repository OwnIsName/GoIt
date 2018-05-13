    /*
Модуль 15 - Домашнее задание

Создать две кнопки в HTML: start и stop.

Создать класс Timer с полями startTime, stopTime и interval. 
Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.

Для класса Timer создать методы start и stop, getTime.
Создать экземпляр класса Timer, пусть он называется stopwatch.

При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval. 
А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.

Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.
*/



(function() {
  const buttonStart = document.querySelector(".start-button");
  const buttonStop = document.querySelector(".stop-button");
  const wrapper =  document.querySelector(".outerTime");
  const timeend = new Date(2018, 12, 31, 23, 59);

  
  class Timer {
    constructor(){
      this.startTime
      this.stopTime
      this.interval
    }
    
    start() {
      let date = new Date();
      this.startTime = date;
    }

    stop() {
      let dateStop = new Date();
      this.stopTime = dateStop;
      this.interval = Math.ceil((this.stopTime - this.startTime)/1000);
    }

    getTime() {
      console.log(`Interval: ${this.interval} sec`);
    }

    static timeToNY() {
      var today = new Date();
      today = Math.floor((timeend-today)/1000);
      var tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
      var tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
      var thour=today%24; today=Math.floor(today/24);
      var timestr= "To New Year 2019 remains "+today +" days "+ thour+" hours "+tmin+" min "+tsec+" sec";
      return timestr;
    }
    
  }
  
  let stopwatch = new Timer();

  buttonStart.addEventListener("click", function(){
    stopwatch.start();
  });
  
  buttonStop.addEventListener("click", function(){
    stopwatch.stop();
    stopwatch.getTime();
  });
  
  wrapper.textContent = Timer.timeToNY();
  setInterval(function(){
    wrapper.textContent = Timer.timeToNY();
  }, 1000);

})();

/*


    var timerOutput = document.querySelector('.timer');
    var startButton = document.querySelector('.start-button');
    var stopButton = document.querySelector('.stop-button');
    var outerList = document.querySelector('.outerTime');

    class Session {
        constructor(){
        this.Sec = 0;
        this.mSec = 0;
        this.startTime = 0;
        this.startCounter = 0;
        this.stopTime = 0;
        this.interval = 0;
        this.activation = false;
    }
        get timerOn () {
            if (this.activation == true) {
                this.mSec++
                    timerOutput.innerHTML = `Timer: ${this.Sec}.  ${this.mSec} seconds`;
                if (this.mSec > 98) {
                    this.Sec++;
                    this.mSec = 0;
                    setTimeout(this.timerOn, 10)
                } else {
                    setTimeout(this.timerOn, 10)
                }
            } else {
                return false;
            }
        }

        get startSession () {
            this.startCounter++;
            this.activation = true;
            this.startTime = this.Sec + (this.mSec / 100);
            this.timerOn();
        }

        get stopSession () {
            this.stopTime = this.Sec + (this.mSec / 100);
            this.interval = (this.stopTime - this.startTime).toFixed(2) + " Sec";
            this.activation = false;
            console.log("interval is " + this.interval);
            var newOuterTime = document.createElement('h5');
            newOuterTime.textContent = `${this.startCounter}. interval = ${this.interval}`;
            return outerList.appendChild(newOuterTime)
        }
    }
        

        
    let session = new Session();
    startButton.addEventListener("click", function() {
        session.startSession();
    });
    stopButton.addEventListener("click", function() {
        session.stopSession();
    });
})();*/