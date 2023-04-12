let quantidadeMochila = document.querySelector(".quantidade-mochila");
let quantidadeSapato = document.querySelector(".quantidade-tenis");
let valorEntrega = +document.querySelector(".valor-entrega").innerText.replace(",", ".").slice(3);
let total = document.querySelector(".valor-total");
let precoMochila = +document.querySelector(".preco-final.mochila").innerText.replace(",", ".").slice(3);
let precoSapato = +document.querySelector(".preco-final.tenis").innerText.replace(",", ".").slice(3);
let totalMochila = +quantidadeMochila.innerHTML;
let totalSapato = +quantidadeSapato.innerHTML;
let btnAdicionar = document.querySelectorAll(".btn-add");
let btnRemover = document.querySelectorAll(".btn-remove");

for (let i = 0; i < btnAdicionar.length; i++) {
  btnAdicionar[i].addEventListener("click", function () {
    if (+quantidadeMochila.innerHTML < 10 && btnAdicionar[i].classList.contains("mochila")) {
      totalMochila++;
      quantidadeMochila.innerHTML = totalMochila;
      exibe();
    }

    if (+quantidadeSapato.innerHTML < 10 && btnAdicionar[i].classList.contains("tenis")) {
      totalSapato++;
      quantidadeSapato.innerHTML = totalSapato;
      exibe();
    }
  });
}

for (let i = 0; i < btnRemover.length; i++) {
  btnRemover[i].addEventListener("click", function () {
    if (+quantidadeMochila.innerHTML >= 1 && btnRemover[i].classList.contains("mochila")) {
      totalMochila--;
      quantidadeMochila.innerHTML = totalMochila;
      exibe();
    }

    if (+quantidadeSapato.innerHTML >= 1 && btnRemover[i].classList.contains("tenis")) {
      totalSapato--;
      quantidadeSapato.innerHTML = totalSapato;
      exibe();
    }
  });
}

function exibe() {
  let valorTotal = totalMochila * precoMochila + totalSapato * precoSapato + valorEntrega;
  total.innerHTML = `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
}
