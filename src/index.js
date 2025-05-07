import renderHome from "./pages/home.js";
import renderMenu from "./pages/menu.js";
import renderNav from "./pages/nav.js";
import renderContact from "./pages/contact.js";

renderNav();

renderHome();

const clearContent = () => {
  const div = document.getElementById("content");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  clearContent();
  renderHome();
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  clearContent();
  renderMenu();
});

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  clearContent();
  renderContact();
});
