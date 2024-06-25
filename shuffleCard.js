// Create a deck of cards
function createDeck() {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  let deck = [];

  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(`${rank} of ${suit}`);
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; 
  }
  return deck;
}

let deck = createDeck();
console.log("Original Deck:", deck);
let shuffledDeck = shuffleDeck(deck);
console.log("Shuffled Deck:", shuffledDeck);
