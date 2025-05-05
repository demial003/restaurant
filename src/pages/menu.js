const render = () => {
  const container = document.getElementById("content");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  container.appendChild(menu);
};

export default render;
