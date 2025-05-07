import "../styles/style.css";

const render = () => {
  const container = document.getElementById("content");

  const contact = document.createElement("div");
  contact.classList.add("contact");
  container.appendChild(contact);

  const contactImg = document.createElement("div");
  contactImg.classList.add("contactImg");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactInfo");

  contact.appendChild(contactImg);
  contact.appendChild(contactInfo);
};

export default render;
