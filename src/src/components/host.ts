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
      createComponent("button", {id:"backHostBtn", class:"connection", disabled: true}, "Host Back Camera", camerabuttons1);
    let cameraselect = createComponent("div", {class: "custom-select"}, null, buttonsdiv);
      let select = createComponent("select", {id: "select"}, null, cameraselect);
        createComponent("option", {value: "0"}, "Select Camera", select); 
    createComponent("button", {id: "cameraConnBtn", onclick: "controller.videoDisplay()"}, "Connect to Host Camera", buttonsdiv);
    createComponent("button", {onclick: "robot.connect()"}, "Connect to Robot", buttonsdiv);
    createComponent("button", {onclick:"robot.disconnect()"}, "Disconnect", buttonsdiv);
    createComponent("button", {id: "helpBtn"}, "Help", buttonsdiv);
  root.appendChild(buttonsdiv);
};


const video = (root) => {
  let videocontainer = createComponent("div", {class: "video-container"}, null, root);
    createComponent("video", {id: "video", class: "video"}, null, videocontainer);
    createComponent("canvas", {id: "canvas", class: "canvas"}, null, videocontainer);
  let buttonsdiv = createComponent("div", {class: "buttons"}, null, root);
    let camerabuttons1 = createComponent("div", {class: "camera-buttons vertical"}, null, buttonsdiv);
      createComponent("button", {id:"colourTrackingBtn", class:"connection"}, "Camera Not Active", camerabuttons1);
      createComponent("button", {id:"greyscaleBtn", class:"connection"}, "Camera Not Active", camerabuttons1);
      createComponent("button", {id:"colourSpaceBtn", class:"connection"}, "Camera Not Active", camerabuttons1);
};
