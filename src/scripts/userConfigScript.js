import {
    getUsers, 
    setUsers, 
    getCurrentUser, 
    setCurrentUser, 
    logout,
    getImage, 
    setImage, 
    deleteImage, 
    setSound, 
    esperar, 
    animacionVentana
} from './userFunctions.js';

// Redirección a "index.html" si no hay una sesión iniciada

function redirect() {

    if(getCurrentUser() == null){
        
        const finalURL = new URL("../index.html", import.meta.url); // (=> Después de Tarea 11)
        window.location.href = finalURL.href;
    
    }
    
}

redirect();

// Función para actualizar todos los textos que tengan el nombre del usuario

function updateUsernameTexts(){

    const texts = document.querySelectorAll("#userName")

    for(const text of texts){

        text.innerHTML = getCurrentUser();

    }

}

updateUsernameTexts();

// Cargar avatar del usuario actual al entrar en la página

function loadUserAvatar() {

    const username = getCurrentUser();
    const savedAvatar = getImage(username);

    // Si existe una imagen guardada, actualizar el src del avatar
    if (savedAvatar) {
        
        const avatars = document.querySelectorAll('#userAvatar');

        avatars.forEach((avatar) => {
            avatar.src = savedAvatar;
        });

    }

}

loadUserAvatar();

// Abrir ventana de "Configuración"

async function openConfigWindow() {

    animacionVentana("configWindow", "aparecer");

    const soundCheckbox = document.getElementById("soundCheckbox");

    soundCheckbox.addEventListener("change", ()=>{

        setSound(soundCheckbox.checked);

        if(soundCheckbox.checked){

            new Audio("src/media/audio/flac/rellenar.flac").play();

        }

    });

}

// Abrir ventana de "Usuario"

async function openUserWindow() {

    animacionVentana("userWindow", "aparecer");

    const textPasswordNotLongEnough = document.getElementById("passwordNotLongEnough");
    const textUserAlreadyRegistered = document.getElementById("userAlreadyRegistered");
    const textChangedData = document.getElementById("changedData");
    
    textPasswordNotLongEnough.style.display = "none";
    textUserAlreadyRegistered.style.display = "none";
    textChangedData.style.display = "none";

    const windowContent = document.getElementById("windowContent");
    
    windowContent.style.transform = "scale(0.7)";

    const changeUsernameInput = document.getElementById("changeUsernameInput");
    const changePasswordInput = document.getElementById("changePasswordInput");

    const users = getUsers();

    changeUsernameInput.value = getCurrentUser();
    changePasswordInput.value = users[getCurrentUser()];

    function checkInput(event) {
    
        if (event.target === changeUsernameInput) return;
    
        textPasswordNotLongEnough.style.display = "none";
        textUserAlreadyRegistered.style.display = "none";
        windowContent.style.transform = "scale(0.7)";
    
        if (changePasswordInput.value.length == 0) {

            textPasswordNotLongEnough.style.display = "none";
            windowContent.style.transform = "scale(0.7)";

        } else if (changePasswordInput.value.length < 8) {

            textPasswordNotLongEnough.style.display = "block";
            windowContent.style.transform = "scale(0.65)";

        }

    }

    changeUsernameInput.addEventListener("input", checkInput);
    changePasswordInput.addEventListener("input", checkInput);

}

// Abrir ventana de Confirmación

async function openConfirmWindow() {

    animacionVentana("confirmWindow", "aparecer");

    document.getElementById("confirmText").textContent = "¿Estás seguro que quieres borrar a " + getCurrentUser() + "?";

}

// Cerrar ventana de Configuración

async function disposeConfigWindow() {
    
    animacionVentana("configWindow", "desaparecer");

}

// Cerrar ventana de "Usuario"

async function disposeUserWindow() {

    await animacionVentana("userWindow", "desaparecer");

}

// Cerrar ventana de "Usuario"

async function disposeConfirmWindow() {

    await animacionVentana("confirmWindow", "desaparecer");

}

// Cerrar ventana

function disposeWindow(event) {

    const configWindow = document.getElementById("configWindow");
    const userWindow = document.getElementById("userWindow");
    const confirmWindow = document.getElementById("confirmWindow");

    if (event.target === configWindow) {
        animacionVentana("configWindow", "desaparecer");
    }else if (event.target === userWindow) {
        animacionVentana("userWindow", "desaparecer");
    }else if (event.target === confirmWindow){
        animacionVentana("confirmWindow", "desaparecer");
    }

    // Si se presiona "Esc"

    if (event.key === "Escape") {

        if (configWindow.style.display !== "none") {
            animacionVentana("configWindow", "desaparecer");
        }else if (confirmWindow.style.display !== "none"){
            animacionVentana("confirmWindow", "desaparecer");
        }else if (userWindow.style.display !== "none") {
            animacionVentana("userWindow", "desaparecer");
        }

    }
    
}

async function confirmChanges(){

    const changeUsernameInput = document.getElementById("changeUsernameInput");
    const changePasswordInput = document.getElementById("changePasswordInput");

    const textUserAlreadyRegistered = document.getElementById("userAlreadyRegistered");
    const textPasswordNotLongEnough = document.getElementById("passwordNotLongEnough");
    const textChangedData = document.getElementById("changedData");
    
    textChangedData.style.display = "none";
    
    const windowContent = document.getElementById("windowContent");
    
    windowContent.style.transform = "scale(0.7)";

    // Validación de que los campos no pueden estar vacíos

    if (changeUsernameInput.value === "") {
        changeUsernameInput.placeholder = "Este campo no puede estar vacío.";
    }

    if (changePasswordInput.value === "") {
        changePasswordInput.placeholder = "Este campo no puede estar vacío.";
    }

    if (changePasswordInput.value.length < 8) {
        textPasswordNotLongEnough.style.display = "block";
        windowContent.style.transform = "scale(0.65)";
        return;
    }

    if (changeUsernameInput.value === "" || changePasswordInput.value === "") return;

    // Comprueba el usuario

    const username = changeUsernameInput.value;
    const password = changePasswordInput.value;

    const users = getUsers();
    const userFound = username in users;

    if (userFound && username != getCurrentUser()) {
        textUserAlreadyRegistered.style.display = "block";
        windowContent.style.transform = "scale(0.65)";
        return;
    }

    // Si se ha hecho ningún cambio mostrar mensaje

    let espera = false;

    if(username != getCurrentUser() || password != users[getCurrentUser()]){
        textChangedData.style.display = "block";
        windowContent.style.transform = "scale(0.65)";
        espera = true;
    }

    // Establece la contraseña y reemplaza nombres

    users[username] = users[getCurrentUser()];
    delete users[getCurrentUser()];

    const previousUsername = getCurrentUser();
    setCurrentUser(username);

    users[username] = password;
    setUsers(users);

    // Cambiar el nombre al cual está la imagen actual asociada.

    if(username != previousUsername){

        const currentImage = getImage(previousUsername);

        if (currentImage) {
            setImage(username, currentImage); // Asociar la imagen al nuevo nombre
            deleteImage(previousUsername); // Eliminar la imagen del nombre anterior
        }

    }

    textUserAlreadyRegistered.style.display = "none";

    updateUsernameTexts();

    if(espera){
        await esperar(500);
    }

    disposeUserWindow();

}

async function logoutSession(){

    await disposeUserWindow();
    
    logout();

}

async function deleteAccount(){

    const confirmText = document.getElementById("confirmText");

    confirmText.style.transform = "scale(3)";
    confirmText.textContent = "👋";

    await esperar(300);
    await disposeConfirmWindow();

    const username = getCurrentUser();

    // Eliminar al usuario de la lista de usuarios

    const users = getUsers();
    delete users[username];
    setUsers(users);

    // Eliminar la imagen asociada al usuario
    deleteImage(username);

    await logoutSession();

}

document.addEventListener("mousedown", disposeWindow);
document.addEventListener("keydown", disposeWindow);

/**
 * Manejo de la imagen de perfil
 */

const editIcon = document.getElementById('editIcon');
const userAvatar = document.getElementById('userAvatar');
const fileInput = document.getElementById('fileInput');

// Abrir selector de archivos

editIcon.addEventListener('click', () => {
    fileInput.click();
});

// Al seleccionar una imagen, actualiza la imagen del avatar
fileInput.addEventListener('change', (event) => {

    const file = event.target.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            // Obtener el nombre del usuario actual
            const username = getCurrentUser();

            // Actualizar el avatar con la imagen seleccionada
            userAvatar.src = e.target.result;

            // Guardar la imagen en el array de imágenes asociado al usuario
            setImage(username, e.target.result);

            // Actualizar todos los elementos con id "userAvatar" a la nueva imagen
            const avatars = document.querySelectorAll('#userAvatar');
            avatars.forEach((avatar) => {
                avatar.src = e.target.result;
            });

        };

        reader.readAsDataURL(file);
        
    }

});

/*
// Hacemos visible esto de las ventanas para que pillen el ámbito

document.addEventListener("DOMContentLoaded", () => {
    window.logoutSession = logoutSession;
    window.deleteAccount = deleteAccount;
    window.confirmChanges = confirmChanges;
    window.openUserWindow = openUserWindow;
    window.openConfigWindow = openConfigWindow;
    window.openConfirmWindow = openConfirmWindow;
    window.disposeConfigWindow = disposeConfigWindow;
    window.disposeConfirmWindow = disposeConfirmWindow;
});
*/

// De nuevo, esto salvará la tarea 12

document.getElementsByClassName("openUserWindowEvent")[0].addEventListener("click", openUserWindow);
document.getElementById("openConfigWindowEvent").addEventListener("click", openConfigWindow);
document.getElementById("disposeConfigWindowEvent").addEventListener("click", disposeConfigWindow);
document.getElementById("openConfirmWindowEvent").addEventListener("click", openConfirmWindow);
document.getElementById("disposeConfirmWindowEvent").addEventListener("click", disposeConfirmWindow);
document.getElementById("confirmChangesEvent").addEventListener("click", confirmChanges);
document.getElementById("logoutSessionEvent").addEventListener("click", logoutSession);
document.getElementById("deleteAccountEvent").addEventListener("click", deleteAccount);