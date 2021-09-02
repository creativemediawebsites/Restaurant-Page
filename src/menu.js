function createMenu() {
    let base = document.createElement('div');
    let image = document.createElement('img');
    image.src = './images/menu.jpg'
    image.classList.add("image");
    base.appendChild(image);

    return image
}

function loadMenu() {
   let mainX = document.querySelector(".main");
   mainX.textContent = "";
   mainX.appendChild(createMenu());
}

export default loadMenu;