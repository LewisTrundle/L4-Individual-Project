import { createComponent } from "./helpers";

export const createModal = (root, modalId, size="large") => {
  let modal = createComponent("div", {id: modalId, class: "modal"}, null, root);
    let modalcontent = createComponent("div", {class: `modal-content ${size}`}, null, modal);
      let modalheader = createComponent("div", {class: "modal-header"}, null, modalcontent);
        createComponent("span", {class: "close"}, "X", modalheader);
        createComponent("h2", {}, "How to Use", modalheader);
      let modalbody = createComponent("div", {class: "modal-body"}, null, modalcontent);
      createComponent("div", {class: "modal-footer"}, "Thanks for reading", modalcontent);
  root.appendChild(modal);
  return modalbody;
};

export const addModals = (root, helpLink) => {
  let helpModal = createModal(root, "helpModal", "small");
    helpModalContent(helpModal, helpLink);
  let settingsModal = createModal(root, "settingsModal");
    settingsModalContent(settingsModal);
  let mappingsModal = createModal(root, "mappingsModal");
    mappingModalContent(mappingsModal);
  let testAnglesModal = createModal(root, "testAnglesModal", "extra-large");
    testAnglesModalContent(testAnglesModal);
  let robotCodeModal = createModal(root, "robotCodeModal", "extra-large");
    robotCodeModalContent(robotCodeModal);
};


export function helpModalContent(root, link) {
  createComponent("p", {}, `For detailed instructions, please read the user manual`, root);
  let userManualLink = createComponent("a", {target: '_blank', href:`https://github.com/LewisTrundle/L4-Individual-Project/blob/develop/src/user_manual.md#${link}`}, null, root);
  createComponent("button", {}, "User manual", userManualLink);
}

function settingsModalContent(root) {
  let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, root);
    sendCodeSlider(buttonsdiv);
    createComponent("button", {id: "mappingsBtn", class: "remove-margin"}, "Select angle to motor mapping", buttonsdiv);
    createComponent("button", {id: "testAnglesBtn", class: "remove-margin"}, "Perform Diagnostic", buttonsdiv);
    createComponent("button", {id: "robotCodeBtn", class: "remove-margin"}, "Robot Code", buttonsdiv);
};

function sendCodeSlider(root) {
  let slidercontainer = createComponent("div", {class: "slider-container"}, null, root);
    let valuecontainer = createComponent("div", {class: "value-container"}, null, slidercontainer);
      createComponent("span", {id: "output"}, "100", valuecontainer);
    createComponent("input", {type: "range", min:"0", max:"600", value:"100", class:"slider", id:"sendCodeSlider"}, null, slidercontainer);
};

function mappingModalContent(root) {
  let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, root);
    createComponent("button", {id: "tightControl"}, "Tight Mapping", buttonsdiv);
    createComponent("button", {id: "looseControl"}, "Loose Mapping", buttonsdiv);
};

function testAnglesModalContent(root) {
  let buttonsdiv = createComponent("div", {class: "buttons center-buttons"}, null, root);
    createComponent("button", {onclick: "controller.diagnostic()"}, "Test all angles", buttonsdiv);
    for (let i = 0; i <= 360; i+=45) {
      createComponent("button", {onclick: `controller.diagnostic(${i})`, class:"remove-margin"}, `Test ${i} degrees`, buttonsdiv);
    };
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
    if (!(modal && button)) {
      break
    }
    modalElements.push(modal);

    button.onclick = () => {
      if (settingsModal) {
        settingsModal.style.display = "none";
      }
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