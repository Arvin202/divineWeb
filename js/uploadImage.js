// REVIEW: load images
let reviewImages = [new Image()];
let reviewImage = new Image();
for (var i = 0; i < 31; i++) {
  reviewImage.src = `../images/review/tarotreview/塔羅占卜回饋_210819_${i}.jpg`;
  let eachImage = reviewImage.src;
  reviewImages.push(eachImage);
}
console.log(reviewImages[1]);

const tarotReview = document.getElementById('tarotReview');
for (var i = 1; i < reviewImages.length; i++) {
  var img = document.createElement('img');
  img.setAttribute('class', 'tarotReviewImages');
  img.src = reviewImages[i];
  tarotReview.appendChild(img);
}
