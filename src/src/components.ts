import { DeviceController } from "@espruino-tools/core";

var elements = [];


/* CREATE COMPONENT */
const createComponent = (component: string, properties: Object, text: string, parent?: any) => {
  let el = document.createElement(component);
  Object.keys(properties).forEach(prop => el.setAttribute(prop, properties[prop]));
  el.innerText = text;
  if (parent) {
    parent.appendChild(el);
  }
  return el;
}

/* COMMON COMPONENTS */ 

/* DIVS */
const headerDiv = () => {
  return createComponent("div", {class: "header"}, null);
}
const headerButtonsDiv = (parent?: any) => {
  return createComponent("div", {class: "header-buttons"}, null, parent);
}
const contentDiv = () => {
  return createComponent("div", {class: "content"}, null);
}
const buttonsDiv = (parent?: any) => {
  return createComponent("div", {class: "buttons center-buttons"}, null, parent);
}

/* LINKS */
const backLink = (parent?: any) => {
  return createComponent("a", {href: "index.html"}, null, parent);
}
const developerLink = (parent?: any) => {
  return createComponent("a", {href: "joystick-dev.html"}, null, parent);
}
const mainButtonLink = (link: string, parent?: any) => {
  return createComponent("a", {href: link}, null, parent);
}

/* BUTTONS */
const backButton = (parent?: any) => {
  return createComponent("img", {id: "back", src: "./images/back_button.svg", alt: "back button"}, null, parent);
}
const mainButton = (text: string, parent?: any) => {
  return createComponent("button", {}, text, parent);
}

/* IMAGES */
const batteryImage = (parent?: any) => {
  return createComponent("img", {src: "./images/battery.svg", alt: "battery", onclick: "robot.getBattery()"}, null, parent);
}
const developerImage = (parent?: any) => {
  return createComponent("img", {src: "./images/settings.svg", alt: "settings"}, null, parent);
}

/* OTHER */
const title = (title: string, parent?: any) => {
  return createComponent("h1", {}, title, parent);
}



/* INDEX PAGE */
export const indexPage = () => {
  let root = document.getElementById("page-root");

  let headerdiv = headerDiv();
    title("Robot Controller", headerdiv);
  elements.push(headerdiv);

  let contentdiv = contentDiv();
    let buttonsdiv = buttonsDiv(contentdiv);
      let joysticklink = mainButtonLink("joystick.html", buttonsdiv);
        mainButton("Joystick", joysticklink);
      let lineLink = mainButtonLink("self-driving.html", buttonsdiv);
        mainButton("Line Tracking", lineLink);
  elements.push(contentdiv);

  elements.map((element) => {
    root.appendChild(element);
  });
};


/* SELF DRIVING PAGE */
export const selfDrivingPage = () => {
  let root = document.getElementById("page-root");
  joystickHeader(root, "Self Driving Controller");

  let contentdiv = createComponent("div", {class: "content"}, null);
    joystickButtons(contentdiv);
    let joystickdiv = createComponent("div", {id: "joystick", class: "joystick"}, null, contentdiv);

    let helpModal = createModal(contentdiv, "helpModal");
    helpModalContent(helpModal);
    let settingsModal = createModal(contentdiv, "settingsModal");
    settingsModalContent(settingsModal);
    let mappingsModal = createModal(contentdiv, "mappingsModal");
    mappingModalContent(mappingsModal);
    let testAnglesModal = createModal(contentdiv, "testAnglesModal");
    testAnglesModalContent(testAnglesModal);
    let robotCodeModal = createModal(contentdiv, "robotCodeModal");
    robotCodeModalContent(robotCodeModal);

  root.appendChild(contentdiv);

  openCloseModal();
}


/* JOYSTICK PAGE */
export var joyZone;

export const joystickPage = () => {
  let root = document.getElementById("page-root");
  joystickHeader(root, "Joystick Controller");
  
  let contentdiv = createComponent("div", {class: "content"}, null);
    joystickButtons(contentdiv);
    joyZone = insertJoystick(contentdiv);

    let helpModal = createModal(contentdiv, "helpModal");
    helpModalContent(helpModal);
    let settingsModal = createModal(contentdiv, "settingsModal");
    settingsModalContent(settingsModal);
    let mappingsModal = createModal(contentdiv, "mappingsModal");
    mappingModalContent(mappingsModal);
    let testAnglesModal = createModal(contentdiv, "testAnglesModal");
    testAnglesModalContent(testAnglesModal);
    let robotCodeModal = createModal(contentdiv, "robotCodeModal");
    robotCodeModalContent(robotCodeModal);

  root.appendChild(contentdiv);

  openCloseModal();
}

function joystickHeader(root: any, pageTitle: string) {
  let headerdiv = headerDiv();
  let backlink = backLink(headerdiv);
    backButton(backlink);
  title(pageTitle, headerdiv);
  let headerbuttonsdiv = headerButtonsDiv(headerdiv);
    batteryImage(headerbuttonsdiv);
    let diagnosticLink = createComponent("button", {id: "settingsBtn"}, null, headerbuttonsdiv);
    developerImage(diagnosticLink);
  root.appendChild(headerdiv);
}

function joystickButtons(root) {
  let buttonsdiv = createComponent("div", {class: "buttons"}, null, root);
    createComponent("p", {id: "mappingText"}, "Angle-Motor Mapping: NOT SET!", buttonsdiv);
    createComponent("p", {id: "sendCodeSpeedText"}, "ERROR", buttonsdiv);
    createComponent("button", {onclick: "robot.connect()"}, "Connect", buttonsdiv);
    createComponent("button", {onclick:"robot.disconnect()"}, "Disconnect", buttonsdiv);
    createComponent("button", {id: "helpBtn"}, "Help", buttonsdiv);
  root.appendChild(buttonsdiv);
}

function createModal(root, modalId) {
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
}

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
      createComponent("span", {id: "output"}, "6", valuecontainer);
    createComponent("input", {type: "range", min:"0", max:"10", value:"6", class:"slider", id:"sendCodeSlider"}, null, slidercontainer);
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


function insertJoystick(root) {
  let joystickdiv = createComponent("div", {class: "joystick"}, null, root);
    createComponent("div", {class: "static highlight highlight-javascript active"}, null, joystickdiv);
    let zonejoystick = createComponent("div", {id: "zone_joystick"}, null, joystickdiv);
      let joyZone = createComponent("div", {id: "joyzone", class: "zone static active"}, null, zonejoystick);
  root.append(joystickdiv);
  return joyZone;
}


function openCloseModal() {
  var helpModal = document.getElementById("helpModal");
  var settingsModal = document.getElementById("settingsModal");
  var mappingsModal = document.getElementById("mappingsModal");
  var testAnglesModal = document.getElementById("testAnglesModal");
  var robotCodeModal = document.getElementById("robotCodeModal");

  var helpBtn = document.getElementById("helpBtn");
  var settingsBtn = document.getElementById("settingsBtn");
  var mappingsBtn = document.getElementById("mappingsBtn");
  var testAnglesBtn = document.getElementById("testAnglesBtn");
  var robotCodeBtn = document.getElementById("robotCodeBtn");

  var span = document.getElementsByClassName("close") as HTMLCollectionOf<HTMLElement>;

  // When the user clicks the button, open the modal 
  helpBtn.onclick = function() {
    helpModal.style.display = "block";
  }
  settingsBtn.onclick = function() {
    settingsModal.style.display = "block";
  }
  mappingsBtn.onclick = function() {
    settingsModal.style.display = "none";
    mappingsModal.style.display = "block";
  }
  testAnglesBtn.onclick = function() {
    settingsModal.style.display = "none";
    testAnglesModal.style.display = "block";
  }
  robotCodeBtn.onclick = function() {
    settingsModal.style.display = "none";
    robotCodeModal.style.display = "block";
  }


  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < span.length; i++) {
    span[i].onclick = function() {
      helpModal.style.display = "none";
      settingsModal.style.display = "none";
      mappingsModal.style.display = "none";
      testAnglesModal.style.display = "none";
      robotCodeModal.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == helpModal || event.target == settingsModal || 
      event.target == mappingsModal || event.target == testAnglesModal ||
      event.target == robotCodeModal) {
      helpModal.style.display = "none";
      settingsModal.style.display = "none";
      mappingsModal.style.display = "none";
      testAnglesModal.style.display = "none";
      robotCodeModal.style.display = "none";
    }
  }
}



/* TEMPLATE */
const device = new DeviceController();

const createDisconnectionButton = () => {
  const disconnectCallback = () => {
    let root = document.getElementById("page-root");

    let statusPopup = document.createElement("div");
    statusPopup.className = "connection-notification";
    statusPopup.innerHTML = "<p>Disconnected Successfully</p>";
    root.appendChild(statusPopup);
    setTimeout(function () {
      statusPopup.parentElement.removeChild(statusPopup);
    }, 2000);
  };

  let disconnectButton = document.createElement("button");
  disconnectButton.className = "esp-btn hidden";
  disconnectButton.id = "esp-disconnect";
  disconnectButton.classList.add("red");
  disconnectButton.innerText = "Disconnect";
  disconnectButton.onclick = function () {
    device.disconnect().then(() => {
      disconnectCallback();
      let connectBtn = document.getElementById("esp-connect");
      disconnectButton.className = "hidden";
      connectBtn.className = "esp-btn green";
    });
  };
  elements.push(disconnectButton);
};

const createConnectionButton = () => {
  const connectCallback = () => {
    let root = document.getElementById("page-root");

    let statusPopup = document.createElement("div");
    statusPopup.className = "connection-notification";
    statusPopup.innerHTML = "<p>Connected Successfully</p>";
    root.appendChild(statusPopup);
    setTimeout(function () {
      statusPopup.parentElement.removeChild(statusPopup);
    }, 2000);
  };

  let connectButton = document.createElement("button");
  connectButton.className = "esp-btn";
  connectButton.classList.add("green");
  connectButton.id = "esp-connect";
  connectButton.innerText = "Connect";
  connectButton.onclick = function () {
    device.connect().then(() => {
      if (device.connected) {
        connectCallback();
        let disconnectBtn = document.getElementById("esp-disconnect");
        connectButton.className = "hidden";
        disconnectBtn.className = "esp-btn red";
      }
    });
  };
  elements.push(connectButton);
};
