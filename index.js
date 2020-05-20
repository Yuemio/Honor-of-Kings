function AdMouseOver() {
    var ad = document.querySelector('.ost-main-2');
    ad.style.display = 'block'
}

function AdMouseOut() {
    var ad = document.querySelector('.ost-main-2');
    ad.style.display = 'none'
}

function gameRankVisible() {
    var rank = document.getElementById('ost-gameRank');
    rank.style.display = 'block'
}

function gameRankInvisible() {
    var rank = document.getElementById('ost-gameRank');
    rank.style.display = 'none'
}

function RankImgVisible(list_n, n) {
    var list = document.querySelector('#rankList_' + list_n);
    var lis = list.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        if (i == n - 1) {
            lis[i].className = 'rank-item rank-active'
        } else {
            lis[i].className = 'rank-item'
        }
    }
}

function subNavMouseOver() {
    var subNav = document.querySelector('.sub-nav');
    subNav.style.height = '285px'
}

function subNavMouseout() {
    var subNav = document.querySelector('.sub-nav');
    subNav.style.height = '0'
}

var rotatePic = 0;

function Rotate() {
    var promo_list = document.querySelector('.promo-list');
    promo_list.style.marginLeft = rotatePic + 'px';
    rotatePic -= 604;
    rotatePic %= 3020;
}

function setPromoPic(n) {
    rotatePic = n;
    Rotate();
    stopRotateTimer();
}

function startRotateTimer() {
    rotateTimer = setInterval("autoRotate()", 5000);
}

function stopRotateTimer() {
    clearTimeout(rotateTimer);
}

startRotateTimer();

function setNewsList(n) {
    var newsBox = document.querySelector('.news-slide-box');
    newsBox.style.marginLeft = n * -359 + 'px'
    var newsTab = document.querySelector('.news_tab');
    var tabList = newsTab.querySelectorAll('a');
    for (var i = 0; i < tabList.length; i++){
        if (i == n) {
            tabList[i].id = 'news_tab_on';
        } else {
            tabList[i].id = '';
        }
    }
}