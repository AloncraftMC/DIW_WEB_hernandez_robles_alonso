// Añadir funcionalidad de opciones al botón de crear...

const createButton = document.getElementById("createButton");

createButton.addEventListener("click", () => {

    createButton.classList.toggle("activo");

    const opciones = document.getElementById("createOptions");
    opciones.classList.toggle("oculto");

});

// Alerta de No Funcionalidad

const createFirstMedal = document.getElementById("emptyWorkspace");
const createMedalButton = document.getElementById("createMedal");
const createMedalFolderButton = document.getElementById("createMedalFolder");
const createObjectiveButton = document.getElementById("createObjective");
const createObjectiveFolderButton = document.getElementById("createObjectiveFolder");

function showFunctionalityAlert(){
    window.alert("La funcionalidad de este objeto no se va a implementar.");
}

createFirstMedal.addEventListener("click", showFunctionalityAlert);
createMedalButton.addEventListener("click", showFunctionalityAlert);
createMedalFolderButton.addEventListener("click", showFunctionalityAlert);
createObjectiveButton.addEventListener("click", showFunctionalityAlert);
createObjectiveFolderButton.addEventListener("click", showFunctionalityAlert);