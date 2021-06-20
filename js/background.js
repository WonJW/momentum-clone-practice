const images = [
    "japan.jpg",
    "korea.jpg",
    "london.jpg",
    "ocean.jpg",
    "sand.jpg",
    "stadium.jpg",
    "sunset.jpg",
    "temple.jpg",
    "venice.jpg",
    "world.jpg"
];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);