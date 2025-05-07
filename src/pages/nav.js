import logo from "../assets/imgs/logo.PNG";
import "../styles/style.css";

const render = () => {
  const header = document.getElementById("header");

  const myLogo = new Image();
  myLogo.classList.add("logo");
  myLogo.src = logo;
  header.appendChild(myLogo);

  const nav = document.getElementById("nav");

  const home = document.createElement("button");
  home.textContent = "home";
  home.id = "homeBtn";

  const menu = document.createElement("button");
  menu.textContent = "menu";
  menu.id = "menuBtn";

  const contact = document.createElement("button");
  contact.textContent = "contact";
  contact.id = "contactBtn";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  header.appendChild(nav);
};

export default render;
