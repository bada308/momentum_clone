const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);


// todo local storage 저장
function saveToDos(){

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// todo 삭제
function deleteToDo(event){
    // 해당 버튼의 parent 요소 찾아서 삭제
    const li = event.target.parentElement;
    li.remove();

    // local storge에서도  삭제
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

// todo 출력
function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

/** 
* 1. 입력 받으면 {text, id} 형식으로 Array저장 
* 2. input 창 다시 비워주기
*/
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);

    paintToDo(newTodoObj);

    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

/**
 * local storage에 저장된 todo 있으면 출력
 */

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo);
}