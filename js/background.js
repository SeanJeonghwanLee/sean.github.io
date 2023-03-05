const images = ["000.jpg", "001.jpg", "002.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //prepend는 맨 앞에 추가, appendChild는 맨 뒤에 추가