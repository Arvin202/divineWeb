// REVIEW: load tarot review images
let reviewtarotImages = [new Image()];
let reviewtarotImage = new Image();

const tarotPictureAmount = 30;
for (var i = 0; i <= tarotPictureAmount; i++) {
  reviewtarotImage.src = `../images/review/tarotreview/塔羅占卜回饋_210819_${i}.jpg`;
  var eachImage = reviewtarotImage.src;
  reviewtarotImages.push(eachImage);
}

const tarotReview = document.getElementById('tarotReview');
for (var i = 1; i < reviewtarotImages.length; i++) {
  var img = document.createElement('img');
  img.setAttribute('class', 'tarotReviewImages');
  img.setAttribute('class', 'col-10 col-lg-3');
  img.style.margin = '3px';
  img.src = reviewtarotImages[i];
  tarotReview.appendChild(img);
}

// REVIEW: load ziwei review images
let reviewZiWeiImages = [new Image()];
let reviewZiWeiImage = new Image();
let ZiWeiPictureAmount = 25;

for (var i = 0; i <= ZiWeiPictureAmount; i++) {
  reviewZiWeiImage.src = `../images/review/ZiWeireview/紫微斗數算命回饋_210819_${i}.jpg`;
  var eachImage = reviewZiWeiImage.src;
  reviewZiWeiImages.push(eachImage);
}

const ZiWeireview = document.getElementById('ZiWeireview');

for (var i = 1; i < reviewZiWeiImages.length; i++) {
  var img = document.createElement('img');
  img.setAttribute('class', 'ZiWeiReviewImages');
  img.setAttribute('class', 'col-10 col-lg-3');
  img.style.margin = '3px';
  img.src = reviewZiWeiImages[i];
  ZiWeireview.appendChild(img);
}