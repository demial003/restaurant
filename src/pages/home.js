import "../styles/style.css";
import logo from "../assets/imgs/logo.png";

const render = () => {
  const container = document.getElementById("content");
  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const myLogo = new Image();
  myLogo.classList.add("logo");
  myLogo.src = logo;
  header.appendChild(myLogo);

  // const title = document.createElement("h1");
  // title.classList.add("title");
  // title.textContent = "Food Spot";
  // header.appendChild(title);

  const nav = document.createElement("ul");
  const l1 = document.createElement("li");
  const l2 = document.createElement("li");
  const l3 = document.createElement("li");
  nav.classList.add("nav");
  nav.appendChild(l1);
  nav.appendChild(l2);
  nav.appendChild(l3);
  const home = document.createElement("a");
  home.textContent = "home";
  home.href = "#content";
  l1.appendChild(home);
  const menu = document.createElement("a");
  menu.textContent = "menu";
  menu.href = "#content";
  l2.appendChild(menu);
  const contact = document.createElement("a");
  contact.textContent = "contact";
  contact.href = "#content";
  l3.appendChild(contact);
  header.appendChild(nav);
};

export default render;
