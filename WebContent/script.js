let movie = 5.00;
let paper = 1.00;
let apple = 10.00;
let totalApple;
let totalPaper;
let totalMovie;
let cart = 0;
let makeList = [ ];

let addApple = document.getElementById("addApple");
addApple.addEventListener("click", (event) => {
	cart = cart + 10.00;
	console.log(cart);
	makeList.push("Apple");
	console.log(makeList);
});

let addPaper = document.getElementById("addPaper");
addPaper.addEventListener("click", (event) => {
	cart = cart + 1.00;
	console.log(cart);
	makeList.push("Paper");
	console.log(makeList);
});

let addMovie = document.getElementById("addMovie");
addMovie.addEventListener("click", (event) => {
	cart = cart + 5.00;
	console.log(cart);
	makeList.push("Movie");
	console.log(makeList);
});

let totalShoppingCart = document.getElementById("totalShoppingCart");
totalShoppingCart.addEventListener("click", (event) => {
	
	for (let j = 0; j < makeList.length; j++) {
		console.log(makeList[j]);
		document.getElementById('two').innerHTML += makeList[j] + " <br>" ;
		console.log(makeList);
	}
	
	document.getElementById('three').innerHTML = "$" + cart + ".00";
	console.log(cart);
	console.log(makeList);
});





