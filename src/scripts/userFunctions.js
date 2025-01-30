// Variable de usuarios

let users;

// Getter del array de objetos usuario

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}

// Setter del array de objetos usuario

function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// String del nombre actual del usuario

function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

// Establecer usuario actual

function setCurrentUser(username) {
    localStorage.setItem('currentUser', username);
}

// Cerrar sesión y redirigir

function logout(){

    localStorage.removeItem("currentUser");
    
    // Copia de redirect - no se referenciar bien ni ingeniármelas, pero ahora mismo me da igual

    if(getCurrentUser() == null){
        
        const finalURL = new URL("../../index.html", import.meta.url);
        window.location.href = finalURL.href;
    
    }

}

// Array de imágenes de usuarios (se asocia al nombre del usuario)
let usersImages = JSON.parse(localStorage.getItem('usersImages')) || {};

// Obtener la imagen de un usuario

function getImage(username) {
    return usersImages[username] || null;
}

// Guardar la imagen del usuario

function setImage(username, imageData) {
    usersImages[username] = imageData;
    localStorage.setItem('usersImages', JSON.stringify(usersImages));
}

// Eliminar la imagen de un usuario

function deleteImage(username) {
    if (usersImages[username]) {
        delete usersImages[username];
        localStorage.setItem('usersImages', JSON.stringify(usersImages));
    }
}

// Activar (o desactivar) sonido

function setSound(booleano){
    localStorage.setItem('sound', booleano);
}

setSound(true);

// Función básica para esperar un número determinado de ms.

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Función básica para des/aparecer una ventana

async function animacionVentana(ventana, tipo){

    document.getElementById(ventana).style.opacity = 0;

    if(tipo == "aparecer"){

        document.getElementById(ventana).style.display = "flex";

        for(let i = 0; i <= 10; i++){
            document.getElementById(ventana).style.opacity = i / 10;
            await esperar(10);
        }

    }else if(tipo == "desaparecer"){

        for(let i = 10; i >= 0; i--){
            document.getElementById(ventana).style.opacity = i / 10;
            await esperar(10);
        }

        document.getElementById(ventana).style.display = "none";

    }

}

export {
    users,
    getUsers,
    setUsers,
    getCurrentUser,
    setCurrentUser,
    logout,
    usersImages,
    getImage,
    setImage,
    deleteImage,
    setSound,
    esperar,
    animacionVentana
};