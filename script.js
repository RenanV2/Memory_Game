// Variáveis de estado do jogo.

let flippedCards = [] // Array que armazena cartas viradas (sempre duas no máximo)
let matchedPairs = 0 // Contador de pares encontrados
let attempts = 0 // Contador de tentativas
let isCheckingPair = false // Trava o jogo para verificar se os pares estão certos

//Array  com todas as cartas do jogo

const cardItens = [
  { id: 1, content: "😍", matched: false},
  { id: 2, content: "😍", matched: false},
  { id: 3, content: "👽", matched: false},
  { id: 4, content: "👽", matched: false},
  { id: 5, content: "😭", matched: false},
  { id: 6, content: "😭", matched: false},
  { id: 7, content: "🤒", matched: false},
  { id: 8, content: "🤒", matched: false},
  { id: 9, content: "👍🏼", matched: false},
  { id: 10, content: "👍🏼", matched: false},
  { id: 11, content: "🐥", matched: false},
  { id: 12, content: "🐥", matched: false},
  { id: 13, content: "☕️", matched: false},
  { id: 14, content: "☕️", matched: false},
  { id: 15, content: "🏍", matched: false},
  { id: 16, content: "🏍", matched: false},
]
