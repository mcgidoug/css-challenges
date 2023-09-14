function createCards() {
  const container = document.getElementById("card-container");
  const numCards = 9;

  for (let i = 1; i <= numCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2>Card ${i}</h2><p>This is card ${i}.</p>`;
    container.appendChild(card);
  }
}

window.addEventListener("load", createCards);
