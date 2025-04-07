import "../styles/homepage.css";
import burgerImage from "../assets/images/burger.png";

export function homePage(){
    const divContent = document.querySelector("#content"); 
    
    const newSection = document.createElement("section");
    newSection.classList.add("restaurant-Info");
    
    const topHeading = document.createElement("h2");
    topHeading.classList.add("restaurant-title");
    topHeading.textContent = "Restaurant headline";
    
    const pageDescription = document.createElement("p");
    pageDescription.classList.add("restaurant-desc"); 
    pageDescription.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum at dolore facilis qui? Quaerat illum qui ullam quas iure ducimus eaque! Vero aliquam voluptatibus quaerat libero dolore non quidem corporis";
    
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Buy Now";
    
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About US";
    
    newSection.appendChild(topHeading);
    newSection.appendChild(pageDescription);
    newSection.appendChild(buyBtn);
    newSection.appendChild(aboutBtn);
    
    const homePageImage = document.createElement("img");
    homePageImage.src = burgerImage;
    
    divContent.appendChild(newSection);
    divContent.appendChild(homePageImage);
};