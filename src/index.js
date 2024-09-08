import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";

function component() {
  const element = document.createElement("div");
  const p = document.createElement("p");

  //  Lodash, now imported by this script
  p.innerHTML = _.join(["Hello", "webpack"], " ");
  p.classList.add("hello");
  element.appendChild(p);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("img");

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
