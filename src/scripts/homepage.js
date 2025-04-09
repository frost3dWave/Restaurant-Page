import "../styles/homepage.css";
import burgerImage from "../assets/images/burger.png";

export function homePage(){
    const divContent = document.querySelector("#content"); 

    divContent.innerHTML = "";

    const homepageWrapper = document.createElement("section");
    homepageWrapper.classList.add("homepage-wrapper");
    
    const newSection = document.createElement("section");
    newSection.classList.add("restaurant-Info");
    
    const topHeading = document.createElement("h2");
    topHeading.classList.add("restaurant-title");
    topHeading.textContent = "Enjoy Classic Fast Food";
    
    const pageDescription = document.createElement("p");
    pageDescription.classList.add("restaurant-desc"); 
    pageDescription.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum at dolore facilis qui? Quaerat illum qui ullam quas iure ducimus eaque!";
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Buy Now";
    
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About US";
    
    buttonContainer.appendChild(buyBtn);
    buttonContainer.appendChild(aboutBtn);
    
    newSection.appendChild(topHeading);
    newSection.appendChild(pageDescription);
    newSection.appendChild(buttonContainer);
    
    const homePageImage = document.createElement("img");
    homePageImage.src = burgerImage;
    
    homepageWrapper.appendChild(homePageImage);
    homepageWrapper.appendChild(newSection);

    divContent.appendChild(homepageWrapper);
};