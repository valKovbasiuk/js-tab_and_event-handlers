const activeTab = "active";
const activeContent = "show";
const tabs = document.querySelectorAll(".tab__tabs");
const tabContent = document.querySelectorAll(".tab__content");

tab;

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
