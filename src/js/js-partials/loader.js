 function loaderToggle() { 
  document.querySelector('.loader-overlay').classList.toggle("is-open");
}
function hideLoader() { 
  document.querySelector('.loader-overlay').classList.remove("is-open");
}

export {loaderToggle,hideLoader};
