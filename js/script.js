(function() {
    "use strict";
    
    var Images = [
        ['https://sadnixon.github.io/meishapp/tarots/Wands01.jpeg','https://en.wikipedia.org/wiki/Ace_of_Wands_(Tarot_card)'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands02.jpeg','https://en.wikipedia.org/wiki/Two_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands03.jpeg','https://en.wikipedia.org/wiki/Three_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands04.jpeg','https://en.wikipedia.org/wiki/Four_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands05.jpeg','https://en.wikipedia.org/wiki/Five_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands06.jpeg','https://en.wikipedia.org/wiki/Six_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands07.jpeg','https://en.wikipedia.org/wiki/Seven_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands08.jpeg','https://en.wikipedia.org/wiki/Eight_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands09.jpeg','https://en.wikipedia.org/wiki/Nine_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands10.jpeg','https://en.wikipedia.org/wiki/Ten_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands11.jpeg','https://en.wikipedia.org/wiki/Page_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands12.jpeg','https://en.wikipedia.org/wiki/Knight_of_Wands'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands13.jpeg','https://en.wikipedia.org/wiki/Queen_of_Wands_(Tarot_card)'],
        ['https://sadnixon.github.io/meishapp/tarots/Wands14.jpeg','https://en.wikipedia.org/wiki/King_of_Wands'],
        
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num][0],
            link = images[num][1],
            imgString = '<a href="' + link + '"> <img src="' + pic + '" /> </a>';

        return imgString;
    }

    $("#tarot").append(getRandomImage(Images));

})();
