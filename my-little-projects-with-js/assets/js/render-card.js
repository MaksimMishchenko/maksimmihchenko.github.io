let dataBase = [];


if(window.location.href.includes("my-little-projects-with-js")) {

    dataBase = [
        {
            img: "/my-little-projects-with-js/to-do-list/assets/img/to-do-list.jpg",
            header: "To Do List",
            link: "to-do-list/index.html"
        },
        {
            img: "/my-little-projects-with-js/filter-search/assets/filter-search.jpg",
            header: "Filter Search",
            link: "filter-search/index.html"
        }
    ];

} else if(window.location.href.includes("My-freecodecamp-projects")) {

    dataBase = [
        {
            img: "/My-freecodecamp-projects/assets/img/tribute_page.jpg",
            header: "Tribute Page",
            link: "tribute-page/index.html"
        },
        {
            img: "/My-freecodecamp-projects/assets/img/survey_form.jpg",
            header: "Survey Form",
            link: "survey-form/index.html"
        },
        {
            img: "/My-freecodecamp-projects/assets/img/product_landing_page.png",
            header: "Landing Page",
            link: "product-landing-page/index.html"
        }
    ];

}


function renderCard(arr) {

    let cardsParent = document.querySelector(".main-content__projects");

    arr.forEach(item => {

        cardsParent.innerHTML += `
            <div class="main-content__project-card main-content__project-card-1">
            <img class="main-content__img" src="${item.img}" />
            <div class="main-content__buttons">
                <p class="main-content__card-header">${item.header}</p>
                <a class="main-content__button" href="${item.link}">View More</a>
            </div>
            </div>
        `;

    });

}


renderCard(dataBase);