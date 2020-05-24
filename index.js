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
    itemContentInVisible();
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

function heroTypeMouseOver(m, n) {
    var div = document.querySelector('.hero_list');
    var ul_list = div.querySelectorAll('ul');
    for (var i = 0; i < ul_list.length; i++) {
        if (ul_list[i].id == 'hero_list' + n) {
            ul_list[i].className = 'tganime-fadein on'
        } else {
            ul_list[i].className = 'tganime-fadein'
        }
    }

    div = document.querySelector('.hero_type');
    var li_list = div.querySelectorAll('li');
    for (var i = 0; i < ul_list.length; i++) {
        if (i == m) {
            li_list[i].className = 'on'
        } else {
            li_list[i].className = ''
        }
    }
}

function itemContentVisible() {
    document.querySelector('.dropdown').style.display = 'block';
}

function itemContentInVisible() {
    document.querySelector('.dropdown').style.display = 'none';
}

function heroSkinNavMouseOver(n) {
    var div = document.querySelector('.hero-skin-slide');
    div.style.marginLeft = -295 * n + 'px'
    var ul = document.querySelector('.hero-skin').querySelector('.item_subnav');
    var list = ul.querySelectorAll('a');
    for (var i = 0; list.length; i++) {
        if (i == n) {
            list[i].className = 'on';
        } else {
            list[i].className = '';
        }
    }

}

function matchSubNavMouseOver(n) {
    var nav = document.querySelector('.match_center').querySelector('.item_subnav');
    var nav_list = nav.querySelectorAll('a');
    for (var i = 0; i < nav_list.length; i++) {
        if (i == n) {
            nav_list[i].className = 'on'
        } else {
            nav_list[i].className = ''
        }
    }

    var div = document.querySelector('.match_center').querySelector('.item_content');
    var ul_list = div.querySelectorAll('ul');
    for (var i = 0; i < ul_list.length; i++) {
        if (i == n) {
            ul_list[i].className = 'tganime-fadein on'
        } else {
            ul_list[i].className = 'tganime-fadein'
        }
    }

    div_list = document.querySelectorAll('.item_match');
    for (var i = 0; i < ul_list.length; i++) {
        if (i == n) {
            div_list[i].className = 'item_match tganime-fadein on'
        } else {
            div_list[i].className = 'item_match tganime-fadein'
        }
    }
}

function wcBtnMouseover() {
    document.querySelector('.gzh').className = 'gzh pa tganime-fadein on';
}

function wcBtnMouseout() {
    document.querySelector('.gzh').className = 'gzh pa tganime-fadein';
}

$('div.hero_type.fl li').bind("mouseenter", function () {
    var tid = $(this).attr('data-id');
    var n = $(this).index();
    if (tid == 0) {
        //????dz????20???
        var encodeParam = 'E5CB3C064B7A772867B1B552594434FCA26621A002CCB5AF47407E70297E2D6EE7962AC5C4D05234943B0144EDFBDCC4C2A285820C8983E5DE4E22B38EF167CCCA62220D5B3FF8BF83283431B8FF17FB790EDAA0932201873DEC7556F3CFF3AD325B51D6FF5A451618921BA48FF6818B53191FA3C7ED56E51021350FDC66A01CB44BB53178F3C501';
        $.ajax({
            url: 'https://pvp.ingame.qq.com/php/ingame/smoba/top_heros.php?partition=1119&roleid=90876401&area=1&physicalID=1&algorithm=v2&version=2.14.6a&timestamp=1493112232746&appid=1104466820&sig=11a92c24e8f0d1fc74e31bb8c5203a09&encode=2&msdkEncodeParam=' + encodeParam + '&game=smoba&start=1&num=20&ordertype=1&filter=0&grade=-1&herotype=0&matchtype=2',
            dataType: 'jsonp',
            'success': function (data) {
                console.log('hello');
                console.log(data);
                
                // var RetHTML = '';
                // if (data.status == 'SUCCESS') {
                //     var hdata = data.data.herolist;
                //     for (var x in hdata) {
                //         var hid = hdata[x].heroid;
                //         if (module_exports[hid] != "") {
                //             herolist[x] = module_exports[hid];
                //             herolistIds[x] = hid;
                //         }
                //     }
                // }
            }
        })
    }
});

function showData(result) {
    var data = JSON.stringify(result);
    console.log(data);

}