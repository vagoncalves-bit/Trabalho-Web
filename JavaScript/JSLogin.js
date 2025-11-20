const submitButton = document.getElementsByClassName('botao')[0]
submitButton.addEventListener('click', enterUser)


function enterUser(event){
    let nameUser;
        nameUser = event.target.parentElement.getElementsByClassName('campologin')[0].value
        nameUser = nameUser.split('@')[0];
        localStorage.setItem("nameUser", nameUser);
    let passUser = event.target.parentElement.getElementsByClassName('campologin')[1].value
        if(nameUser != "" && passUser != ""){
            event.preventDefault();
            window.location.href = "home.html";
        }
}