const nameAddUser = document.getElementById("nameAddUser");
const btnAddUser = document.getElementById("btnAddUser");
const ulListUsers = document.getElementById("ulListUsers");
const btnDeleteUser = document.getElementsByClassName("delete-button");
let listUsers = [

];

btnAddUser.addEventListener("click", addUser);

function addUser() {
    const name = nameAddUser.value;
    if (textNameUserValid(name)) {
        let addPush = {};
        addPush.id = Date.now();
        addPush.name = name;
        addPush.desactivated = false;
        listUsers.push(addPush);
        nameAddUser.value = "";
        listAllUsers();
        alert(`User ${name} added successfully!`);
    }
}

function activateButtonsDelete(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', action => {
            deleteUser(button.value, button.name);
        })
    })
}

function textNameUserValid(name) {
    if (name == "") {
        alert("You must enter the name of the participant.");
        return false;
    }

    if (listUsers.filter(function (user) { return user.name == name }) != "") {
        alert("That name is already being used.\nPlease use another one.");
        return false;
    }

    return true;
}

function orderAsc(list, key) {
    list.sort(function (a, b) { return a.name > b.name ? 1 : b.name > a.name ? -1 : 0 });
}

function listAllUsers() {
    let list = "";
    orderAsc(listUsers, "name");
    listUsers.forEach(user => {
        list += `<li><p>${user.name}</p>`;
        list += `<input type="button" name="${user.id}" id="delete-user-${user.id}" value="${user.name}" class="delete-button">`;
        list += `</li>`;
    });
    ulListUsers.innerHTML = list;
    let buttons = document.querySelectorAll('.delete-button');
    activateButtonsDelete(buttons);
}

function deleteUser(nameUser, idUser) {
    if (!confirm(`Are you sure you want to remove ${nameUser}?`)) {
        return;
    }

    /*
    let indice= 0;
    listUsers.filter(function (user) {
        console.log(indice);
        if (user.id == idUser) {
            console.log("Borrar este > " + indice);
            listUsers.splice(user, indice);
        }
        indice++;
    })
    */

    let list = listUsers.findIndex(user => user.id == idUser);
    console.log(list);
    if(list > -1){
        listUsers.splice(list, 1);
    }

    listAllUsers();
    alert(`User ${nameUser} deleted successfully!`);
}