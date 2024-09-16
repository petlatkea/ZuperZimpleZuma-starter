/**
 * ViewHelper is just a small 'helper' utility to run the 
 * view and model without a controller.
 * 
 * It is only used for development, and not in production.
 */
import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", initHelper);

function initHelper() {
  console.log("View Helper initialized");
  // initialize model and view
  model.init();
  view.init();
  // store "shortcuts" to model and view in window
  window.model = model;
  window.view = view;
}