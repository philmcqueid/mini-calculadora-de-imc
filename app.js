let button = document.querySelector("#calc-button");

button.addEventListener("click", () => {
    let weight = parseInt(document.getElementById("peso").value);
    let size = parseFloat(document.getElementById("altura").value);

    const imc = (weight / (size * size)).toFixed(2);

    document.querySelector("div#general-container").style.display = "none";
    document.querySelector("div#popup").style.display = "block";

    let resultado = document.querySelector("#resultado-imc");
    resultado.innerHTML = "O SEU IMC É " + imc;
    let mensagem = document.querySelector("p#mensagem");
    let dica = document.querySelector(".dicas p");

    if (imc < 18.5) {
        mensagem.innerHTML = "VOCÊ ESTÁ ABAIXO DO PESO";
        mensagem.style.backgroundColor = "yellow";
        mensagem.style.color = "white";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem.innerHTML = "SEU PESO ESTÁ NORMAL";
        mensagem.style.backgroundColor = "green";
        mensagem.style.color = "white";
    } else if (imc >= 25.0 && imc <= 29.9) {
        mensagem.innerHTML = "VOCÊ ESTÁ COM SOBREPESO";
        mensagem.style.backgroundColor = "#e0b05c";
        mensagem.style.color = "white";
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem.innerHTML = "OBRESIDADE (GRAU I)";
        mensagem.style.backgroundColor = "#cc8200";
        mensagem.style.color = "white";
    } else if (imc >= 35.0 && imc <= 39.9) {
        mensagem.innerHTML = "OBRESIDADE SEVERA (GRAU II)";
        mensagem.style.backgroundColor = "#ff4040";
        mensagem.style.color = "white";
    } else if (imc >= 40) {
        mensagem.innerHTML = "OBRESIDADE MORBIA (GRAU III)";
        mensagem.style.backgroundColor = "#a80000";
        mensagem.style.color = "white";
    } else {
        mensagem.innerHTML = "";
    }
});

let closeButton = document.querySelector("span#close");
closeButton.addEventListener("click", () => {
    document.querySelector("div#popup").style.display = "none";
    document.querySelector("div#general-container").style.display = "block";

    document.querySelector("input#peso").value = "";
    document.querySelector("input#altura").value = "";
});
