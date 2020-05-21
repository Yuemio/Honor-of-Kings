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
    var span_list = document.querySelector('.promoTrigger').querySelectorAll('span');
    for (var i = 0; i < span_list.length; i++) {
        if (rotatePic == i) {
            span_list[i].id = 'promo-active';
        } else {
            span_list[i].id = '';
        }
    }
    promo_list.style.marginLeft = rotatePic * -604 + 'px';
    rotatePic++;
    rotatePic %= 5;
}

function setPromoPic(n) {
    stopRotate();
    rotatePic = n;
    Rotate();
}

function startRotate() {
    rotateTimer = setInterval("Rotate()", 5000);
}

function stopRotate() {
    clearTimeout(rotateTimer);
}

startRotate();

function setNewsList(n) {
    var newsBox = document.querySelector('.news-slide-box');
    newsBox.style.marginLeft = n * -359 + 'px'
    var newsTab = document.querySelector('.news_tab');
    var tabList = newsTab.querySelectorAll('a');
    for (var i = 0; i < tabList.length; i++) {
        if (i == n) {
            tabList[i].id = 'news_tab_on';
        } else {
            tabList[i].id = '';
        }
    }
}

function itemSubNavMouseOver(n) {
    var nav = document.querySelector('.item_subnav');
    var nav_list = nav.querySelectorAll('a');
    for (var i = 0; i < nav_list.length; i++) {
        if (i == n) {
            nav_list[i].className = 'on'
        } else {
            nav_list[i].className = ''
        }
    }

    var div = document.querySelector('.item_thirdnav');
    var ul_list = div.querySelectorAll('ul');
    for (var i = 0; i < ul_list.length; i++) {
        if (i == n) {
            ul_list[i].className = 'tganime-fadein on'
        } else {
            ul_list[i].className = 'tganime-fadein'
        }
    }

    if (n >= 2)
        return;
    itemThirdNavMouseOver(n + 1, 0)

    // if (n < 2)
    //     return;
    // var nav = document.querySelector('#item_thirdnav' + ++n);
    // var nav_list = nav.querySelectorAll('a');
    // for (var i = 0; i < nav_list.length; i++) {
    //     if (i == 0) {
    //         nav_list[i].className = 'on'
    //     } else {
    //         nav_list[i].className = ''
    //     }
    // }
}

function itemThirdNavMouseOver(m, n) {
    var nav = document.querySelector('#item_thirdnav' + m);
    var nav_list = nav.querySelectorAll('a');
    for (var i = 0; i < nav_list.length; i++) {
        if (i == n) {
            nav_list[i].className = 'on'
        } else {
            nav_list[i].className = ''
        }
    }

    var div = document.querySelector('.item_content');
    var ul_list = div.querySelectorAll('ul');
    for (var i = 0; i < ul_list.length; i++) {
        if (ul_list[i].id == 'item_content' + m + (n + 1)) {
            ul_list[i].className = 'tganime-fadein on'
        } else {
            ul_list[i].className = 'tganime-fadein'
        }
    }
}