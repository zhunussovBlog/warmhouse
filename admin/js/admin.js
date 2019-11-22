'use strict';

function init(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

function out(json) {
  console.log(JSON.parse(json));
}

document.addEventListener('DOMContentLoaded', () => {
  init('../admin/data.json', out);
});