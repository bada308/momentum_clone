const images = [
    "b0.jpg", "b1.jpg", "b2.jpg", "b3.jpg"
];


const choosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);