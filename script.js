function uploadImage() {

let input = document.getElementById("imageUpload");

if(input.files.length == 0) {
alert("Select an image first");
return;
}

let file = input.files[0];

let reader = new FileReader();

reader.onload = function(e) {

let img = document.createElement("img");

img.src = e.target.result;

img.onclick = function() {
openFullscreen(img);
};

document.getElementById("gallery").appendChild(img);

};

reader.readAsDataURL(file);

}

function openFullscreen(img) {

let fullscreen = document.getElementById("fullscreen");
let fullscreenImg = document.getElementById("fullscreenImg");

fullscreen.style.display = "flex";
fullscreenImg.src = img.src;

}

function closeFullscreen() {

document.getElementById("fullscreen").style.display = "none";

}

function bookAppointment(event) {

event.preventDefault();

document.getElementById("bookingMessage").innerText =
"Appointment request sent! We will contact you soon.";

}