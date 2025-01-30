let cardsEl=document.querySelector("#card-el")
let sumEl=document.querySelector("#sum-el")
let messageEl=document.querySelector("#message-el")
let isAlive=false
let hasblackjack=false
let sum=0
let cards = [] 

function randomCards(){
    let card=Math.floor(Math.random()*13)+1
return card
}





function startGame() {

    let firstCard=randomCards()
    let SecondCard=randomCards()

    cards = [firstCard,SecondCard]
    sum = firstCard+SecondCard
    render()
 
}

function render(){
    cardsEl.textContent="cards :"
  for(let i=0; i < cards.length ; i++){
    cardsEl.textContent += cards[i] + " "
  }

  if (sum<=20){
     messageEl.textContent="do you want to draw a new card ?"
  }
  else if(sum==21){
    messageEl.textContent="You've got Blackjack!"
    hasblackjack=true
  }
  else{
    messageEl.textContent="You are out of the game !!!"
  }

  sumEl.textContent="sum : "+sum
}

function newCard(){
  let add=randomCards()
  sum+= add
  cards.push(add)
   render()
 
       
    }


