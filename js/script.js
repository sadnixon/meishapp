(function() {
    "use strict";
    
    var Images = [
        'https://sadnixon.github.io/meishapp/tarots/Wands01.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands02.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands03.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands04.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands05.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands06.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands07.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands08.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands09.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands10.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands11.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands12.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands13.jpeg',
        'https://sadnixon.github.io/meishapp/tarots/Wands14.jpeg',
        
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num],
            imgString = '<img src="' + pic + '" />';

        return imgString;
    }

    $("#tarot").append(getRandomImage(Images));

})();
