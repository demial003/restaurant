import "../styles/style.css";

const render = () => {
  const container = document.getElementById("content");

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
