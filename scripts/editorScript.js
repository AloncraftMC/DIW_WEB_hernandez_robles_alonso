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


const createDropdown = document.getElementById('createDropdown');
const createOptions = document.getElementById('createOptions');
const emptyCanvasMessage = document.getElementById('emptyCanvasMessage');
const canvas = document.getElementById('canvas');
const inspector = document.getElementById('inspectorContent');
const deleteElementButton = document.getElementById('deleteElement');

// Función para mostrar/ocultar el menú desplegable
createDropdown.addEventListener('click', () => {
    createOptions.classList.toggle('hidden');
});

// Crear elementos dinámicos en el lienzo
createOptions.addEventListener('click', (event) => {
    const option = event.target.id;
    if (option === 'createMedal' || option === 'createGoal') {
        const newElement = document.createElement('div');
        newElement.className = 'canvas-element';
        newElement.textContent = option === 'createMedal' ? 'Nueva Medalla' : 'Nuevo Objetivo';
        newElement.addEventListener('click', () => {
            selectElement(newElement);
        });
        canvas.appendChild(newElement);
        emptyCanvasMessage.classList.add('hidden');
    }
});

// Selección de un elemento
function selectElement(element) {
    inspector.querySelector('#elementTitle').textContent = element.textContent;
    inspector.querySelector('#elementDescription').textContent = 'Descripción del elemento';
    inspector.classList.remove('hidden');
}

// Eliminar un elemento seleccionado
deleteElementButton.addEventListener('click', () => {
    const selectedElement = canvas.querySelector('.selected');
    if (selectedElement) {
        canvas.removeChild(selectedElement);
        inspector.classList.add('hidden');
        if (canvas.children.length === 0) {
            emptyCanvasMessage.classList.remove('hidden');
        }
    }
});