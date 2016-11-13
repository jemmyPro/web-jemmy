window.onload = function () {
    var imgbox = document.getElementsByClassName('img-box')[0];
    var widthOfBox = imgbox.clientWidth;
    var heightOfBox = imgbox.clientHeight;

    var maxX = widthOfBox/45;
    var maxY = heightOfBox/45;
    imgbox.onmousemove = function (event) {
        event.stopPropagation();

        var offX = 0.5 - event.offsetX / widthOfBox;
        var rX = offX * maxY;
        var offY = 0.5 - event.offsetY / heightOfBox;
        var rY = offY * maxX;

        imgbox.style.transition = 'transform .2s, box-shadow 0s ease-in-out';
        imgbox.style.transform = 'rotateX(' + rY + 'deg)' + 'rotateY(' + -rX + 'deg)';
        var shadow = (offX * 20) + 'px ' + (offY * 20) + 'px ' + '50px 10px rgba(0,0,0,0.1)';
        imgbox.style.boxShadow = shadow;
    }

    imgbox.onmouseout = function () {
        imgbox.style.transform = '';
        imgbox.style.transition = 'all .2s ease-out';
        imgbox.style.boxShadow = '';
    }
}
