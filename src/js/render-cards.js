import "../scss/site.scss"


window.addEventListener('load', () => {


    let allCards = [];
    let forTemplate = document.querySelector("#for-template");


   async function getData() {

    return fetch("/src/assets/myDB/cardsinfo.json")
    .then(response => response.json())
    .then(data => {
         data.forEach(item => {
             allCards.push(item);
         });   
    });

   }


   async function renderCard() {

    fetch("/src/assets/html-templates/project-card.html")
    .then(response => response.text())
    .then(data => {
        let template = Handlebars.compile(data)(allCards);

        forTemplate.innerHTML = template;
    });

   }


   getData();
   renderCard();


});