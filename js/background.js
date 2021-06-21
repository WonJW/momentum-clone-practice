const images = [
    "darksand.jpg",
    "boat.png",
    "castle.png",
    "horse.jpg",
    "crescent.jpg",
    "mountain.jpg",
    "northstar.jpg",
    "beach.png",
    "sky.png",
    "sunsetmountain.png"
];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);