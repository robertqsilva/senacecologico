const senhaCorreta = "senac82";

function verificaSenha() {
  let senha = prompt("Informe a senha:");

  if (senha === senhaCorreta) {
    alert("Senha Correta! Redirecionando...");

    window.location.href =
      "https://drive.google.com/drive/folders/1ou_64UiVbCwYg0_ilTh-QnejmysUcvhe?usp=";
  } else {
    alert("Senha Incorreta! Acesso negado.");
  }
}
