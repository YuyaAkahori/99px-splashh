var current;
$.scrollify({
    section:".ctc",
    setHeights:false,
    before:function(i,box){
        current = i;
    },
});
$(window).on('resize',function(){
    if(current){
        var currentScrl = $('.ctc').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});

var winH = $(window).height();
$('.box').outerHeight(winH);
 
$(window).on('load',function(){
    setBgImg($('.fitImg'));
});
 
$(window).on('resize',function(){
    winH = $(window).height();
    $('.box').outerHeight(winH);
    setBgImg($('.fitImg'));
});
 
function setBgImg(object){
    var imgW = object.width();
    var imgH = object.height();
 
    var winW = $(window).width();
    var winH = $(window).height();  

    var scaleW = winW / imgW;
    var scaleH = winH / imgH;

    var fixScale = Math.max(scaleW, scaleH);
 
    var setW = imgW * fixScale;
    var setH = imgH * fixScale;
 
    var moveX = Math.floor((winW - setW) / 2);
    var moveY = Math.floor((winH - setH) / 2);
 
    object.css({
        'width': setW,
        'height': setH,
        'left' : moveX,
        'top' : moveY
    });     
}