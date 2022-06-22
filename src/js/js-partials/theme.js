const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
  GREY: "grey-background-theme",
};

const body = document.querySelector("body");
const footer = document.querySelector("footer");
const modal = document.querySelector(".modal-wrap");

const delClassElem = () => {
  body.classList.remove(Theme.LIGHT, Theme.DARK);
  footer.classList.remove(Theme.LIGHT, Theme.GREY);
};
const themeSwitcher = document.querySelector("#theme-switch-toggle");

themeSwitcher.addEventListener("change", () => {
  delClassElem();
  if (themeSwitcher.checked) {
    localStorage.setItem("Theme", "darkTheme");
    body.classList.add(Theme.DARK);
    footer.classList.add(Theme.GREY);
    modal.classList.add(Theme.GREY);
  } else {
    localStorage.setItem("Theme", "lightTheme");
    body.classList.add(Theme.LIGHT);
  }
});
if (localStorage.getItem("Theme") === "darkTheme") {
  themeSwitcher.setAttribute("checked", true);
  body.classList.add(Theme.DARK);
  footer.classList.add(Theme.GREY);
  modal.classList.add(Theme.GREY);
}
