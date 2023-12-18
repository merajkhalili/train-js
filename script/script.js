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
