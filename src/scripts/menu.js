import "../styles/menu.css";
import burgerImage from "../assets/images/burger.png";
import cookiesImage from "../assets/images/cookies.png";
import noodleImage from "../assets/images/noodle-lomein.png";
import padThaiImage from "../assets/images/pad-thai.png";
import pizzaImage from "../assets/images/pizaa.png";
import tacosImage from "../assets/images/tacos.png";

export function menu(){

    const divContent = document.querySelector("#content"); 

    divContent.innerHTML = "";

    const newSection = document.createElement("section");
    newSection.classList.add("menu-page");

    const subHeading = document.createElement("h2");
    subHeading.classList.add("menu-heading");
    const subHeadingStylizedWord = document.createElement("span");
    subHeadingStylizedWord.classList.add("stylized");
    subHeadingStylizedWord.textContent = "Regular";

    // Clear the heading's content first
    subHeading.textContent = "";

    // Append text and the span element in the right order
    subHeading.append("Our ",subHeadingStylizedWord, " Menu");

    // menu items container
    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");


    // for menu items
    // item one
    const menuItemBurger = document.createElement("div");

    const menuItemBurgerHeading = document.createElement("h3");
    menuItemBurgerHeading.textContent = "Classic Cheese Burger";

    const menuItemBurgerDesc = document.createElement("p");
    menuItemBurgerDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";

    const BurgerPriceBuybtnWrapper = document.createElement("div");
    const burgerPrice = document.createElement("p");
    burgerPrice.textContent = "$4.40";

    const burgerBuyBtn = document.createElement("button");
    burgerBuyBtn.textContent = "Buy Now";


    const menuItemBurgerImage = document.createElement("img");
    menuItemBurgerImage.src = burgerImage;
    
    
    BurgerPriceBuybtnWrapper.append(burgerPrice, burgerBuyBtn);

    menuItemBurger.append(menuItemBurgerHeading, menuItemBurgerDesc, BurgerPriceBuybtnWrapper, menuItemBurgerImage);


    //item two
    const menuItemCookies = document.createElement("div");
    const menuItemCookiesHeading = document.createElement("h3");
    menuItemCookiesHeading.textContent = "Homemade Cookies";

    const menuItemCookiesDesc = document.createElement("p");
    menuItemCookiesDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";

    const cookiesPriceBuybtnWrapper = document.createElement("div");
    const cookiesPrice = document.createElement("p");
    cookiesPrice.textContent = "$2.20";


    const cookiesBuyBtn = document.createElement("button");
    cookiesBuyBtn.textContent = "Buy Now";

    const menuItemCookiesImage = document.createElement("img");
    menuItemCookiesImage.src = cookiesImage;
    
    
    cookiesPriceBuybtnWrapper.append(cookiesPrice, cookiesBuyBtn);

    menuItemCookies.append(menuItemCookiesHeading, menuItemCookiesDesc, cookiesPriceBuybtnWrapper, menuItemCookiesImage);

    // item three
    const menuItemNoodle = document.createElement("div");
    const menuItemNoodleHeading = document.createElement("h3");
    menuItemNoodleHeading.textContent = "Lo Mein Noodles";


    const menuItemNoodleDesc = document.createElement("p");
    menuItemNoodleDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const noodlePriceBuybtnWrapper = document.createElement("div");
    const noodlePrice = document.createElement("p");
    noodlePrice.textContent = "$3.20";

    const noodleBuyBtn = document.createElement("button");
    noodleBuyBtn.textContent = "Buy Now";

    const menuItemNoodleImage = document.createElement("img");
    menuItemNoodleImage.src = noodleImage;
    
    
    noodlePriceBuybtnWrapper.append(noodlePrice, noodleBuyBtn);

    menuItemNoodle.append(menuItemNoodleHeading, menuItemNoodleDesc, noodlePriceBuybtnWrapper, menuItemNoodleImage);

    // item four
    const menuItemPadThai = document.createElement("div");
    const menuItemPadThaiHeading = document.createElement("h3");
    menuItemPadThaiHeading.textContent = "Pad Thai Noodles";


    const menuItemPadThaiDesc = document.createElement("p");
    menuItemPadThaiDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const padThaiPriceBuybtnWrapper = document.createElement("div");
    const padThaiPrice = document.createElement("p");
    padThaiPrice.textContent = "$4.20";

    const padThaiBuyBtn = document.createElement("button");
    padThaiBuyBtn.textContent = "Buy Now";

    const menuItemPadThaiImage = document.createElement("img");
    menuItemPadThaiImage.src = padThaiImage;
    
    
    padThaiPriceBuybtnWrapper.append(padThaiPrice, padThaiBuyBtn);

    menuItemPadThai.append(menuItemPadThaiHeading, menuItemPadThaiDesc, padThaiPriceBuybtnWrapper, menuItemPadThaiImage);


    // item five
    const menuItemPizza = document.createElement("div");
    const menuItemPizzaHeading = document.createElement("h3");
    menuItemPizzaHeading.textContent = "Pepperoni Pizza";


    const menuItemPizzaDesc = document.createElement("p");
    menuItemPizzaDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const pizzaPriceBuybtnWrapper = document.createElement("div");
    const pizzaPrice = document.createElement("p");
    pizzaPrice.textContent = "$5.20";

    const pizzaBuyBtn = document.createElement("button");
    pizzaBuyBtn.textContent = "Buy Now";

    const menuItemPizzaImage = document.createElement("img");
    menuItemPizzaImage.src = pizzaImage;
    
    
    pizzaPriceBuybtnWrapper.append(pizzaPrice, pizzaBuyBtn);

    menuItemPizza.append(menuItemPizzaHeading, menuItemPizzaDesc, pizzaPriceBuybtnWrapper, menuItemPizzaImage);


    // item six
    const menuItemTacos = document.createElement("div"); 
    const menuItemTacosHeading = document.createElement("h3");
    menuItemTacosHeading.textContent = "Soft Chicken Tacos";


    const menuItemTacosDesc = document.createElement("p");
    menuItemTacosDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const tacosPriceBuybtnWrapper = document.createElement("div");
    const tacosPrice = document.createElement("p");
    tacosPrice.textContent = "$3.40";

    const tacosBuyBtn = document.createElement("button");
    tacosBuyBtn.textContent = "Buy Now";

    const menuItemTacosImage = document.createElement("img");
    menuItemTacosImage.src = tacosImage;
    
    
    tacosPriceBuybtnWrapper.append(tacosPrice, tacosBuyBtn);

    menuItemTacos.append(menuItemTacosHeading, menuItemTacosDesc, tacosPriceBuybtnWrapper, menuItemTacosImage);


    menuList.append(menuItemBurger, menuItemCookies, menuItemNoodle, menuItemPadThai, menuItemPizza, menuItemTacos);


    newSection.append(subHeading, menuList);

    divContent.appendChild(newSection);
};