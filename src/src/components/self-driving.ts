import { createComponent } from "./helpers";
import { header, buttons } from "./common";
import { openCloseModal, addModals } from "./modals";

export const selfDrivingPage = () => {
  let root = document.getElementById("page-root");
  header(root, "Self Driving Controller");

  let contentdiv = createComponent("div", {class: "content"}, null);
    buttons(contentdiv);
    let joystickdiv = createComponent("div", {id: "joystick", class: "joystick"}, null, contentdiv);

    addModals(contentdiv)

  root.appendChild(contentdiv);

  openCloseModal();
};