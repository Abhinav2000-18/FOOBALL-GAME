// Sample Player Data
const players = [
    { name: "Lionel Messi", rating: 95, price: 5000 },
    { name: "Cristiano Ronaldo", rating: 94, price: 4500 },
    { name: "Neymar Jr", rating: 91, price: 4000 },
    { name: "Kylian Mbappé", rating: 93, price: 4800 },
    { name: "Kevin De Bruyne", rating: 92, price: 4700 },
];

// Initialize Currency
let diamonds = 10000;
let gold = 5000;

// Update Currency Display
function updateCurrencyDisplay() {
    document.getElementById("diamondCount").textContent = diamonds;
    document.getElementById("goldCount").textContent = gold;
}

// Function to Display Player Cards in the Market
function displayMarket() {
    const cardGrid = document.querySelector('.card-grid');
    cardGrid.innerHTML = ''; // Clear the market grid

    players.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.innerHTML = `
            <h3>${player.name}</h3>
            <p>Rating: ${player.rating}</p>
            <p>Price: ${player.price} Diamonds</p>
            <button onclick="buyPlayer(${player.price})">Buy</button>
        `;
        cardGrid.appendChild(card);
    });
}

// Function to Buy a Player
function buyPlayer(price) {
    if (diamonds >= price) {
        diamonds -= price; // Deduct diamonds
        updateCurrencyDisplay();
        alert("Player bought successfully!");
    } else {
        alert("Not enough diamonds!");
    }
}

// Open Pack Feature (3000 Diamonds)
document.getElementById("openPack").addEventListener("click", function() {
    if (diamonds >= 3000) {
        diamonds -= 3000;
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        alert(`You got ${randomPlayer.name} with a rating of ${randomPlayer.rating}!`);
        updateCurrencyDisplay();
    } else {
        alert("Not enough diamonds to open the pack!");
    }
});

// Initialize the Game
function initializeGame() {
    updateCurrencyDisplay();
    displayMarket();
}

// Call the initialize function when the page loads
window.onload = initializeGame;
