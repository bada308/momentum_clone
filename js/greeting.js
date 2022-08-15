// login-form div 내의 input, button 불러오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

/**
 * 1. CSS를 이용하여 입력받은 form 지우기
 * 
 * 2. input으로부터 입력받은 value localStorge에 저장
 * 3. 환영인사 화면에 출력
 */

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const inputUsername = loginInput.value;

    localStorage.setItem(USERNAME_KEY, inputUsername);
    paintGreeting(inputUsername);
}

/**
 * 화면에 환영인사 출력하는 함수
 * 
 * 매개변수는 출력할 username
 */

function paintGreeting(username){
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}




/**
 * if localStorge에 username에 대한 정보 존재
 * -> form 출력하지 않고 바로 greeting 출력
 * 
 * else
 * -> form 출력해서 event 발생 시 onLoginSubmit 콜백 실행
 */
if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreeting(savedUsername);
    
}