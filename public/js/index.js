window.onload = function () {

    /* img animation */
    // var imgbox = document.getElementsByClassName('img-box')[0];
    // var widthOfBox = imgbox.clientWidth;
    // var heightOfBox = imgbox.clientHeight;
    //
    // var maxX = widthOfBox/100;
    // var maxY = heightOfBox/100;
    // imgbox.onmousemove = function (event) {
    //     event.stopPropagation();
    //
    //     var offX = 0.5 - event.offsetX / widthOfBox;
    //     var rX = offX * maxY;
    //     var offY = 0.5 - event.offsetY / heightOfBox;
    //     var rY = offY * maxX;
    //
    //     imgbox.style.transform = 'rotateX(' + rY + 'deg)' + ' rotateY(' + (-rX-0.5) + 'deg)' + ' translate3d(0,0,10px)';
    // }
    //
    // imgbox.onmouseout = function () {
    //     imgbox.style.transform = '';
    // }

    var foot = document.getElementsByClassName('foot-wrapper')[0];
    if (foot.offsetTop < window.innerHeight) {
        foot.style.bottom = '0';
    }
}
