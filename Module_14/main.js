(function() {
    var timerOutput = document.querySelector('.timer');
    var startButton = document.querySelector('.start-button');
    var stopButton = document.querySelector('.stop-button');
    var outerList = document.querySelector('.outerTime');

    function Session() {
        this.Sec = 0;
        this.mSec = 0;
        this.startTime = 0;
        this.startCounter = 0;
        this.stopTime = 0;
        this.interval = 0;
        this.activation = false;
        this.timerOn = () => {
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
        this.startSession = function() {
        	this.startCounter++;
            this.activation = true;
            this.startTime = this.Sec + (this.mSec / 100);
            this.timerOn();
        }
        this.stopSession = function() {
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
})();