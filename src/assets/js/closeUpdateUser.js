export default function closeUpdateUser(nameUser, idUser) {
    let buttonsAddUser = document.getElementsByName(idUser);
    for (let button of buttonsAddUser) {
        button.classList.remove("visible");
        button.classList.add("invisible");
    }
    let buttonsUpdateUser = document.getElementsByName(nameUser);
    for (let button of buttonsUpdateUser) {
        button.classList.remove("invisible");
        button.classList.add("visible");
    }
}