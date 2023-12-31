var getAllButtons = document.querySelectorAll(".drum");

for (var i = 0; i < getAllButtons.length; i++) {
	getAllButtons[i].addEventListener("click", function () {
		playAudio(this.innerHTML);

		addAnimation(this.innerHTML);
	});
}

document.addEventListener("keydown", function (keypress) {
	playAudio(keypress.key.toLowerCase());

	addAnimation(keypress.key.toLowerCase());
});

function playAudio(event) {
	switch (event) {
		case "w":
			var audio = new Audio("./sounds/crash.mp3");
			audio.play();

			break;

		case "a":
			var audio = new Audio("./sounds/kick-bass.mp3");
			audio.play();

			break;

		case "s":
			var audio = new Audio("./sounds/snare.mp3");
			audio.play();

			break;

		case "d":
			var audio = new Audio("./sounds/tom-1.mp3");
			audio.play();
			break;

		case "j":
			var audio = new Audio("./sounds/tom-2.mp3");
			audio.play();
			break;

		case "k":
			var audio = new Audio("./sounds/tom-3.mp3");
			audio.play();
			break;

		case "l":
			var audio = new Audio("./sounds/tom-4.mp3");
			audio.play();
			break;

		default:
			console.log(event);
	}
}

function addAnimation(currentKey) {
	var activeKey = document.querySelector("." + currentKey);

	activeKey.classList.add("pressed");

	setTimeout(function () {
		activeKey.classList.remove("pressed");
	}, 200);
}
