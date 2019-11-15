var inputNumber = document.getElementById('number'),
  form = document.querySelector('form'),
  maxNumber = 10,
  generatedNumber = 0,
  difficulty = document.getElementById('difficulty'),
  option = document.getElementById('options');

  var difficultyMap = {
    easy: 10,
    medium: 100,
    hard: 1000
  };
  document.getElementById('legend').innerHTML =  maxNumber;
  var selectedDifficulty=difficultyMap['easy'];

function newGame(difLevel) {
  if (difLevel == 10) {
    maxNumber = 10;
  }
  else if (difLevel == 100) {
    maxNumber = 100;
  }
  else if (difLevel ===1000) {
    maxNumber = 1000;
  }
  document.getElementById('legend').innerHTML =  maxNumber;
  generatedNumber = Math.ceil(Math.random() * maxNumber);
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


  // var timeleft = 100;
  // var downloadTimer = setInterval(function(){
  //   document.getElementById("countdown").innerHTML = "Mai ai " + timeleft + " secunde" ;
  //   timeleft -= 1;
  //   if(timeleft <= 0){
  //     clearInterval(downloadTimer);
  //     alert('Ai pierdut! :(');
  //     newGame(selectedDifficulty);
  //   }
  // }, 1000);

  

newGame(selectedDifficulty);