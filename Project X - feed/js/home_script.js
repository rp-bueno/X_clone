
function logout () {
  alert("Você saiu da sua conta!");
  window.location.href = "../index.html"; //Redireciona para a página de login
}

function checkLogin() {
  if (!localStorage.getItem("loggedIn")) {
    alert("Por favor, faça login para acessar a página inicial.");
    //window.location.href = "index.html"; //Redireciona para pg de login se não estiver logado
  }
}

window.onload = checkLogin; //chama a função checkLogin assimn que a pg carregar