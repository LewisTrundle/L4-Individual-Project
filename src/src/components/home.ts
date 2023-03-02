import { createComponent } from "./helpers";
import { createModal, helpModalContent, openCloseModal } from "./modals";

export const indexPage = () => {
  let root = document.getElementById("page-root");

  let headerdiv = createComponent("div", {class: "header"}, null, root);
    createComponent("h1", {}, "Robot Controller", headerdiv);

  let contentdiv = createComponent("div", {class: "content"}, null, root);
    let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, contentdiv);
      let joysticklink = createComponent("a", {href: "joystick.html"}, null, buttonsdiv);
        createComponent("button", {}, "Joystick", joysticklink);
      let selfdriveLink = createComponent("a", {href: "host.html"}, null, buttonsdiv);
        createComponent("button", {}, "Self-driving", selfdriveLink);
      let peerLink = createComponent("a", {href: "peer.html"}, null, buttonsdiv);
        createComponent("button", {}, "Peer device", peerLink);
      createComponent("button", {id: "helpBtn"}, "Help", buttonsdiv);
    
    let helpModal = createModal(contentdiv, "helpModal");
      helpModalContent(helpModal, "controller");

  openCloseModal();
};