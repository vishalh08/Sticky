//getElementbyId()
// const colorList = document.getElementById("colors");
// console.log(colorList);

// //querySelector()-Id
// const colorListQuerySelectorId = document.querySelector("#colors");
// console.log(colorListQuerySelectorId);

// //querySelector()-Tag name
// const colorListQuerySelectorTagName = document.querySelector("ul");
// console.log(colorListQuerySelectorTagName);

// //querySelector()-class name
// const colorListQuerySelectorClassName = document.querySelector(".primary");
// console.log(colorListQuerySelectorClassName);


// //querySelectorAll()-Tag name- returns array
// const colorListQuerySelectorAllTagName = document.querySelectorAll("li");
// console.log(colorListQuerySelectorAllTagName);


// //querySelectorAll()-Tag name specific- returns array
// const colorListQuerySelectorAllTagNameSpecific = document.querySelectorAll("#colors li");
// console.log(colorListQuerySelectorAllTagNameSpecific);

// //same as above

// const colorListQuerySelectorAllTagNameUsingMultiple = colorList.querySelectorAll("li");
// console.log(colorListQuerySelectorAllTagNameUsingMultiple);

//DIR
//console.dir
//There are MANY properties and mehods to explore onc an element is selected
// const introParagraph = document.querySelector(".introduction");
// console.dir(introParagraph);//[object HTMLParagraphElement]->[object HTMLElement]
// console.log(introParagraph.clientHeight);

// const theName = document.querySelector(".name");
// console.log(theName.getAttribute("title"));
// console.log(theName.getAttribute("class"));
// console.log(theName.getAttribute("for"));
// console.log(theName.hasAttribute("class"));
// console.log(theName.hasAttribute("for"));

// const skillList = document.querySelector(".skills")
// const items = skillList.children // LIVE HTML

// const myList = document.querySelector(".skills");
// const css = document.querySelector(".skills li:nth-of-type(2)");
// console.log(css.parentElement.parentElement.parentElement.parentElement);

// const css = document.querySelector(".skills li:nth-of-type(2)");
// console.log(css.closest(".card"));

// const myText = document.querySelector(".name");
// console.log(myText.textContent.trim())

//UPdating the Elements Attribute

// const theName = document.querySelector(".name");
// theName.setAttribute("class", "name coffee");
// theName.className= "name coffee";

// const myList = document.querySelector(".skills").lastElementChild;
// myList.style.color = "orange"
// myList.style.backgroundColor = "#f0f0f0"


// Updating the inner html property 

// const skillList = document.querySelector(".skills");
// skillList.innerHTML = `
// <li>bmw</li>
// <li>toyota</li>
// <li>honda</li>
// `;

// const skillList = document.querySelector(".skills");
// skillList.insertAdjacentHTML("beforeend", "<li>java</li>");


// text content- update the text content of an element
// const skillList = document.querySelector(".skills li");
// skillList.textContent= "ruby"

//Updating Class of an element
// const newclassName = document.querySelector(".name");
// newclassName.classList.add("coffee")
// newclassName.classNmea +="coffee"

/* <div class="card">
<div class="name" title="I am Vishal ">Vishal</div>
<ul class="skills">
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  <li>TS</li>
</ul>
</div> */

//Block
// const skills = ["HTML", "CSS", "JS"]

// const card = document.createElement("div");
// const nameElement = document.createElement("div");
// const skillsListElement = document.createElement("ul");


// card.classList.add("card");
// document.body.appendChild(card);

// nameElement.classList.add("name");
// nameElement.setAttribute("title", "I am Vsihal");
// nameElement.textContent = "Vishal"

// for (const skill of skills) {
//     const skillElement = document.createElement("li")
//     skillElement.textContent = skill;
//     skillsListElement.append(skillElement)
// }

// skillsListElement.classList.add("skills");

// card.append(nameElement, skillsListElement); 

//Block end

// const skillsList = document.querySelector(".skills")
// const css = skillsList.querySelector("li:nth-of-type(2)")

// while (skillsList.lastChild) {
//     skillsList.removeChild(skillsList.lastChild)
// }

// Adding events to HTML element

const usernameInput = document.querySelector(".username");
const btnCheck = document.querySelector(".check-username");

btnCheck.addEventListener("click", function () {
  const username = usernameInput.value;
  const usedUsernames = ["dom", "dom72", "dcode21"]

  if (username.length === 0) {
    alert("pleaee enter a username!");
    return;
  }

  if (usedUsernames.includes(username)) {
    alert("Sorry this username is taken.")
  }
  else {
    alert("username available!")
  }
})

usernameInput.addEventListener("change", function () {
  alert("you changed the username")
})