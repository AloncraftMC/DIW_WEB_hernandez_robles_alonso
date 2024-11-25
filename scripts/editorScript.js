// Redirección a "index.html" si hay una sesión iniciada

function redirect() {

    if(getCurrentUser() === null){

        window.location.href = "../index.html";
        
    }
    
}

redirect();

// Para cerrar sesión ya se hará bien luego

document.getElementsByTagName("h2")[0].textContent += getCurrentUser();

function logout(){
    localStorage.removeItem("currentUser");
    redirect();
}