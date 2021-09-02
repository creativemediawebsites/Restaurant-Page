function createContact() {
    let base = document.createElement('div');
    let image = document.createElement('img');
    image.src = './images/contact.jpg'
    image.classList.add("image");
    base.appendChild(image);

    return image
}

function loadContact() {
   let mainX = document.querySelector(".main");
   mainX.textContent = "";
   mainX.appendChild(createContact());
}

export default loadContact;