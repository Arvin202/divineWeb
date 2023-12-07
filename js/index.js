// find data in json file
const cardContainer = document.getElementById('cardContainer');
const qOneBtn = document.getElementById('q1');
const qTwoBtn = document.getElementById('q2');
const qThreeBtn = document.getElementById('q3');
const qFourBtn = document.getElementById('q4');
const qFiveBtn = document.getElementById('q5');
const qSixBtn = document.getElementById('q6');
const qSevenBtn = document.getElementById('q7');
const qEightBtn = document.getElementById('q8');
const qNineBtn = document.getElementById('q9');
const yourQuestion = document.getElementById('yourQuestion');

//question added
let qOne;
let qTwo;
let qThree;
let qFour;
let qFive;
let qSix;
let qSeven;
let qEight;
let qNine;

async function getCardsInfo() {
  const response = await fetch('../json/cardsInfo.json');
  const json = await response.json();

  ///object added
  const qOneObject = json[0];
  const qTwoObject = json[1];
  const qThreeObject = json[2];
  const qFourObject = json[3];
  const qFiveObject = json[4];
  const qSixObject = json[5];
  const qSevenObject = json[6];
  const qEightObject = json[7];
  const qNineObject = json[8];

  qOne = qOneObject.cardInfoForQ1;
  qTwo = qTwoObject.cardInfoForQ2;
  qThree = qThreeObject.cardInfoForQ3;
  qFour = qFourObject.cardInfoForQ4;
  qFive = qFiveObject.cardInfoForQ5;
  qSix = qSixObject.cardInfoForQ6;
  qSeven = qSevenObject.cardInfoForQ7;
  qEight = qEightObject.cardInfoForQ8;
  qNine = qNineObject.cardInfoForQ9;
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

  qFiveBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qFiveBtn.innerHTML;
    if (cardContainer != '') {
      cardContainer.innerHTML = '';
    }

    create(qFive);
    afterwards(qFive);    
  });

  qSixBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qSixBtn.innerHTML;
    if (cardContainer != '') {////clear container
      cardContainer.innerHTML = '';
    }

    create(qSix);
    afterwards(qSix);
  });

  qSevenBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qSevenBtn.innerHTML;
    if (cardContainer != '') {////clear container
      cardContainer.innerHTML = '';
    }

    create(qSeven);
    afterwards(qSeven);
  });

  qEightBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qEightBtn.innerHTML;
    if (cardContainer != '') {////clear container
      cardContainer.innerHTML = '';
    }

    create(qEight);
    afterwards(qEight);
  });

  qNineBtn.addEventListener('click', () => {
    yourQuestion.innerHTML = qNineBtn.innerHTML;
    if (cardContainer != '') {////clear container
      cardContainer.innerHTML = '';
    }

    create(qNine);
    afterwards(qNine);
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
    let cardslist = document.getElementsByClassName('cards'); //抓不進array => solved: dom tree not prepared, window.onload required
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
      //清空陣列
      randCards.splice(0, randCards.length);
    }
    //seperate animation
    const separate = document.getElementById("separate");
    let card_container_width = $('#cardContainer').width();
    let card_spacing = 40;
    const cardsLength = 6;
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
    //洗牌函式
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
  //const cards = document.querySelectorAll('.cards');   ///一般說的都是getElement(s)Byxxxx獲取的是動態集合，querySelector獲取的是靜態集合。
  window.onload = function () {
    createCards();   //ca't put it outside window.onload???? or it will show get the value of qOne ==>problem

  };
}
