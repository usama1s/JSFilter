const searchInput = document.getElementById("search-input");
const clearButton = document.getElementById("clear-button");
const countryList = document.getElementById("country-list");
const filterSelected = document.getElementById("filter-selected");

searchInput.addEventListener("input", filterCountries);
clearButton.addEventListener("click", clearChecked);

function filterCountries() {
  const filterValue = searchInput.value.toUpperCase();
  const countries = countryList.getElementsByTagName("li");
  const showSelected = filterSelected.checked;

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const checkbox = country.getElementsByClassName("country-checkbox")[0];
    const label = country.getElementsByClassName("country-label")[0];

    if (
      label.innerHTML.toUpperCase().indexOf(filterValue) > -1 &&
      (!showSelected || checkbox.checked)
    ) {
      country.style.display = "";
    } else {
      country.style.display = "none";
    }
  }
}

function clearChecked() {
  const checkboxes = countryList.getElementsByClassName("country-checkbox");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
  filterCountries();
}
