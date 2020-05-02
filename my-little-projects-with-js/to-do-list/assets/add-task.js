let tasksCounter = 0;


function createElement(element, text, deleteBtn) {
    let delBtn = document.createElement(deleteBtn);
    delBtn.classList.add('delete-btn');

    let elem = document.createElement(element);
    elem.classList.add('to-do__output-item');
    elem.innerHTML += text;
    elem.appendChild(delBtn);

    return elem;
}


function deleteTaskFromLS(e) {
    let windowWidth = window.innerWidth;
    let popUp = document.querySelector('.pop-up');

    let elem = e.target;
    let key = elem.parentNode.getAttribute('data-ls-key');
    elem.classList.add('completed-task');

    setTimeout(() => {
        if(windowWidth > 500) {
            elem.classList.add('completed-task-delete');
            getDeleteButtons('.completed-task-delete', deleteTaskFromList);
        } else {
            getDeleteButtons('.completed-task', deleteTaskFromList);
            popUp.classList.add('show-pop-up');
        }
    }, 1000);

    setTimeout(() => {
        popUp.classList.add('hide-pop-up');
    }, 5000);

    localStorage.removeItem(key);
}


function deleteTaskFromList(e) {

    e.target.parentNode.remove();
    console.log('work');

}


function getDeleteButtons(className, func) {
    let buttons = document.querySelectorAll(className);

    for(let btn of Array.from(buttons)) {
        console.log(btn);
        btn.addEventListener('click', (e) => func.call(this, e));
    }
}


function addTaskAndWriteToLocalStorage() {
    tasksCounter += 1;

    let myInput = document.querySelector('.to-do__input');
    let output = document.querySelector('.to-do__output');

    let task = createElement('p', myInput.value, 'span');
    task.setAttribute('data-ls-key', `task ${tasksCounter}`);
    output.appendChild(task);

    localStorage.setItem(`task ${tasksCounter}`, myInput.value);
    myInput.value = '';

    getDeleteButtons('.delete-btn', deleteTaskFromLS);

}


document.querySelector('.to-do__button').addEventListener('click', addTaskAndWriteToLocalStorage);


function getTasksFromLSAndInsert() {
    let output = document.querySelector('.to-do__output');
    let tasksArr = [];

    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        key.startsWith('task') ? tasksArr.push(key) : '';
    }

    tasksArr = tasksArr.sort();

    tasksCounter = tasksArr.length;

    for(let key of tasksArr) {
        let val = localStorage.getItem(key);

        let task = createElement('p', val, 'span');
        task.setAttribute('data-ls-key', key);

        output.appendChild(task);
    }

    getDeleteButtons('.delete-btn', deleteTaskFromLS);
}


window.addEventListener('load', getTasksFromLSAndInsert); 