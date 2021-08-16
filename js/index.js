// Cards flip
const cards  = document.querySelectorAll('.cards');
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

//卡片解析
const swordsCard = document.getElementById("swordsCard");
swordsCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='寶劍五正位';
  document.getElementById('explain').innerHTML='兩人間存在著溝通不良，你們可能發生了爭執或誤會，導致分離。建議放下自尊心好好溝通，才不會兩敗俱傷';
});
const sunCard = document.getElementById("sunCard");
sunCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='太陽正位';
  document.getElementById('explain').innerHTML='對方覺得與你相處非常輕鬆、愉快，你們之間有許多的共同話題，什麼都可以聊。對方對你會比較偏向朋友的喜歡，可以試著在互動中多加點曖昧與感情～';
});
const pentacleCard = document.getElementById("pentacleCard");
pentacleCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='錢幣二正位';
  document.getElementById('explain').innerHTML='對方在兩者之間做選擇，他現在還有其他在意的事情，也許是工作或是其他對象。現在的他還正在猶豫要選擇哪一方。';
});
const loversCard = document.getElementById("loversCard");
loversCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='戀人正位';
  document.getElementById('explain').innerHTML='你們是兩情相悅的，雙方都喜歡著彼此，兩人之間也有許多火花、曖昧，相處起來很愉快～';
});
const threecupsCard = document.getElementById("3cupsCard");
threecupsCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='聖杯三逆位';
  document.getElementById('explain').innerHTML='最近對方變得冷淡，可能是對方還有其他的對象，或是他還沒有想投入一段感情，只想要先保持著曖昧。';
});
const twocupsCard = document.getElementById("2cupsCard");
twocupsCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='聖杯二逆位';
  document.getElementById('explain').innerHTML='你們會感受到兩人的付出是不平等的，總是有一方付出的特別多。但付出再多也很難走進對方的內心，而無法信任對方，導致關係的失衡。';
});
const cupCard = document.getElementById("cupCard");
cupCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='聖杯一正位';
  document.getElementById('explain').innerHTML='對方對你有好感，印象也不錯。雖然還談不上喜歡，不過他對你的感覺是正面的，可以多多互動來加深感情呦～';
});
