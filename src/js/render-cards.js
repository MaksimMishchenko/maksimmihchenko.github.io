import "../scss/site.scss"


window.addEventListener('load', () => {


    function renderCard(obj, selector) {

        sendRequest("GET", "/dist/assets/html-templates/project-card.html")
        .then(response => {
            let template = Handlebars.compile(response)(obj);

            document.querySelector("#for-template").innerHTML = template;
        });

    }

   
    function sendRequest(method, url, body = null) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onload = () => {
                if(xhr.status >= 400) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }
            }

            xhr.onerror = () => {
                reject(xhr.response);
            }

            xhr.send(JSON.stringify(body));
        });
    }

    sendRequest("GET", "/dist/assets/myDB/cardsinfo.json")
    .then(data => {
        renderCard(JSON.parse(data), "#for-template");
    })
    .catch(err => console.log(err));

    

   


   


});