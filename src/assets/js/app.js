const nameAddUser = document.getElementById("nameAddUser");
const btnAddUser = document.getElementById("btnAddUser");
const ulListUsers = document.getElementById("ulListUsers");
const btnDeleteUser = document.getElementsByClassName("delete-button");

let listUsers = [];

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

function listAllUsers() {
    let list = "";
    orderAsc(listUsers, "name");
    listUsers.forEach(user => {
        list += `<li id="li-${user.id}"><p>${user.name}</p>`;
        list += `<input type="button" name="${user.id}" id="delete-user-${user.id}" value="${user.name} Delete" class="visible delete-button">`;
        list += `<input type="button" name="${user.id}" id="update-user-${user.id}" value="${user.name} Update" class="visible update-button">`;
        list += `<input type="text" name="${user.id}" id="input-update-user-${user.id}" value="${user.name}" class="invisible">`;
        list += `<input type="button" name="${user.id}" id="button-update-user-${user.id}" value="${user.name} U" class="invisible btn-update">`;
        list += `<input type="button" name="${user.id}" id="button-update-user-${user.id}" value="${user.name} X" class="invisible btn-cancel-update">`;
        list += `</li>`;
    });
    ulListUsers.innerHTML = list;
    activateButtons();
}

function orderAsc(list, key) {
    list.sort(function (a, b) { return a.name > b.name ? 1 : b.name > a.name ? -1 : 0 });
}

function activateButtons() {
    let buttonsDel = document.querySelectorAll('.delete-button');
    let buttonsUpd = document.querySelectorAll('.update-button');
    let buttonsUpdUser = document.querySelectorAll('.btn-update');
    let buttonsUpdCancel = document.querySelectorAll('.btn-cancel-update');
    buttonsDel.forEach(button => {
        button.addEventListener('click', action => {
            deleteUser(button.value, button.name);
        })
    })

    buttonsUpd.forEach(button => {
        button.addEventListener('click', action => {
            activateUpdateUser(button.value, button.name);
        })
    })

    buttonsUpdUser.forEach(button => {
        button.addEventListener('click', action => {
            UpdateUser(button.value, button.name);
        })
    })

    buttonsUpdCancel.forEach(button => {
        button.addEventListener('click', action => {
            closeUpdateUser(button.value, button.name);
        })
    })
}

function deleteUser(nameUser, idUser) {
    if (!confirm(`Are you sure you want to remove ${nameUser}?`)) {
        return;
    }

    let list = listUsers.findIndex(user => user.id == idUser);
    if (list > -1) {
        listUsers.splice(list, 1);
    }

    listAllUsers();
    alert(`User ${nameUser} deleted successfully!`);
}

function activateUpdateUser(nameUser, idUser) {
    let buttonsVisible = document.getElementById(`li-${idUser}`).getElementsByClassName('visible');
    for (let button of buttonsVisible) {
        button.style.display = "none";
    }
    let buttonsInvisible = document.getElementById(`li-${idUser}`).getElementsByClassName('invisible');
    for (let button of buttonsInvisible) {
        button.style.display = "inline-block";
    }
}

function closeUpdateUser(nameUser, idUser) {
    let buttonsVisible = document.getElementById(`li-${idUser}`).getElementsByClassName('visible');
    for (let button of buttonsVisible) {
        button.style.display = "inline-block";
    }
    let buttonsInvisible = document.getElementById(`li-${idUser}`).getElementsByClassName('invisible');
    for (let button of buttonsInvisible) {
        button.style.display = "none";
    }

}

function UpdateUser(nameUser, idUser) {
    if (!confirm(`Are you sure you want to update ${nameUser}?`)) {
        return;
    }
    const userUpd = document.getElementById(`input-update-user-${idUser}`);
    const name = userUpd.value;


    if (textNameUserValid(name)) {
        let list = listUsers.findIndex(user => user.id == idUser);
        let desactived = "";
        if (list > -1) {
            desactived = listUsers[list]["desactivated"];
            listUsers.splice(list, 1);
        }
        console.log(desactived);
        let addPush = {};
        addPush.id = idUser;
        addPush.name = name;
        addPush.desactivated = desactived;
        listUsers.push(addPush);
        userUpd.value = "";
        alert(`User ${nameUser} updated successfully to ${name}!`);
        listAllUsers();
       }
}