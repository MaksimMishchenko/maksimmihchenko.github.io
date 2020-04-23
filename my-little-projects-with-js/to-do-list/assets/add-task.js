let taskCounter = 0;


function createElement(element, text, deleteBtn, className) {
    let elem = document.createElement(element);
    elem.classList.add(className);
    elem.innerHTML += text;
    elem.innerHTML += deleteBtn;

    return elem;
}


function addTaskAndWriteToLocalStorage() {
    taskCounter += 1;

    let myInput = document.querySelector('.to-do__input');
    let output = document.querySelector('.to-do__output');

    let task = createElement('p', myInput.value, '&times;', 'to-do__output-item');
    output.appendChild(task);

    localStorage.setItem(`object ${taskCounter}`, myInput.value);
    myInput.value = '';

}


document.querySelector('.to-do__button').addEventListener('click', addTaskAndWriteToLocalStorage);


function getTasksFromLSAndInsert() {
    let output = document.querySelector('.to-do__output');
    let tasksArr = [];

    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        key.startsWith('obj') ? tasksArr.push(key) : '';
    }

    tasksArr = tasksArr.sort();

    taskCounter = tasksArr.length;

    for(let key of tasksArr) {
        let val = localStorage.getItem(key);

        let task = createElement('p', val, '&times;', 'to-do__output-item');

        output.appendChild(task);
    }
}

getTasksFromLSAndInsert();