function login () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  } else if (email === "hello" || password === "hello") {
    alert("login bem-sucedido!");

    localStorage.setItem("loggedIn", "true");

    window.location.href ="../Project X - feed/home.html"
   return;
  }

  alert("Usuário ou senha inválidos!");
}