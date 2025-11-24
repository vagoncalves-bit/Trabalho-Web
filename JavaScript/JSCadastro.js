document.querySelector(".cadastro").addEventListener("submit", enterUser);

function enterUser(event) {
    event.preventDefault();

    const campos = document.getElementsByClassName('campocadastro');

    let nameUser = campos[0].value;
    let emailUser = campos[1].value;
    let passUser = campos[2].value;

    nameUser = nameUser.split('@')[0];
    localStorage.setItem("nameUser", nameUser);

    if (nameUser !== "" && passUser !== "") {
        window.location.href = "../Pages/home.html";
    }
}
