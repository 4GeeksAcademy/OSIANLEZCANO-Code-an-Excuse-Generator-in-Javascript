/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Osian in da flat ");
};

let generateExcuse = () => {
  let pronoun = ["my", "the", "a"];
  let adverb = ["cat", "dog", "racoon", "cop", "driver", "lion"];
  let action = ["ate", "destroyed", "burned", "hide", "threw", "stole"];
  let adjective = ["my"];
  let noun = ["homework", "bike", "car", "bus card"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let advIndex = Math.floor(Math.random() * adverb.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let adjIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  return (
    pronoun[proIndex] +
    " " +
    adverb[advIndex] +
    " " +
    action[actIndex] +
    " " +
    adjective[adjIndex] +
    " " +
    noun[nounIndex]
  );
};
