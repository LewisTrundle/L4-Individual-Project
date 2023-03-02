import { createComponent } from "./helpers";
import { header } from "./common";
import { openCloseModal, addModals } from "./modals";


export const joystickPage = () => {
  let root = document.getElementById("page-root");
  header(root, "Joystick Controller");
  
  let contentdiv = createComponent("div", {class: "content"}, null);
    joystickButtons(contentdiv);
    insertJoystick(contentdiv);
    addModals(contentdiv, "joystick");

  root.appendChild(contentdiv);

  openCloseModal();
};


const insertJoystick = (root) => {
  let joystickdiv = createComponent("div", {class: "joystick"}, null, root);
    createComponent("div", {class: "static highlight highlight-javascript active"}, null, joystickdiv);
    let zonejoystick = createComponent("div", {id: "zone_joystick"}, null, joystickdiv);
      createComponent("div", {id: "joyzone", class: "zone static active"}, null, zonejoystick);
  root.append(joystickdiv);
};


const joystickButtons = (root) => {
  let buttonsdiv = createComponent("div", {class: "buttons"}, null, root);
    createComponent("p", {id: "mappingText"}, "Angle-Motor Mapping: NOT SET!", buttonsdiv);
    createComponent("p", {id: "sendCodeSpeedText"}, "ERROR", buttonsdiv);
    createComponent("button", {onclick: "controller.connect()"}, "Connect", buttonsdiv);
    createComponent("button", {onclick:"controller.disconnect()"}, "Disconnect", buttonsdiv);
    createComponent("button", {id: "helpBtn"}, "Help", buttonsdiv);
  root.appendChild(buttonsdiv);
};