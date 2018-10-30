const activeTab = "active";
const activeContent = "show";
const Tabs = document.querySelector(".js-tabs");
const tabs = Tabs.querySelectorAll(".tab__tabs");
const tabContent = Tabs.querySelectorAll(".tab__content");

tabs.forEach(element => element.addEventListener("click", toggle));

function toggle() {
  tabs.forEach(element => element.classList.remove(activeTab));
  tabContent.forEach(element => element.classList.remove(activeContent));
  this.classList.add(activeTab);
  document
    .querySelector(
      ".tab__content" + "[data-tab='" + this.getAttribute("data-tab") + "']"
    )
    .classList.add(activeContent);
}

window.addEventListener("load", function() {
  alert("Page has been loaded!");
});

const colorTable = document.querySelector("table");
const colorTableCells = colorTable.querySelectorAll("td");

colorTable.addEventListener("mouseover", function(e) {
  let randomColor = () => Math.floor(Math.random() * 256);
  // let oldColor = e.target.style.backgroundColor;
  e.target.style.backgroundColor =
    "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
});

colorTable.addEventListener("dblclick", function(e) {
  colorTableCells.forEach(element => (element.style.backgroundColor = "white"));
});

var elementHSL = document.querySelector("body");
var scrollPosition = 0;
var shiftHSL = Math.floor(Math.random() * 360);
const hslColor = function(e) {
  scrollPosition = Math.floor(window.scrollY / 5);
  window.requestAnimationFrame(function() {
    elementHSL.style.backgroundColor =
      "hsl(" + ((scrollPosition + shiftHSL) % 360) + ", 100%, 80%)";
    console.log("i see scroll " + scrollPosition);
  });
};
window.addEventListener("scroll", hslColor);
