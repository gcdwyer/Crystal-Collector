// VARIABLES ============================================================

// generate random computerNumber between 19 - 120
var computerPick = Math.floor(Math.random() * 101) + 19;
var score = 0;
var wins = 0;
var losses = 0;

// display computer number
console.log("computer picks: " + computerPick);
$("#computerNumber").html("Computer: " + computerPick);

// assign 4 images with a random userNumber value of 1 -12
var crystal1 = Math.floor(Math.random() * 11) + 1;
console.log("crystal1: " + crystal1);

var crystal2 = Math.floor(Math.random() * 11) + 1;
console.log("crystal2: " + crystal2);

var crystal3 = Math.floor(Math.random() * 11) + 1;
console.log("crystal3: " + crystal3);

var crystal4 = Math.floor(Math.random() * 11) + 1;
console.log("crystal4: " + crystal4);


// FUNCTION RESET =======================================================

function reset() {
	// select a new random computer for computer
	computerPick = Math.floor(Math.random() * 101) + 19;
	$("#computerNumber").html("Computer: " + computerPick);
	console.log("computer picks: " + computerPick);

	// set user score back to 0
	score = 0;
	$("#userNumber").html("User: " + score);
	console.log("reset score: " + score);

	// select new random numbers for buttons
	var crystal1 = Math.floor(Math.random() * 11) + 1;
	console.log("crystal1: " + crystal1);
	var crystal2 = Math.floor(Math.random() * 11) + 1;
	console.log("crystal2: " + crystal2);
	var crystal3 = Math.floor(Math.random() * 11) + 1;
	console.log("crystal3: " + crystal3);
	var crystal4 = Math.floor(Math.random() * 11) + 1;
	console.log("crystal4: " + crystal4);
}

// FUNCTION WINNER =====================================================

function winner() {
	alert("You Won!");
	wins++;
	$("#numWins").html("Wins: " + wins);
	console.log("wins: " + wins);
	reset();
}

// FUNCTION LOSER =====================================================

function loser() {
	alert("You Lost!");
	losses++;
	$("#numLosses").html("Losses: " + losses);
	console.log("losses: " + losses);
	reset();
}

// FUNCTIONS ON-CLICK ==================================================

// click images and try to get userNumbers to add up to computerNumber 
	$("#button1").on("click", function() {

		score += crystal1;
		$("#userNumber").html("User: " + score);
		console.log("crystal 1: " + crystal1);
		console.log("my score: " + score);

		if (score === computerPick) {
			winner();
		} else if (score > computerPick) {
			loser();
		}
	});

	$("#button2").on("click", function() {

		score += crystal2;
		$("#userNumber").html("User: " + score);
		console.log("crystal 2: " + crystal2);
		console.log("my score: " + score);

		if (score === computerPick) {
			winner();
		} else if (score > computerPick) {
			loser();
		}
	});

	$("#button3").on("click", function() {

		score += crystal3;
		$("#userNumber").html("User: " + score);
		console.log("crystal 3: " + crystal3);
		console.log("my score: " + score);

		if (score === computerPick) {
			winner();
		} else if (score > computerPick) {
			loser();
		}
	});

	$("#button4").on("click", function() {

		score += crystal4;
		$("#userNumber").html("User: " + score);
		console.log("crystal 4: " + crystal4);
		console.log("my score: " + score);

		if (score === computerPick) {
			winner();
		} else if (score > computerPick) {
			loser();
		}
	});