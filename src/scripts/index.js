import "../styles/variables.css";
import "../styles/reset.css";
import { homePage } from "./homepage.js";
import { menu } from "./menu.js";
import { about } from "./about.js";


window.onload = homePage;

const headerTitle = document.querySelector("h1");
const homepage = document.querySelector(".home");
const menupage = document.querySelector(".menu");
const aboutpage = document.querySelector(".about");

headerTitle.addEventListener("click", homePage);
homepage.addEventListener("click", homePage);
menupage.addEventListener("click", menu);
aboutpage.addEventListener("click", about);