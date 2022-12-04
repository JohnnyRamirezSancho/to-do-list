import addUser from "./addUser";

const nameAddUser = document.getElementById("nameAddUser");
const btnAddUser = document.getElementById("btnAddUser");
const ulListUsers = document.getElementById("ulListUsers");
const btnDeleteUser = document.getElementsByClassName("delete-button");

export default function app() {
    btnAddUser.addEventListener("click", addUser);
}