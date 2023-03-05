// // const loginForm = document.querySelector("#login-form") 
// const loginForm = document.getElementById("login-form");
// //can search queries inside the variable which document has been assigned
// const loginInput = loginForm.querySelector("input"); 
// const loginButton = loginForm.querySelector("button");

// or can use css style query selection, make the line more shorter.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //uppercase variables are usually string values
const USERNAME_KEY = "userName";
// const link = document.querySelector("a");

// const loginButton = document.querySelector("#login-form button");


// function onLoginBtnClick() {
//     const userName = loginInput.value;
//     if (userName === ""){
//         alert("Please write your name.");
//     } else if (userName.length > 15) {
//         alert("Your name is too long.")
//     }
// }

// loginButton.addEventListener("click", onLoginBtnClick) // this is not needed, thanks to html form 
// function onLoginSubmit() {
//     const userName = loginInput.value;
//     console.log(userName);
// }
// loginForm.addEventListener("submit", onLoginSubmit)
// when the function is called like upper line, the browser call the function with extra information
// onLoginSubmit(extrainfo)
// and to get the extra info, make a space in the function
// and the object has prevent default, which can prevent default such as refreshing the website
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// function handleLinkClick(event) {
//     event.preventDefault();
// }
// link.addEventListener("click", handleLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName)
}