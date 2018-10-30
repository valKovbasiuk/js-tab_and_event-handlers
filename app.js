// js tabs

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

// random colors for table cells

const colorTable = document.querySelector("table");
const colorTableCells = colorTable.querySelectorAll("td");

colorTable.addEventListener("mouseover", function(e) {
  let randomColor = () => Math.floor(Math.random() * 256);
  e.target.style.backgroundColor =
    "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
});

colorTable.addEventListener("dblclick", function(e) {
  colorTableCells.forEach(element => (element.style.backgroundColor = "white"));
});

// change body background on scroll and just for fun used IIFE

(function() {
  const elementHSL = document.querySelector("body");
  const shiftHSL = Math.floor(Math.random() * 360);
  let scrollPosition = 0;
  let hslColor = function(e) {
    scrollPosition = Math.floor(window.scrollY / 5);
    window.requestAnimationFrame(function() {
      elementHSL.style.backgroundColor =
        "hsl(" + ((scrollPosition + shiftHSL) % 360) + ", 100%, 80%)";
      console.log("i see scroll " + scrollPosition);
    });
  };
  window.addEventListener("scroll", hslColor);
})();
