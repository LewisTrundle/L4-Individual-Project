import { createComponent } from "./helpers";

export const header = (root: any, pageTitle: string) => {
  let headerdiv = createComponent("div", {class: "header"}, null);;
    let backlink = createComponent("a", {href: "index.html"}, null, headerdiv);
      createComponent("img", {id: "back", src: "./images/back_button.svg", alt: "back button"}, null, backlink);
    createComponent("h1", {}, pageTitle, headerdiv);
    let headerbuttonsdiv = createComponent("div", {class: "header-buttons"}, null, headerdiv);
    createComponent("img", {src: "./images/battery.svg", alt: "battery", onclick: "robot.getBattery()"}, null, headerbuttonsdiv);
    let diagnosticLink = createComponent("button", {id: "settingsBtn"}, null, headerbuttonsdiv);
      createComponent("img", {src: "./images/settings.svg", alt: "settings"}, null, diagnosticLink);;
  root.appendChild(headerdiv);
};


export const buttons = (root) => {
  let buttonsdiv = createComponent("div", {class: "buttons"}, null, root);
    createComponent("p", {id: "mappingText"}, "Angle-Motor Mapping: NOT SET!", buttonsdiv);
    createComponent("p", {id: "sendCodeSpeedText"}, "ERROR", buttonsdiv);
    createComponent("button", {onclick: "robot.connect()"}, "Connect", buttonsdiv);
    createComponent("button", {onclick:"robot.disconnect()"}, "Disconnect", buttonsdiv);
    createComponent("button", {id: "helpBtn"}, "Help", buttonsdiv);
  root.appendChild(buttonsdiv);
};