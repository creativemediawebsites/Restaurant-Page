import loadHome from "./home.js";
import loadContact from "./contact.js";
import loadMenu from "./menu.js";

function header() {
    const head = document.createElement('header')
    head.classList.add('header')
    const paragraph = document.createElement('h1')
    paragraph.textContent = "My fav Restaurant"

    head.appendChild(paragraph);
    head.appendChild(nav());
    
    return head;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    
    return main;
  }
    

function footer() {
    const foot = document.createElement('footer')
    foot.classList.add("footer");
    const textFooter = document.createElement('p')
    textFooter.textContent = "Copyright © 2021 nick"
    foot.appendChild(textFooter);
    
    return foot;
}

function nav() {
    const nav = document.createElement('nav')

    nav.classList.add("nav");
    
    const homeButton = document.createElement('button');
    homeButton.classList.add("button-nav")
    homeButton.textContent = "Home"
    homeButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();  
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add("button-nav")
    menuButton.textContent = "Menu"
    menuButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();  
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add("button-nav")
    contactButton.textContent = "Contact"
    contactButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();  
    })
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }


function initWebsite() {
    const content = document.getElementById("content");
    
    content.appendChild(header());
    content.appendChild(createMain());
    content.appendChild(footer());

    setActiveButton(document.querySelector(".button-nav"))
    loadHome();
}

export default initWebsite;