import { Connector } from "@espruino-tools/peer";
import "./styles/app.scss";
let p = new Connector();

window.onload = function () {
  p.connectData((data) => {
    alert(data);
    console.log("connectDataPeer ", data);
  });
  p.connectVideo("back");

  let app_root = document.getElementById("page-root");
  let btn = document.createElement("button");
  btn.innerText = "press me";
  btn.onclick = function () {
    p.conn.send("HEllo");
  };
  app_root.appendChild(btn);
};
