import { createComponent } from "./helpers";
import { header } from "./common";


export const peerPage = () => {
  let root = document.getElementById("page-root");
  header(root, "Camera");
  
  let contentdiv = createComponent("div", {class: "content"}, null);
    mainButtons(contentdiv);

  root.appendChild(contentdiv);
};


const mainButtons = (root) => {
  let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, root);
    let camerabuttons1 = createComponent("div", {class: "camera-buttons"}, null, buttonsdiv);
      createComponent("button", {id:"frontPeerBtn", class:"connection"}, "Front Camera", camerabuttons1);
      createComponent("button", {id:"backPeerBtn", class:"connection"}, "Back Camera", camerabuttons1);
    createComponent("button", {id: "peerConnBtn", onclick: "controller.videoTransfer()"}, "Transfer video to host", buttonsdiv);
    createComponent("button", {id: "peerDisConnBtn"}, "Close Connection", buttonsdiv);
    createComponent("button", {id: "helpBtn"}, "Help", buttonsdiv);
  root.appendChild(buttonsdiv);
};
