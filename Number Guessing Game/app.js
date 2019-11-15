var inputNumber = document.getElementById('number'),
  form = document.querySelector('form'),
  maxNumber = 10,
  generatedNumber = 0,
  difficulty = document.getElementById('difficulty'),
  option = document.getElementById('options'),
  legendElement = document.getElementById('legend'),
  counterElement = document.getElementById('countdown'),
  timeleft = 100,
  timer;

  var difficultyMap = {
    easy: 10,
    medium: 100,
    hard: 1000
  };
  document.getElementById('legend').innerHTML =  maxNumber;
  var selectedDifficulty=difficultyMap['easy'];

function startTimer() {
  timeleft = 100;
  timer = setInterval(function(){
    counterElement.innerHTML = 'Mai ai ' + timeleft + ' secunde' ;
    timeleft -= 1;
    if(timeleft <= 0) {
      alert('Ai pierdut! :(');
      newGame(selectedDifficulty);
    }
  }, 1000);
}

function newGame(difLevel) {
  clearInterval(timer);
  inputNumber.value = '';
  maxNumber = difLevel;
  legendElement.innerHTML =  maxNumber;
  generatedNumber = Math.ceil(Math.random() * maxNumber);
  startTimer();
  selectedDifficulty=difLevel;
  console.log(generatedNumber);
}

option.addEventListener('reset', function(evt){
  newGame(selectedDifficulty);
  evt.preventDefault();
});

option.addEventListener('submit', function(evt){
  var level=difficulty.options[difficulty.selectedIndex].value;
  newGame(difficultyMap[level]);
  evt.preventDefault();
});

form.addEventListener('submit', function(e) {
  var userNumber = inputNumber.value || 0;
  
  if (userNumber > generatedNumber) {
    alert('Numarul este prea mare :(');
  } else if (userNumber < generatedNumber) {
    alert('Numarul este prea mic :( ');
  } else {
    alert('Felicitari! Ai ghicit! :)');
    newGame(selectedDifficulty);
  }

  e.preventDefault();
}, false);


  


  

newGame(selectedDifficulty);