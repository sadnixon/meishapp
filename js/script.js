(function() {
    "use strict";
    
    var Images = [
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Black-Ice.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Colour-Storm.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Electric-Water.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Lime-Drops.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Natural-Bubbles.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Nice-Try.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Peach-Hexagon.jpg',
        'https://agskryp.github.io/Random-Image-jQuery/Images/Background---Room-303.jpg'
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num],
            imgString = '<img src="' + pic + '" height="100%" width="100%" />';

        return imgString;
    }

    $("#picture").append(getRandomImage(Images));

})();
