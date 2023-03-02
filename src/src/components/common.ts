import { createComponent } from "./helpers";

export const header = (root: any, pageTitle: string) => {
  let headerdiv = createComponent("div", {class: "header"}, null);;
    let backlink = createComponent("a", {href: "index.html"}, null, headerdiv);
      createComponent("img", {id: "back", src: "./images/back_button.svg", alt: "back button"}, null, backlink);
    createComponent("h1", {}, pageTitle, headerdiv);
    let headerbuttonsdiv = createComponent("div", {class: "header-buttons"}, null, headerdiv);
    createComponent("img", {src: "./images/battery.svg", alt: "battery", onclick: "controller.getBattery()"}, null, headerbuttonsdiv);
    let diagnosticLink = createComponent("button", {id: "settingsBtn"}, null, headerbuttonsdiv);
      createComponent("img", {src: "./images/settings.svg", alt: "settings"}, null, diagnosticLink);;
  root.appendChild(headerdiv);
};
