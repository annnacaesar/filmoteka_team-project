const onSearchSpan = document.querySelector(".search-span");

export function dispaySpan(query, page) {
  const popularFilmsSpan = `View the trending list for the day, page ${page}`;
  const onSearchFilmsSpan = `View the list by keywords "${query}", page ${page}`;
  if (query === "") {
    onSearchSpan.innerHTML = popularFilmsSpan;
  } else {
    onSearchSpan.innerHTML = onSearchFilmsSpan;
  }
}
