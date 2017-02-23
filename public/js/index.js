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

    // auto the position of the footer
    var foot = document.getElementsByClassName('foot-wrapper')[0];
    if (foot.offsetTop < window.innerHeight) {
        foot.style.bottom = '0';
    }

    //show the coop
    var image = new Image();
    image.addEventListener('load', showImgOfCoop);
    image.src = 'img/logos/coop.png';
    function showImgOfCoop() {
        var canvasList = document.getElementById('coopList').getElementsByTagName('canvas');
        var width = 160;
            height = 50;

        for (var i = 0, len = canvasList.length; i < len; i++) {
            var context = canvasList[i].getContext("2d");
            var sXPot = i%6 * 160;
            var sYPot = parseInt(i/6) * 50;
            context.drawImage(image, sXPot, sYPot, width, height, 0, 0, width, height);
        }
    }
}
