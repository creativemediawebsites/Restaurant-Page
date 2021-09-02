function createHome() {
    let base = document.createElement('div');
    let image = document.createElement('img');
    image.src = './images/restaurant.jpeg'
    image.classList.add("image");
    base.appendChild(image);

    return image
}

function loadHome() {
   let mainX = document.querySelector(".main");
   mainX.textContent = "";
   mainX.appendChild(createHome());
}

export default loadHome;