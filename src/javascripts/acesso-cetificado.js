require("dotenv").config();

const senhaCorreta = process.env.SENHA;
function verificaSenha() {
  let senha = prompt("Informe a senha:");

  if (senha === senhaCorreta) {
    alert("Senha Correta! Redirecionando...");

    window.location.href =
      "https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/imagens-imagem-ngracadas-para-whatsapp..jpg?w=1024&ssl=1";
  } else {
    alert("Senha Incorreta! Acesso negado.");
  }
}
