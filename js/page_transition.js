{/* <div>
<button class="mu-page-pre"onclick="muPagePre(event)">上一页/button>
!--页数需要跟当前显示页面相匹配->
<span class="mu-page-num">1/4</span>
<button class="mu-page-next"onclick="muPageNext(event)">下一页/button>
</div> */}

// 上一頁
function muPagePre(event) {
var pre = event.target;
var detail = pre.parentNode.parentNode.getElementsByClassName ( 'mu-page-detail' );
var num = pre.parentNode.parentNode.getElementsByClassName ( 'mu-page-num' ) [0] ;
let numNow = num.innerHTML.match(/\d+/g)[0];//文本当前页数,设置为文本的第一个数字,可根据实际情况更改
if (numNow != 1) {
let pageNum = numNow - 1;
num. innerHTML = pageNum + '/' + detail. length;
detail [pageNum].classList.add(' hide' );
detail [pageNum - 1].classList. remove('hide');
  }
}

// 跳转下一页
function muPageNext(event) {
var pre = event.target;
var detail = pre.parentNode.parentNode.getElementsByClassName ( 'mu-page-detail' );
var num = pre.parentNode.parentNode.getElementsByClassName ( 'mu-page-num' ) [0] ;
let numNow = num.innerHTML.match(/\d+/g)[0];//文本当前页数,设置为文本的第一个数字,可根据实际情况更改
if (numNow != detail. length) {
let pageNum = parseInt(numNow) + 1;
num. innerHTML = pageNum + '/' + detail.length;
detail [numNow].classList. remove('hide' ) ;
detail [pageNum - 2].classList.add( ' hide' );
  }
 }

