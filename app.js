const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

	const randomNumber = getRandomNumber();

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
const colors = [
	"AliceBlue",
	"AntiqueWhite",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"Black",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"Burlywood",
	"CadetBlue",
	"Chartreuse",
];
