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
    menuItemBurger.classList.add("menu-item-wrapper");

    const menuItemBurgerHeading = document.createElement("h3");
    menuItemBurgerHeading.textContent = "Classic Cheese Burger";

    const menuItemBurgerDesc = document.createElement("p");
    menuItemBurgerDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";

    const BurgerPriceBuybtnWrapper = document.createElement("div");
    BurgerPriceBuybtnWrapper.classList.add("price-buyBtn-wrapper");
    const burgerPrice = document.createElement("p");
    burgerPrice.textContent = "$11.99";

    const burgerBuyBtn = document.createElement("button");
    burgerBuyBtn.textContent = "Buy Now";


    const menuItemBurgerImage = document.createElement("img");
    menuItemBurgerImage.src = burgerImage;
    
    
    BurgerPriceBuybtnWrapper.append(burgerPrice, burgerBuyBtn);

    menuItemBurger.append(menuItemBurgerImage, menuItemBurgerHeading, menuItemBurgerDesc, BurgerPriceBuybtnWrapper);


    //item two
    const menuItemCookies = document.createElement("div");
    menuItemCookies.classList.add("menu-item-wrapper");
    
    const menuItemCookiesHeading = document.createElement("h3");
    menuItemCookiesHeading.textContent = "Homemade Cookies";

    const menuItemCookiesDesc = document.createElement("p");
    menuItemCookiesDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";

    const cookiesPriceBuybtnWrapper = document.createElement("div");
    cookiesPriceBuybtnWrapper.classList.add("price-buyBtn-wrapper");
    const cookiesPrice = document.createElement("p");
    cookiesPrice.textContent = "$4.99";


    const cookiesBuyBtn = document.createElement("button");
    cookiesBuyBtn.textContent = "Buy Now";

    const menuItemCookiesImage = document.createElement("img");
    menuItemCookiesImage.src = cookiesImage;
    
    
    cookiesPriceBuybtnWrapper.append(cookiesPrice, cookiesBuyBtn);

    menuItemCookies.append(menuItemCookiesImage, menuItemCookiesHeading, menuItemCookiesDesc, cookiesPriceBuybtnWrapper);

    // item three
    const menuItemNoodle = document.createElement("div");
    menuItemNoodle.classList.add("menu-item-wrapper");

    const menuItemNoodleHeading = document.createElement("h3");
    menuItemNoodleHeading.textContent = "Lo Mein Noodles";


    const menuItemNoodleDesc = document.createElement("p");
    menuItemNoodleDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const noodlePriceBuybtnWrapper = document.createElement("div");
    noodlePriceBuybtnWrapper.classList.add("price-buyBtn-wrapper");
    const noodlePrice = document.createElement("p");
    noodlePrice.textContent = "$24.99";

    const noodleBuyBtn = document.createElement("button");
    noodleBuyBtn.textContent = "Buy Now";

    const menuItemNoodleImage = document.createElement("img");
    menuItemNoodleImage.src = noodleImage;
    
    
    noodlePriceBuybtnWrapper.append(noodlePrice, noodleBuyBtn);

    menuItemNoodle.append(menuItemNoodleImage, menuItemNoodleHeading, menuItemNoodleDesc, noodlePriceBuybtnWrapper);

    // item four
    const menuItemPadThai = document.createElement("div");
    menuItemPadThai.classList.add("menu-item-wrapper");

    const menuItemPadThaiHeading = document.createElement("h3");
    menuItemPadThaiHeading.textContent = "Pad Thai Noodles";


    const menuItemPadThaiDesc = document.createElement("p");
    menuItemPadThaiDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const padThaiPriceBuybtnWrapper = document.createElement("div");
    padThaiPriceBuybtnWrapper.classList.add("price-buyBtn-wrapper");
    const padThaiPrice = document.createElement("p");
    padThaiPrice.textContent = "$43.19";

    const padThaiBuyBtn = document.createElement("button");
    padThaiBuyBtn.textContent = "Buy Now";

    const menuItemPadThaiImage = document.createElement("img");
    menuItemPadThaiImage.src = padThaiImage;
    
    
    padThaiPriceBuybtnWrapper.append(padThaiPrice, padThaiBuyBtn);

    menuItemPadThai.append(menuItemPadThaiImage, menuItemPadThaiHeading, menuItemPadThaiDesc, padThaiPriceBuybtnWrapper);


    // item five
    const menuItemPizza = document.createElement("div");
    menuItemPizza.classList.add("menu-item-wrapper");

    const menuItemPizzaHeading = document.createElement("h3");
    menuItemPizzaHeading.textContent = "Pepperoni Pizza";


    const menuItemPizzaDesc = document.createElement("p");
    menuItemPizzaDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const pizzaPriceBuybtnWrapper = document.createElement("div");
    pizzaPriceBuybtnWrapper.classList.add("price-buyBtn-wrapper");
    const pizzaPrice = document.createElement("p");
    pizzaPrice.textContent = "$5.20";

    const pizzaBuyBtn = document.createElement("button");
    pizzaBuyBtn.textContent = "Buy Now";

    const menuItemPizzaImage = document.createElement("img");
    menuItemPizzaImage.src = pizzaImage;
    
    
    pizzaPriceBuybtnWrapper.append(pizzaPrice, pizzaBuyBtn);

    menuItemPizza.append(menuItemPizzaImage, menuItemPizzaHeading, menuItemPizzaDesc, pizzaPriceBuybtnWrapper);


    // item six
    const menuItemTacos = document.createElement("div"); 
    menuItemTacos.classList.add("menu-item-wrapper");

    const menuItemTacosHeading = document.createElement("h3");
    menuItemTacosHeading.textContent = "Soft Chicken Tacos";


    const menuItemTacosDesc = document.createElement("p");
    menuItemTacosDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";


    const tacosPriceBuybtnWrapper = document.createElement("div");
    tacosPriceBuybtnWrapper.classList.add("price-buyBtn-wrapper");
    const tacosPrice = document.createElement("p");
    tacosPrice.textContent = "$7.99";

    const tacosBuyBtn = document.createElement("button");
    tacosBuyBtn.textContent = "Buy Now";

    const menuItemTacosImage = document.createElement("img");
    menuItemTacosImage.src = tacosImage;
    
    
    tacosPriceBuybtnWrapper.append(tacosPrice, tacosBuyBtn);

    menuItemTacos.append(menuItemTacosImage, menuItemTacosHeading, menuItemTacosDesc, tacosPriceBuybtnWrapper);


    menuList.append(menuItemBurger, menuItemCookies, menuItemNoodle, menuItemPadThai, menuItemPizza, menuItemTacos);


    newSection.append(subHeading, menuList);

    divContent.appendChild(newSection);
};