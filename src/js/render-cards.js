import "../scss/site.scss"


window.addEventListener('load', () => {


    let allCards = [];
    let forTemplate = document.querySelector("#for-template");


   function getData() {

    return fetch("/dist/static/myDB/cardsinfo.json")
    .then(response => response.json())
    .then(data => {
         data.forEach(item => {
             allCards.push(item);
         });   
    });

   }


   function renderCard() {

    fetch("/dist/static/html-templates/project-card.html")
    .then(response => response.text())
    .then(data => {
        let template = Handlebars.compile(data)(allCards);

        forTemplate.innerHTML = template;
    });

   }


   getData();
   renderCard();


});