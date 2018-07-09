/**
 * Created by lenovo on 2018/7/5.
 */
var pages = document.getElementsByClassName('page');
var c = 0, n = 0;
var sPos = 0,ePos = 0;
var dir = true;
document.body.addEventListener('touchstart',function(e){
    sPos = e.touches[0].pageY;
});
document.body.addEventListener('touchend',function(e){
    isDir();
    new WOW().init();
});
document.body.addEventListener('touchmove',function(e){
    ePos = e.touches[0].pageY;
});
function isDir(){
    if(Math.abs(sPos-ePos) > 30){
        sPos-ePos > 0?dir = true : dir = false;
        pageMove();
    }
}
function pageMove(){
    if(dir){
        n = c+1;
        n >= pages.length ? n = 0 : 0;
        pages[c].className = 'page page'+ c +' toTop';
        pages[n].className = 'page page'+ n +' toBottom fromBottom';
        c = n;
        return;
    }
    n = c-1;
    n < 0 ? n = pages.length - 1 : 0;
    pages[c].className = 'page page'+ c +' pageToB';
    pages[n].className = 'page page'+ n +' toBottom pageFromT';
    c = n;
}
