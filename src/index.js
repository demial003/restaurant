import renderHome from "./pages/home.js";
import renderMenu from "./pages/menu.js";
import renderNav from "./pages/nav.js";

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
