import { createComponent } from "./helpers";

export const indexPage = () => {
  let root = document.getElementById("page-root");

  let headerdiv = createComponent("div", {class: "header"}, null, root);
    createComponent("h1", {}, "Robot Controller", headerdiv);

  let contentdiv = createComponent("div", {class: "content"}, null, root);
    let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, contentdiv);
      let joysticklink = createComponent("a", {href: "joystick.html"}, null, buttonsdiv);
        createComponent("button", {}, "Joystick", joysticklink);
      let lineLink = createComponent("a", {href: "host.html"}, null, buttonsdiv);
        createComponent("button", {}, "Self-driving", lineLink);
};