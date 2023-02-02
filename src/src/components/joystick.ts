import { createComponent } from "./helpers";
import { header, buttons } from "./common";
import { openCloseModal, addModals } from "./modals";


export const joystickPage = () => {
  let root = document.getElementById("page-root");
  header(root, "Joystick Controller");
  
  let contentdiv = createComponent("div", {class: "content"}, null);
    buttons(contentdiv);
    insertJoystick(contentdiv);
    addModals(contentdiv);

  root.appendChild(contentdiv);

  openCloseModal();
};


function insertJoystick(root) {
  let joystickdiv = createComponent("div", {class: "joystick"}, null, root);
    createComponent("div", {class: "static highlight highlight-javascript active"}, null, joystickdiv);
    let zonejoystick = createComponent("div", {id: "zone_joystick"}, null, joystickdiv);
      createComponent("div", {id: "joyzone", class: "zone static active"}, null, zonejoystick);
  root.append(joystickdiv);
}