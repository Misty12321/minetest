//获取所有的标题
let oHot = document.getElementById('hot');
let oAmusement = document.getElementById('amusement');
let oGoods = document.getElementById('goods');
//获取需要隐藏或者是显示的元素
// 获取所有内容
let oHotNews = document.getElementById('hotNews');
let oAmusementNews = document.getElementById('amusementNews');
let oGoodsNew = document.getElementById('goodsNews');

//退出
let oExit = document.querySelector('.exit');

//消息
let oMessage = document.querySelector('.msg');


oExit.addEventListener('click', function () {
    window.location.href = '../Pages/login.html';
})

oMessage.addEventListener('click', function () {
    location.href='../Pages/zt_message.html'
})

oHot.onclick = function () {
    oHotNews.classList.toggle('show2');
    if (!oAmusementNews.classList.contains('show2')) {
        oAmusementNews.classList.toggle('show2');
    }
}
oAmusement.onclick = function () {
    oAmusementNews.classList.toggle('show2');
    if (!oHotNews.classList.contains('show2')) {
        oHotNews.classList.toggle('show2');
    }
}
oGoods.onclick = function () {
    oGoodsNew.classList.toggle('show2');
    if (!oAmusementNews.classList.contains('show2')) {
        oAmusementNews.classList.toggle('show2');
    }
}
