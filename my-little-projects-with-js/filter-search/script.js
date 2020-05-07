let searchField = document.querySelector(".filter-search__input");

function searchElements(e) {

    let value = e.target.value.toLowerCase().trim();
    let allElements = document.querySelectorAll(".filter-search__list-element");

    allElements.forEach(element => {

        if(!element.textContent.toLowerCase().includes(value)) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }

    });

}


searchField.addEventListener("input", searchElements);