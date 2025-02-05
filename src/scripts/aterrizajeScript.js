import { 
    getUsers, 
    setUsers, 
    getCurrentUser, 
    setCurrentUser,
    animacionVentana
} from './userFunctions.js';

// Redirección a "editor.html" si hay una sesión iniciada

function redirect() {

    if(getCurrentUser() != null){
        
        const finalURL = new URL("../pages/editor.html", import.meta.url); // (=> Después de Tarea 11)
        window.location.href = finalURL.href;
    
    }
    
}

redirect();

// Abrir ventana de "Iniciar Sesión"

async function openLoginWindow() {

    const loginUserInput = document.getElementById("loginUser");
    const loginPasswordInput = document.getElementById("loginPassword");

    // Desaparecer el placeholder del campo cuando adquiera el focus

    function setEmpty(event) {
        event.target.placeholder = "";
    }

    // Mostrar ventana poco a poco

    animacionVentana("loginWindow", "aparecer");

    // Añadir los escuchadores de evento

    loginUserInput.addEventListener("input", setEmpty);
    loginPasswordInput.addEventListener("input", setEmpty);

}

// Abrir ventana de "Registrarse"

async function openRegisterWindow() {

    const registerUserInput = document.getElementById("registerUser");
    const registerPasswordInput = document.getElementById("registerPassword");
    const registerPasswordConfirmInput = document.getElementById("registerPasswordConfirm");

    const textPasswordNotLongEnough = document.getElementById("passwordNotLongEnough");
    const textPasswordsDontMatch = document.getElementById("passwordsDontMatch");
    const textUserAlreadyRegistered = document.getElementById("userAlreadyRegistered");

    /*Esta función hace estas cosas:
    1. Desaparecer el placeholder del campo cuando adquiera el focus
    2. Si el target del evento es de contraseñas, comprobar:
        - Que son iguales
        - Que tienen al menos 8 caracteres*/

    function checkInput(event) {

        event.target.placeholder = "";
    
        if (event.target === registerUserInput) return;
    
        textPasswordsDontMatch.style.display = "none";
        textPasswordNotLongEnough.style.display = "none";
        textUserAlreadyRegistered.style.display = "none";
    
        if (registerPasswordInput.value.length == 0) {

            textPasswordNotLongEnough.style.display = "none";

        } else if (registerPasswordInput.value.length < 8) {

            textPasswordNotLongEnough.style.display = "block";

        } else {

            if (registerPasswordConfirmInput.value.length > 0 && registerPasswordInput.value !== registerPasswordConfirmInput.value) {
                textPasswordsDontMatch.style.display = "block";
            }

        }

    }

    // Mostrar ventana poco a poco

    animacionVentana("registerWindow", "aparecer");

    registerUserInput.addEventListener("input", checkInput);
    registerPasswordInput.addEventListener("input", checkInput);
    registerPasswordConfirmInput.addEventListener("input", checkInput);

}

// Al hacer clic sobre el botón de "Entrar"

async function login() {

    const loginUserInput = document.getElementById("loginUser");
    const loginPasswordInput = document.getElementById("loginPassword");

    const textUserNotFound = document.getElementById("userNotFound");
    const textIncorrectPassword = document.getElementById("incorrectPassword");

    // Validación de que los campos no pueden estar vacíos

    if (loginUserInput.value === "") {
        loginUserInput.placeholder = "Este campo no puede estar vacío.";
    }

    if (loginPasswordInput.value === "") {
        loginPasswordInput.placeholder = "Este campo no puede estar vacío.";
    }

    if (loginUserInput.value === "" || loginPasswordInput.value === "") return;

    // Comprueba el usuario

    const username = loginUserInput.value;
    const password = loginPasswordInput.value;

    const users = getUsers();
    const userFound = username in users;

    if (!userFound) {
        textUserNotFound.style.display = "block";
        textIncorrectPassword.style.display = "none";
        return;
    }

    // Comprueba la contraseña

    const correctPassword = users[username];

    if (correctPassword !== password) {
        textIncorrectPassword.style.display = "block";
        textUserNotFound.style.display = "none";
        return;
    }

    // Quita mensajes de error y se inicia sesión

    textUserNotFound.style.display = "none";
    textIncorrectPassword.style.display = "none";

    setCurrentUser(username);
    
    await animacionVentana("loginWindow", "desaparecer");
    redirect();

}

// Al hacer clic sobre el botón de "Registrarse"

async function register() {

    const registerUserInput = document.getElementById("registerUser");
    const registerPasswordInput = document.getElementById("registerPassword");
    const registerPasswordConfirmInput = document.getElementById("registerPasswordConfirm");

    const textPasswordsDontMatch = document.getElementById("passwordsDontMatch");
    const textUserAlreadyRegistered = document.getElementById("userAlreadyRegistered");

    // Validación de que los campos no pueden estar vacíos

    if (registerUserInput.value === "") {
        registerUserInput.placeholder = "Este campo no puede estar vacío.";
    }

    if (registerPasswordInput.value === "") {
        registerPasswordInput.placeholder = "Este campo no puede estar vacío.";
    }

    if (registerPasswordConfirmInput.value === "") {
        registerPasswordConfirmInput.placeholder = "Este campo no puede estar vacío.";
    }

    if(registerUserInput.value === "" || registerPasswordInput.value === "" || registerPasswordConfirmInput.value === "") return;

    // Validación de que las contraseñas sean iguales

    const username = registerUserInput.value;
    const password = registerPasswordInput.value;
    const passwordConfirm = registerPasswordConfirmInput.value;

    if (password !== passwordConfirm) {
        textPasswordsDontMatch.style.display = "block";
        textUserAlreadyRegistered.style.display = "none";
        return;
    }

    // Comprueba si existe el usuario

    const users = getUsers();
    const userExists = username in users;

    if (userExists) {
        textUserAlreadyRegistered.style.display = "block";
        textPasswordsDontMatch.style.display = "none";
        return;
    }

    // Quita mensajes de error, crea el usuario y se inicia sesión

    textPasswordsDontMatch.style.display = "none";
    textUserAlreadyRegistered.style.display = "none";

    users[username] = password;
    setUsers(users);

    setCurrentUser(username);

    await animacionVentana("registerWindow", "desaparecer");
    redirect();

}

// Cerrar ventana

function disposeWindow(event) {

    const loginWindow = document.getElementById("loginWindow");
    const registerWindow = document.getElementById("registerWindow");

    // Si se hace clic, OJO: fuera! de la ventana (en el padding. La ventana es el objeto en sí y por eso no cuenta)

    if (event.target === loginWindow) {
        animacionVentana("loginWindow", "desaparecer");
    }

    if (event.target === registerWindow) {
        animacionVentana("registerWindow", "desaparecer");
    }

    // Si se presiona "Esc"

    if (event.key === "Escape") {

        if (loginWindow.style.display !== "none") {
            animacionVentana("loginWindow", "desaparecer");
        }
        if (registerWindow.style.display !== "none") {
            animacionVentana("registerWindow", "desaparecer");
        }

    }
    
}

document.addEventListener("mousedown", disposeWindow);
document.addEventListener("keydown", disposeWindow);

/*
document.addEventListener("DOMContentLoaded", () => {
    window.openLoginWindow = openLoginWindow;
    window.openRegisterWindow = openRegisterWindow;
    window.login = login;
    window.register = register;
});
*/

/**
 * El siguiente código es susceptible de salvar la tarea 12 por fin..
 */

document.getElementById("openRegisterWindowEvent").addEventListener("click", openRegisterWindow);
document.getElementById("openLoginWindowEvent").addEventListener("click", openLoginWindow);
document.getElementById("registerEvent").addEventListener("click", register);
document.getElementById("loginEvent").addEventListener("click", login);