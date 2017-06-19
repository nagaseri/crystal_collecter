//global variables 
	var winsCounter = 0; 
	var lossesCounter = 0;
	var computerChoice = 0;
	var totalScoreCounter = 0;

//computer chooses a random number between 19 and 120
	computerChoice = Math.floor((Math.random() * 102) + 19);
	console.log('computerChoice', computerChoice);
// Here we set the "number-to-guess" header to match the "computerChoice".
  	$("#numberToGuess").text(computerChoice);

//Crystals are assigned random value between 1 and 12
	var crystalValue1 = Math.floor((Math.random() * 12) + 1);
	console.log('crystalValue1', crystalValue1);
	var crystalValue2 = Math.floor((Math.random() * 12) + 1);
	console.log('crystalValue2', crystalValue2);
	var crystalValue3 = Math.floor((Math.random() * 12) + 1);
	console.log('crystalValue3', crystalValue3);
	var crystalValue4 = Math.floor((Math.random() * 12) + 1);
	console.log('crystalValue4', crystalValue4);

//game reset function
	//computer chooses new random number
	//values of each crystal changes 
	function gameReset(){
		computerChoice = Math.floor((Math.random() * 120) + 19);
			console.log('computerChoice', computerChoice);
  			$("#numberToGuess").text(computerChoice);
  			crystalValue1 = Math.floor((Math.random() * 12) + 1);
			console.log('crystalValue1', crystalValue1);
			crystalValue2 = Math.floor((Math.random() * 12) + 1);
			console.log('crystalValue2', crystalValue2);
			crystalValue3 = Math.floor((Math.random() * 12) + 1);
			console.log('crystalValue3', crystalValue3);
			crystalValue4 = Math.floor((Math.random() * 12) + 1);
			console.log('crystalValue4', crystalValue4);
		totalScoreCounter = 0;
	}

//Clicking on crystal will add to total score counter
 $(".crystal1").on("click", function() {
    totalScoreCounter += crystalValue1;
    $("#totalScoreCounter").text(totalScoreCounter);
    console.log('mytotalScoreCounter', totalScoreCounter);
    	if(totalScoreCounter === computerChoice) {
    		winsCounter++;
    		$("#winsCounter").text(winsCounter);
    		gameReset();
    	}
    	else if(totalScoreCounter > computerChoice){
    		lossesCounter++;
    		$("#lossesCounter").text(lossesCounter);
    		gameReset();
    	}
  });

$(".crystal2").on("click", function() {
	totalScoreCounter += crystalValue2;
	$("#totalScoreCounter").text(totalScoreCounter);
	console.log('mytotalScoreCounter', totalScoreCounter);
		if(totalScoreCounter === computerChoice) {
    		winsCounter++;
    		$("#winsCounter").text(winsCounter);
    		gameReset();
    	}
    	else if(totalScoreCounter > computerChoice){
    		lossesCounter++;
    		$("#lossesCounter").text(lossesCounter);
    		gameReset();
    	}
  });

$(".crystal3").on("click", function() {
	totalScoreCounter += crystalValue3;
	$("#totalScoreCounter").text(totalScoreCounter);
	console.log('mytotalScoreCounter', totalScoreCounter);
		if(totalScoreCounter === computerChoice) {
    		winsCounter++;
    		$("#winsCounter").text(winsCounter);
    		gameReset();
    	}
    	else if(totalScoreCounter > computerChoice){
    		lossesCounter++;
    		$("#lossesCounter").text(lossesCounter);
    		gameReset();
    	}
  });

$(".crystal4").on("click", function() {
	totalScoreCounter += crystalValue4;
	$("#totalScoreCounter").text(totalScoreCounter);
	console.log('mytotalScoreCounter', totalScoreCounter);
		if(totalScoreCounter === computerChoice) {
    		winsCounter++;
    		$("#winsCounter").text(winsCounter);
    		gameReset();
    	}
    	else if(totalScoreCounter > computerChoice){
    		lossesCounter++;
    		$("#lossesCounter").text(lossesCounter);
    		gameReset();
    	}
  });

