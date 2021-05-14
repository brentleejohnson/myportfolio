console.log("Applying JS to HTML/CSS");

//  Theme
function toggleTheme() {
  document.getElementsByClassName("theme")[0].classList.toggle("activate");
}

function showTab(tabName) {
  //   Remove active from all content classes
  let tabs = document.getElementsByClassName("content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  //   add active to specified Element
  let selectedTab = document.getElementById(tabName);
  selectedTab.classList.add("active");
}
