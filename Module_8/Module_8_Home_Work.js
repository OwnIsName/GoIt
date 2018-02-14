


var soundOn = (function(note){
	var currentNote = document.querySelector(`audio[data-note=${note}]`);
    currentNote.currentTime = 0;
    currentNote.play();
})

var buttons = Array.from(document.querySelectorAll("button"));
console.log(buttons)
var keys = [];
for(i = 0; i < buttons.length; i++){
	keys.push(buttons[i].textContent)
}
console.log(keys);





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
}, true)


	/*if (e.keyCode > 64 && e.keyCode < 91) {
		
		var audioNoteClass = document.querySelectorAll(".sonidos")
	

		for (i = 0; i < articleClass.length; i++) {
			var articleButton = articleClass[i];
			var articleButtonText = articleButton.textContent;
			
				
			if(articleButtonText == e.key){
				if(articleButton.className == "keyboard__btn"){
					var articleButtonNote =  articleButton.dataset.note;//NOTA
					articleButton.className = "keyboard__btn keyboard__btn--active"
						for(j=0; j < audioNoteClass.length; j++){
							var audioNote = audioNoteClass[j].dataset.note;
							if (audioNote ==  articleButtonNote)
								audioNoteClass[j].play() 
							audioNoteClass[j].pause();
							
						}
				}else{
					var articleButtonNote =  articleButton.dataset.note;//NOTA
					articleButton.className = "keyboard__btn"
					for(j=0; j < audioNoteClass.length; j++){
							var audioNote = audioNoteClass[j].dataset.note;
							if (audioNote ==  articleButtonNote)
								audioNoteClass[j].play();
							audioNoteClass[j].pause();

							
						}

				}


				console.log(articleButton.dataset.note)
				console.log(articleClass)
			}
		}

		console.log(articleButton)
		console.log()
		
		/*for (var i = 0; i < articleClass.length; i++) {
			
			console.log(articleClass[i]);
		}
	}*/
