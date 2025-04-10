import "../styles/about.css";

export function about(){
    const divContent = document.querySelector("#content"); 

    divContent.innerHTML = "";

    const aboutWrapper = document.createElement("section");
    aboutWrapper.classList.add("about-wrapper");

 
    const aboutContentOne = document.createElement("div");
    aboutContentOne.classList.add("about-content-one");
    aboutContentOne.classList.add("container");
 
    const aboutContentOneHeading = document.createElement("h2");
    aboutContentOneHeading.textContent = "Some Headline for about";

    const aboutContentOneDesc = document.createElement("p");
    aboutContentOneDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";

    aboutContentOne.append(aboutContentOneHeading, aboutContentOneDesc);
    
    
    const aboutContentTwo = document.createElement("div");
    aboutContentTwo.classList.add("about-content-two");
    aboutContentTwo.classList.add("container");


    const aboutContentTwoHeading = document.createElement("h2");
    aboutContentTwoHeading.textContent = "Some Other Headline for about";

    const aboutContentTwoDesc = document.createElement("p");
    aboutContentTwoDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex consequuntur ad soluta eveniet";

    aboutContentTwo.append(aboutContentTwoHeading, aboutContentTwoDesc);


    aboutWrapper.append(aboutContentOne, aboutContentTwo);
    
    
    divContent.appendChild(aboutWrapper);
}