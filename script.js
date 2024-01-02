/*

let h1title = document.getElementById("title");

let liItem = document.getElementsByClassName("li-item");

let liItern = document.getElementsByTagName("li-item");

console.log(liItem);

*/

/*

let h1Elem = document.getElementById("title");

h1Elem.getAttribute("id", "title-id");

*/

/*

let h1Elem = document.getElementById("title");

h1Elem.style.color = "red";

let Items = document.getElementsByClassName("li-item");

Items[2].style.fontSize = "2rem";
Items[2].style.color = "blue";

console.log(Items);

*/

// نحوه ی دسترسی به محتویات HTML

/*


let h1Elem = document.getElementById("title");

h1Elem.innerHTML = "خوش امدید";

h1Elem.style.color = "blue";
h1Elem.style.fontWeight = "normal";
h1Elem.style.fontSize = "3rem";

*/

//  کلیک کردن

/*

let h1Elem = document.getElementById("title");

function clickFunc() {
	h1Elem.style.color = "#049384";
}

*/

// تمرین کلیک

/*


let image = document.getElementById("image");
let button = document.getElementById("btnImage");

let image2 = false;

function clickFunc() {
	if (image2) {
		image.setAttribute("src", "../../Bulb -12.jpg");
		button.innerHTML = "روشن";
		image2 = false;
	} else {
		image.setAttribute("src", "../../6082664.jpg");
		button.innerHTML = "خاموش";
		image2 = true;
	}
}

*/

// مینی تمپلته LOGIN

/*

let userNameInput = document.querySelector(".userName");
let passwordInput = document.querySelector(".password");
let Modal = document.querySelector(".modal");

function dataClick() {
	let userNameValue = userNameInput.value;
	let passwordNameValue = passwordInput.value;

	console.log(userNameValue, passwordNameValue);

	if (userNameValue.length < 10 || passwordNameValue.length < 8) {
		Modal.innerHTML =
			"لطفا اطلاعات خود را درست وارد کنید ! پسورد باید شامل 8 کرکتر باشد و یوسر نیم باید 12 کرکتر باشد :(";
		Modal.style.display = "inline";
	} else {
		Modal.style.backgroundColor = "green";
		Modal.innerHTML = "اطلاعات شما با موفقیت انجام شد :)";
		Modal.style.display = "inline";
	}
	setTimeout(function () {
		Modal.style.display = "none";
	}, 4000);
}

let MessageUserName = document.querySelector(".title-username");
let MessagePassword = document.querySelector(".title-password");
let inputUserName = document.querySelector(".userName");
let inputPassword = document.querySelector(".password");

function clickFuncUsername() {
	if (inputUserName.value.length < 12) {
		MessageUserName.style.display = "inline";
	} else {
		MessageUserName.style.color = "green";
		MessageUserName.innerHTML = "UserName صحیح می باشد";
	}
}

function clickFuncPassword() {
	if (inputPassword.value.length < 8) {
		MessagePassword.style.display = "inline";
	} else {
		MessagePassword.style.color = "green";
		MessagePassword.innerHTML = "Password صحیح می باشد";
	}
}

function clickFocus() {
	console.log("focus");
}

function clickBlur() {
	console.log("Blur");
}

*/

// تمرین .addEventListener

/*

let h1Elem = document.querySelector(".db");

h1Elem.addEventListener("click", clickFunck);

function clickFunck() {
	console.log("clicket title");
}

*/

// تمرین Toggle

/*

let h1Elem = document.querySelector(".db");

h1Elem.addEventListener("click", function () {
	h1Elem.classList.toggle("db");
});

*/
