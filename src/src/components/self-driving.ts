import { createComponent } from "./helpers";
import { header } from "./common";
import { openCloseModal, addModals } from "./modals";

export const selfDrivingPage = () => {
  let root = document.getElementById("page-root");
  header(root, "Self Driving Controller");

  let contentdiv = createComponent("div", {class: "content"}, null);
    mainButtons(contentdiv);
    video(contentdiv);

    addModals(contentdiv)

  root.appendChild(contentdiv);
  openCloseModal();
};


const mainButtons = (root) => {
  let buttonsdiv = createComponent("div", {class: "buttons"}, null, root);
    let camerabuttons1 = createComponent("div", {class: "camera-buttons"}, null, buttonsdiv);
      createComponent("button", {id:"frontHostBtn", class:"connection"}, "Host Front Camera", camerabuttons1);
      createComponent("button", {id:"backHostBtn", class:"connection"}, "Host Back Camera", camerabuttons1);
    let camerabuttons2 = createComponent("div", {class: "camera-buttons"}, null, buttonsdiv);
      createComponent("button", {id:"frontPeerBtn", class:"connection"}, "Peer Front Camera", camerabuttons2);
      createComponent("button", {id:"backPeerBtn", class:"connection active"}, "Peer Back Camera", camerabuttons2);
    createComponent("button", {}, "Connect to Camera", buttonsdiv);
    createComponent("button", {onclick: "robot.connect()"}, "Connect to Robot", buttonsdiv);
    createComponent("button", {onclick:"robot.disconnect()"}, "Disconnect", buttonsdiv);
    createComponent("button", {id: "helpBtn"}, "Help", buttonsdiv);
  root.appendChild(buttonsdiv);
};


const video = (root) => {
  let videocontainer = createComponent("div", {class: "video-container"}, null, root);
    createComponent("video", {id: "video", class: "video"}, null, videocontainer);
    createComponent("canvas", {id: "canvas", class: "canvas"}, null, videocontainer);
};
