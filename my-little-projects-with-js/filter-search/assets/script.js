let searchField = document.querySelector(".filter-search__input");
let containerHeight = document.querySelector(".filter-search-container").offsetHeight;


function searchElements(e) {
    
    let value = e.target.value.toLowerCase().trim();
    let allElements = document.querySelectorAll(".filter-search__list-element");

    document.querySelector(".filter-search-container").style.height = containerHeight + "px";

    allElements.forEach(element => {

        if(!element.textContent.toLowerCase().includes(value)) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }

    });

}


searchField.addEventListener("input", searchElements);
