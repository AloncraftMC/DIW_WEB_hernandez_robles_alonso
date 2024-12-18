let users;

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}

function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

function setCurrentUser(username) {
    localStorage.setItem('currentUser', username);
}