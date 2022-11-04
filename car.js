// // Using the quick selector linking the span with class of colors to the elements (variable) in the JS
// const redColor = document.querySelector(".red");
// const blackColor = document.querySelector(".black");
// const imageCard = document.querySelector("product-image");
// const feedbackBtn = document.querySelector(".feedback");

// // Using getElementsByClassName
// const grayColor = document.getElementsByClassName(".gray");

// // Using getElementById
// const cartButton = document.getElementById("button");

// // Using getElementByTagName
// const itemTag = document.getElementsByTagName("h3")[0];

// // sing event handler for the red car
// redColor.addEventListener("click", function () {
//     cartButton.style.backgroundColor = "red";
//     itemTag.style.backgroundColor = "red";
//     imageCard.style.backgroundImage = 'url("benz2.jpg")';
//     });

// // Making the gray car
// grayColor[0].addEventListener("click", function () {
//     cartButton.style.backgroundColor = "gray";
//     itemTag.style.backgroundColor = "gray";
//     imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")';
//     });



// 1. Change color of car and addToCart button color when a color is
//selected
// - Selecting Elements
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
// Modifying Elements
// - Add Event Listeners
// - Red Color
redColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("benz3.png")';
});
// - Gray Color
grayColor[0].addEventListener("click", function() {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("benz2.png")';
});
// - Black Color
blackColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("benz1.png")';
});
// Button Click Implementation
// - Cart Button
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);
// - Feedback Button
const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
