import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";
import CSVData from "./data.csv";
import XMLData from "./data.xml";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json";

console.log(toml.title + " >> " + toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title + " >> " + yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title + " >> " + json.owner.name); // output `Tom Preston-Werner`

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

  console.log("CSVData :>> ", CSVData);
  console.log("XMLData :>> ", XMLData);

  return element;
}

document.body.appendChild(component());
