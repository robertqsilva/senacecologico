require("dotenv").config();

const senhaCorreta = process.env.SENHA;

function verificaSenha() {
  let senha = prompt("Informe a senha:");

  if (senha === senhaCorreta) {
    alert("Senha Correta! Redirecionando...");

    window.location.href = "https://senacecologico.onrender.com/";
  } else {
    alert("Senha Incorreta! Acesso negado.");
  }
}
