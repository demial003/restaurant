const render = () => {
  const container = document.getElementById("content");

  const menu = document.createElement("div");
  menu.classList.add("menu");
  container.appendChild(menu);

  const createMenuItem = (name) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add(name);
    menu.appendChild(item);
  };

  for (let i = 0; i < 9; i++) {
    createMenuItem("pizza");
  }
};

export default render;
