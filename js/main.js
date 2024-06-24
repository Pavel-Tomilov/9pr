class Card {
  _open = false
  _success = false
constructor(container, number, action) {
this.card = document.createElement('div')
this.card.classList.add('card')
this.card.textContent = number
this.number = number
this.card.addEventListener('click', () => {
  if (this.open == false && this.success == false) {
    this.open = true
    action(this)
  } 
  
})

container.append(this.card)
}

set open(value) {
this._open = value 
value ? this.card.classList.add('open') : this.card.classList.remove('open')
}

get open() {
  return this._open
}

set success(value) {
  this.__success = value 
  value ? this.card.classList.add('success') : this.card.classList.remove('success')
  }
    
  get success() {
    return this._success
  }
}





let cardsCount = 10,
cardsNumberArray = [],
cardsArray = [],
firstCard = null,
secondCard = null

function newGame(container, cardsCount) {
  for(let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i)
    cardsNumberArray.push(i)
  }
  
  cardsNumberArray.sort(() => Math.random() - 0.5);
  for(const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container,cardNumber, flip))
  }

  function flip(card) {
    if(firstCard == null){
      firstCard = card
    } else {
      if(secondCard == null) {
        secondCard = card
      }
    }
    console.log(firstCard);
    console.log(secondCard);
  }
  console.log(cardsNumberArray)
}

newGame(document.getElementById('game'), cardsCount)


