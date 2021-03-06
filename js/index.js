// find data in json file
const cardContainer = document.getElementById('cardContainer');
const qOneBtn = document.getElementById('q1');
const qTwoBtn = document.getElementById('q2');
const qThreeBtn = document.getElementById('q3');
const qFourBtn = document.getElementById('q4');
const yourQuestion = document.getElementById('yourQuestion');

//question added
let qOne;
let qTwo;
let qThree;
let qFour;

async function getCardsInfo() {
  const response = await fetch('../json/cardsInfo.json');
  const json = await response.json();

  ///object added
  const qOneObject = json[0];
  const qTwoObject = json[1];
  const qThreeObject = json[2];
  const qFourObject = json[3];

  qOne = qOneObject.cardInfoForQ1;
  qTwo = qTwoObject.cardInfoForQ2;
  qThree = qThreeObject.cardInfoForQ3;
  qFour = qFourObject.cardInfoForQ4;
  // console.log(qFour);
}

function createCards() {

  qOneBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qOneBtn.innerHTML;
    if (cardContainer != '') {////clear container
      cardContainer.innerHTML = '';
    }

    create(qOne);
    afterwards(qOne);
  });
  qTwoBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qTwoBtn.innerHTML;
    if (cardContainer != '') {
      cardContainer.innerHTML = '';
    }

    create(qTwo);
    afterwards(qTwo);
  });
  qThreeBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qThreeBtn.innerHTML;
    if (cardContainer != '') {
      cardContainer.innerHTML = '';
    }

    create(qThree);
    afterwards(qThree);
  });
  qFourBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qFourBtn.innerHTML;
    if (cardContainer != '') {
      cardContainer.innerHTML = '';
    }

    create(qFour);
    afterwards(qFour);
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
    let cardslist = document.getElementsByClassName('cards'); //?????????array => solved: dom tree not prepared, window.onload required
    let cards = [].slice.call(cardslist);
    if (cards) {
      for (let i = 0; i < cards.length; i += 1) {
        const card = cards[i];
        card.addEventListener('click', () => {
          card.classList.toggle('isflipped');
        });
      }
    }

    //stack cards
    const shufBtn = document.getElementById('shufBtn');
    shufBtn.addEventListener('click', () => {
      //reset properties
      let cardslist = document.getElementsByClassName('cards');
      for (var i = 0; i < cardslist.length; i++) {
        cardslist[i].classList.remove('isflipped');////let cards turn to the cover
      }
      document.getElementById('whatYouPick').innerHTML = '';
      document.getElementById('explain').innerHTML = '';

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
      //????????????
      randCards.splice(0, randCards.length);
    }
    //seperate animation
    const separate = document.getElementById("separate");
    let card_container_width = $('#cardContainer').width();
    let card_spacing = 40;
    const cardsLength = 7;
    let randCards = [];


    separate.addEventListener('click', () => {
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
    //????????????
    function fisherYatesShuffle(arr){
      for(var i = arr.length - 1; i > 0; i--) {
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
  //const cards = document.querySelectorAll('.cards');   ///??????????????????getElement(s)Byxxxx???????????????????????????querySelector???????????????????????????
  window.onload = function () {
    createCards();   //ca't put it outside window.onload???? or it will show get the value of qOne ==>problem

  };
}
