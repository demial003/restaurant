import "../styles/style.css";

const render = () => {
  const container = document.getElementById("content");

  const menu = document.createElement("div");
  menu.classList.add("menu");
  container.appendChild(menu);

  const createMenuItem = (name) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add(name);

    const itemImg = document.createElement("div");
    itemImg.classList.add("itemImg");

    const description = document.createElement("div");
    description.classList.add("description");

    menu.appendChild(item);
    item.appendChild(itemImg);
    item.appendChild(description);
  };

  for (let i = 0; i < 9; i++) {
    createMenuItem("pizza");
  }
};

export default render;
