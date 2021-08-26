// find data in json file
const cardContainer = document.getElementById('cardContainer');
const qOneBtn = document.getElementById('q1');
const qTwoBtn = document.getElementById('q2');
const yourQuestion = document.getElementById('yourQuestion');
let qOne;
let qTwo;

async function getCardsInfo() {
  const response = await fetch('../json/cardsInfo.json');
  const json = await response.json();
  const qOneObject = json[0];
  const qTwoObject = json[1];
  qOne = qOneObject.cardInfoForQ1;
  qTwo = qTwoObject.cardInfoForQ2;
}

function createCards() {
  qOneBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qOneBtn.innerHTML;
    create(qOne);
    afterwards(qOne);
  });
  qTwoBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qTwoBtn.innerHTML;
    create(qTwo);
    afterwards(qTwo);
  });
  function create(currentQuestion) {
    for (var i = 0; i < currentQuestion.length; i++) {
      var tarotCard = document.createElement('div');
      tarotCard.setAttribute('class', 'cards');
      var cardFront = document.createElement('div');
      cardFront.setAttribute('class', 'cardsfront cardsFace');
      var cardFrontImg = document.createElement('img');
      cardFrontImg.src = '../images/talo_space.jpg';

      var cardBack = document.createElement('div');
      cardBack.setAttribute('class', 'cardsback cardsFace');
      var cardBackImg = document.createElement('img');
      var cardUrl = currentQuestion[i].cardImg;
      cardBackImg.src = cardUrl;

      cardContainer.appendChild(tarotCard);
      tarotCard.appendChild(cardFront);
      tarotCard.appendChild(cardBack);
      cardFront.appendChild(cardFrontImg);
      cardBack.appendChild(cardBackImg);
    }
  }

  function afterwards(currentArr) {
    const cardslist = document.getElementsByClassName('cards'); //抓不進array => solved: dom tree not prepared, window.onload required
    const cards = [].slice.call(cardslist);
    console.log(cards);
    if (cards) {
      for (let i = 0; i < cards.length; i += 1) {
        const card = cards[i];
        card.addEventListener('click', () => {
          card.classList.toggle("isflipped");
        });
      }
    }

    //stack cards
    const shufBtn = document.getElementById('shufBtn');
    shufBtn.addEventListener('click', () => {
      stack_cards();
    });
    function stack_cards(margin){
      cards.forEach((eachCard, idx) => {
        setTimeout(function(){
          var left = 0;
          var step = margin;
          var i = 0;
          eachCard.style.zIndex = i;
          eachCard.style.marginLeft = `${left}px`;
          eachCard.style.marginTop = `0px`;
          left = left + step;
          i++;
        }
        , idx * 150);
      });
      //清空陣列
      randCards.splice(0, randCards.length);
    }
    //seperate animation
    const separate = document.getElementById("separate");
    let card_container_width = $('#cardContainer').width();
    let card_spacing = 40;
    const cardsLength = 7;
    let randCards = [];


    separate.addEventListener('click', ()=>{
      separate_one_by_one();
    })
    function separate_one_by_one(){
      var left = 0;
      var card_width = $('.cards').width();
      var card_height = $('.cards').height();
      //initial top margin for card placement
      var top = 0;
      //initial left margin for card placement
      var left_step =  card_width + card_spacing;

      //time lag between each card placement
      var sec_step = 150;
      var time = 0;

      //loop through all cards
      shuffle(randCards);
      for (let i = 0; i < cardsLength; i++) {
        setTimeout(() => {
          let randCard = randCards[i];
          randCard.style.marginTop = `${top}px`;
          randCard.style.marginLeft = `${left}px`;

          left = left + left_step;
          if (left + card_width + card_spacing > card_container_width){
            left = 0;
            top += card_height + card_spacing;
          };
        },time)
        time += sec_step;
      }
    }
    //洗牌函式
    function fisherYatesShuffle(arr){
      for(var i = arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
      }
    }

    function shuffle(){
      for (var i = 0; i < cards.length; i++) {
        randCards.push(cards[i]);
      }
      fisherYatesShuffle(randCards);
    }


    //card Explained
    cards.forEach(card => card.addEventListener('click', () => {
      let cardBackSrc = card.getElementsByTagName('img')[1].getAttribute('src');
      let cardbackImgUrl;
      console.log(qOne);
      for (var i = 0; i < currentArr.length; i++) {
        cardbackImgUrl = currentArr[i].cardImg;
        if (cardBackSrc == cardbackImgUrl) {
          break;
        }
      }
      document.getElementById('whatYouPick').innerHTML = currentArr[i].cardName;
      document.getElementById('explain').innerHTML = currentArr[i].cardExplained;
    }));
  }



}
getCardsInfo()
  .then(cardsrelated());

function cardsrelated() {
  // Cards flip
  //const cards = document.querySelectorAll('.cards');   ///一般說的都是getElement(s)Byxxxx獲取的是動態集合，querySelector獲取的是靜態集合。
  window.onload = function () {
    createCards();   //ca't put it outside window.onload???? or it will show get the value of qOne ==>problem

  };
}
/*
// find data in json file
const cardContainer = document.getElementById('cardContainer');
const qOneBtn = document.getElementById('q1');
const qTwoBtn = document.getElementById('q2');
const yourQuestion = document.getElementById('yourQuestion');
let qOne;
let qTwo;

async function getCardsInfo() {
  const response = await fetch('../json/cardsInfo.json');
  const json = await response.json();
  const qOneObject = json[0];
  const qTwoObject = json[1];
  qOne = qOneObject.cardInfoForQ1;
  qTwo = qTwoObject.cardInfoForQ2;
}

function createCards() {
  qOneBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qOneBtn.innerHTML;
    create(qOne);
  });
  qTwoBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qTwoBtn.innerHTML;
    create(qTwo);
  });
  function create(currentQuestion) {
    for (var i = 0; i < currentQuestion.length; i++) {
      var tarotCard = document.createElement('div');
      tarotCard.setAttribute('class', 'cards');
      var cardFront = document.createElement('div');
      cardFront.setAttribute('class', 'cardsfront cardsFace');
      var cardFrontImg = document.createElement('img');
      cardFrontImg.src = '../images/talo_space.jpg';

      var cardBack = document.createElement('div');
      cardBack.setAttribute('class', 'cardsback cardsFace');
      var cardBackImg = document.createElement('img');
      var cardUrl = currentQuestion[i].cardImg;
      cardBackImg.src = cardUrl;

      cardContainer.appendChild(tarotCard);
      tarotCard.appendChild(cardFront);
      tarotCard.appendChild(cardBack);
      cardFront.appendChild(cardFrontImg);
      cardBack.appendChild(cardBackImg);
    }
  }

}
getCardsInfo()
  .then(cardsrelated());

function cardsrelated() {
  // Cards flip
  //const cards = document.querySelectorAll('.cards');   ///一般說的都是getElement(s)Byxxxx獲取的是動態集合，querySelector獲取的是靜態集合。
  window.onload = function () {
    createCards();   //ca't put it outside window.onload???? or it will show get the value of qOne ==>problem
    const cardslist = document.getElementsByClassName('cards'); //抓不進array => solved: dom tree not prepared, window.onload required
    const cards = [].slice.call(cardslist);
    console.log(cards);
    if (cards) {
      for (let i = 0; i < cards.length; i += 1) {
        const card = cards[i];
        card.addEventListener('click', () => {
          card.classList.toggle("isflipped");
        });
      }
    }

    //stack cards
    const shufBtn = document.getElementById('shufBtn');
    shufBtn.addEventListener('click', () => {
        stack_cards();
    });
    function stack_cards(margin){
      cards.forEach((eachCard, idx) => {
        setTimeout(function(){
          var left = 0;
        	var step = margin;
        	var i = 0;
          eachCard.style.zIndex = i;
          eachCard.style.marginLeft = `${left}px`;
          eachCard.style.marginTop = `0px`;
          left = left + step;
          i++;
        }
        , idx * 150);
      });
      //清空陣列
      randCards.splice(0, randCards.length);
    }
    //seperate animation
    const separate = document.getElementById("separate");
    let card_container_width = $('#cardContainer').width();
    let card_spacing = 40;
    const cardsLength = 7;
    let randCards = [];


    separate.addEventListener('click', ()=>{
      separate_one_by_one();
    })
    function separate_one_by_one(){
      var left = 0;
      var card_width = $('.cards').width();
      var card_height = $('.cards').height();
      //initial top margin for card placement
      var top = 0;
      //initial left margin for card placement
      var left_step =  card_width + card_spacing;

    	//time lag between each card placement
    	var sec_step = 150;
    	var time = 0;

    	//loop through all cards
      shuffle(randCards);
      for (let i = 0; i < cardsLength; i++) {
        setTimeout(() => {
          let randCard = randCards[i];
          randCard.style.marginTop = `${top}px`;
          randCard.style.marginLeft = `${left}px`;

          left = left + left_step;
          if (left + card_width + card_spacing > card_container_width){
    				left = 0;
    				top += card_height + card_spacing;
    			};
        },time)
        time += sec_step;
      }
    }
    //洗牌函式
    function fisherYatesShuffle(arr){
        for(var i = arr.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) ); //random index
            [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
        }
    }

    function shuffle(){
      for (var i = 0; i < cards.length; i++) {
        randCards.push(cards[i]);
      }
      fisherYatesShuffle(randCards);
    }


    //card Explained
    cards.forEach(card => card.addEventListener('click', () => {
      let cardBackSrc = card.getElementsByTagName('img')[1].getAttribute('src');
      let cardbackImgUrl;
      console.log(qOne);
      for (var i = 0; i < qOne.length; i++) {
        cardbackImgUrl = qOne[i].cardImg;
        if (cardBackSrc == cardbackImgUrl) {
          break;
        }
      }
    document.getElementById('whatYouPick').innerHTML = qOne[i].cardName;
    document.getElementById('explain').innerHTML = qOne[i].cardExplained;
    }));
  };
}
*/
