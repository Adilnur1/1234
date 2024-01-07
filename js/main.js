const tabs = document.querySelector(".menu");
const search = document.querySelector(".search");
const inpSearch = document.querySelector(".inpSearch");
tabs.addEventListener("mousemove", (event) => {
  const tab = event.target.closest(".tab");
  if (tab) {
    const tabIndex = tab.dataset.tabIndex;
    event.currentTarget.style.setProperty("--active-tab", tabIndex)
  }
});
search.addEventListener("click", () => {
  inpSearch.classList.toggle("search2");
  search.classList.toggle("search3");
});
