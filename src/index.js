import _ from "lodash";

function component() {
  const element = document.createElement("div");
  const p = document.createElement("p");

  //  Lodash, now imported by this script
  p.innerHTML = _.join(["Hello", "webpack"], " ");
  p.classList.add("hello");
  element.appendChild(p);

  return element;
}

document.body.appendChild(component());
