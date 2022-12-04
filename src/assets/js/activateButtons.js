import activateUpdateUser from "./activateUpdateUser.js";
import closeUpdateUser from "./closeUpdateUser.js";
import UpdateUser from "./UpdateUser.js";
import deleteUser from "./deleteUser.js";

export default function activateButtons() {
    let buttonsDel = document.querySelectorAll('.delete-button');
    let buttonsUpd = document.querySelectorAll('.update-button');
    let buttonsUpdUser = document.querySelectorAll('.btn-update');
    let buttonsUpdCancel = document.querySelectorAll('.btn-cancel-update');

    buttonsDel.forEach(button => {
        button.addEventListener('click', action => {
            deleteUser(button.value, button.id);
        })
    })

    buttonsUpd.forEach(button => {
        button.addEventListener('click', action => {
            activateUpdateUser(button.value, button.name);
        })
    })

    buttonsUpdUser.forEach(button => {
        button.addEventListener('click', action => {
            UpdateUser(button.name, button.value);
        })
    })

    buttonsUpdCancel.forEach(button => {
        button.addEventListener('click', action => {
            closeUpdateUser(button.value, button.name);
        })
    })
}