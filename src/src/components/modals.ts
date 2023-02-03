import { createComponent } from "./helpers";

const createModal = (root, modalId) => {
  let modal = createComponent("div", {id: modalId, class: "modal"}, null, root);
    let modalcontent = createComponent("div", {class: "modal-content"}, null, modal);
      let modalheader = createComponent("div", {class: "modal-header"}, null, modalcontent);
        createComponent("span", {class: "close"}, `&times;`, modalheader);
        createComponent("h2", {}, "How to Use", modalheader);
      let modalbody = createComponent("div", {class: "modal-body"}, null, modalcontent);
      let modalfooter = createComponent("div", {class: "modal-footer"}, null, modalcontent);
        createComponent("h3", {}, "Thanks for reading :)", modalfooter);
  root.appendChild(modal);
  return modalbody;
};

export const addModals = (root) => {
  let helpModal = createModal(root, "helpModal");
    helpModalContent(helpModal);
  let settingsModal = createModal(root, "settingsModal");
    settingsModalContent(settingsModal);
  let mappingsModal = createModal(root, "mappingsModal");
    mappingModalContent(mappingsModal);
  let testAnglesModal = createModal(root, "testAnglesModal");
    testAnglesModalContent(testAnglesModal);
  let robotCodeModal = createModal(root, "robotCodeModal");
    robotCodeModalContent(robotCodeModal);
};


function helpModalContent(root) {
  createComponent("p", {}, `Detailed instructions are explained  <a href="https://github.com/Kirstin813/L4-Individual-Project/tree/main/src#connecting-to-robot">here</a>`, root);
}

function settingsModalContent(root) {
  let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, root);
    sendCodeSlider(buttonsdiv);
    createComponent("button", {id: "mappingsBtn"}, "Select angle to motor mapping", buttonsdiv);
    createComponent("button", {id: "testAnglesBtn"}, "Perform Diagnostic", buttonsdiv);
    createComponent("button", {id: "robotCodeBtn"}, "Robot Code", buttonsdiv);
};

function sendCodeSlider(root) {
  let slidercontainer = createComponent("div", {class: "slider-container"}, null, root);
    let valuecontainer = createComponent("div", {class: "value-container"}, null, slidercontainer);
      createComponent("span", {id: "output"}, "100", valuecontainer);
    createComponent("input", {type: "range", min:"0", max:"600", value:"100", class:"slider", id:"sendCodeSlider"}, null, slidercontainer);
}

function mappingModalContent(root) {
  let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, root);
    createComponent("button", {id: "tightControl"}, "Tight Mapping", buttonsdiv);
    createComponent("button", {id: "middleControl"}, "Middle Mapping", buttonsdiv);
    createComponent("button", {id: "looseControl"}, "Loose Mapping", buttonsdiv);
};

function testAnglesModalContent(root) {
  let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, root);
    createComponent("button", {onclick: "robot.diagnostic()"}, "Test all angles", buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(0)"}, `Test 0 degrees`, buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(45)"}, "Test 45 degrees", buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(90)"}, `Test 90 degrees`, buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(135)"}, "Test 135 degrees", buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(180)"}, `Test 180 degrees`, buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(225)"}, "Test 225 degrees", buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(260)"}, "Test 260 degrees", buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(270)"}, `Test 270 degrees`, buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(280)"}, `Test 280 degrees`, buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(315)"}, "Test 315 degrees", buttonsdiv);
    createComponent("button", {onclick: "robot.diagnostic(360)"}, "Test 360 degrees", buttonsdiv);
};

function robotCodeModalContent(root) {
  let buttonsdiv1 = createComponent("div", {class: "buttons buttons-row"}, null, root);
    createComponent("button", {id: "uploadCodeBtn"}, "UPLOAD CODE", buttonsdiv1);
    createComponent("button", {id: "getCodeBtn"}, "GET DEVICE CODE", buttonsdiv1);
    createComponent("button", {id: "resetCodeBtn"}, "RESET CODE", buttonsdiv1);
  let buttonsdiv2 = createComponent("div", {class: "buttons buttons-row"}, null, root);
    createComponent("p", {id: "codeToUpload"}, "THERE IS NO CODE TO UPLOAD", buttonsdiv2);
    createComponent("p", {id: "codeOnRobot"}, "hello", buttonsdiv2);
};


export function openCloseModal() {
  const modals = {
    help: {modal: "helpModal", button: "helpBtn"},
    settings: {modal: "settingsModal", button: "settingsBtn"},
    mappings: {modal: "mappingsModal", button: "mappingsBtn"},
    testAngles: {modal: "testAnglesModal", button: "testAnglesBtn"},
    robotCode: {modal: "robotCodeModal", button: "robotCodeBtn"}
  };
  var modalElements = [];
  var span = document.getElementsByClassName("close") as HTMLCollectionOf<HTMLElement>;
  const settingsModal = document.getElementById("settingsModal");

  for (const [key, value] of Object.entries(modals)) {
    const modal = document.getElementById(value.modal);
    const button = document.getElementById(value.button);
    modalElements.push(modal);

    button.onclick = () => {
      settingsModal.style.display = "none";
      modal.style.display = "block";
    };
  };

  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < span.length; i++) {
    span[i].onclick = function() {
      for (var j = 0; j < modalElements.length; j++) {
        modalElements[j].style.display = "none";
      };
    };
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    for (var j = 0; j < modalElements.length; j++) {
      if (event.target === modalElements[j]) {
        modalElements[j].style.display = "none";
      };
    };
  };
};