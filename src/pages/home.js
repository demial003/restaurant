import "../styles/style.css";
import logo from "../assets/imgs/logo.PNG";

const render = () => {
  const container = document.getElementById("content");
  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const myLogo = new Image();
  myLogo.classList.add("logo");
  myLogo.src = logo;
  header.appendChild(myLogo);

  const nav = document.createElement("div");
  nav.classList.add("nav");

  const home = document.createElement("button");
  home.textContent = "home";

  const menu = document.createElement("button");
  menu.textContent = "menu";

  const contact = document.createElement("button");
  contact.textContent = "contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  header.appendChild(nav);

  const about = document.createElement("div");
  about.classList.add("about");
  about.textContent = "Welcome to Buki Bakes!";
  container.appendChild(about);

  const head = document.querySelector("head");
  const fav = document.createElement("link");
  fav.setAttribute("rel", "shortcut icon");
  fav.setAttribute("type", "image/png");
  fav.setAttribute("href", "../assets/imgs/fav.PNG");
  head.appendChild(fav);
};

export default render;
