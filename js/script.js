(function() {
    "use strict";
    
    var Images = [
        ['Wands01','Ace_of_Wands_(Tarot_card)'],
        ['Wands02','Two_of_Wands'],
        ['Wands03','Three_of_Wands'],
        ['Wands04','Four_of_Wands'],
        ['Wands05','Five_of_Wands'],
        ['Wands06','Six_of_Wands'],
        ['Wands07','Seven_of_Wands'],
        ['Wands08','Eight_of_Wands'],
        ['Wands09','Nine_of_Wands'],
        ['Wands10','Ten_of_Wands'],
        ['Wands11','Page_of_Wands'],
        ['Wands12','Knight_of_Wands'],
        ['Wands13','Queen_of_Wands_(Tarot_card)'],
        ['Wands14','King_of_Wands'],
        ['Cups01','Ace_of_Cups'],
        ['Cups02','Two_of_Cups'],
        ['Cups03','Three_of_Cups'],
        ['Cups04','Four_of_Cups'],
        ['Cups05','Five_of_Cups'],
        ['Cups06','Six_of_Cups'],
        ['Cups07','Seven_of_Cups'],
        ['Cups08','Eight_of_Cups'],
        ['Cups09','Nine_of_Cups'],
        ['Cups10','Ten_of_Cups'],
        ['Cups11','Page_of_Cups'],
        ['Cups12','Knight_of_Cups'],
        ['Cups13','Queen_of_Cups'],
        ['Cups14','King_of_Cups'],
        ['Swords01','Ace_of_Swords'],
        ['Swords02','Two_of_Swords'],
        ['Swords03','Three_of_Swords'],
        ['Swords04','Four_of_Swords'],
        ['Swords05','Five_of_Swords'],
        ['Swords06','Six_of_Swords'],
        ['Swords07','Seven_of_Swords'],
        ['Swords08','Eight_of_Swords'],
        ['Swords09','Nine_of_Swords'],
        ['Swords10','Ten_of_Swords'],
        ['Swords11','Page_of_Swords'],
        ['Swords12','Knight_of_Swords'],
        ['Swords13','Queen_of_Swords'],
        ['Swords14','King_of_Swords'],
        ['Pents01','Ace_of_Coins'],
        ['Pents02','Two_of_Coins'],
        ['Pents03','Three_of_Coins'],
        ['Pents04','Four_of_Coins'],
        ['Pents05','Five_of_Coins'],
        ['Pents06','Six_of_Coins'],
        ['Pents07','Seven_of_Coins'],
        ['Pents08','Eight_of_Coins'],
        ['Pents09','Nine_of_Coins'],
        ['Pents10','Ten_of_Coins'],
        ['Pents11','Page_of_Coins'],
        ['Pents12','Knight_of_Coins'],
        ['Pents13','Queen_of_Coins'],
        ['Pents14','King_of_Coins'],
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num][0],
            link = images[num][1],
            imgString = '<a href="https://en.wikipedia.org/wiki/' + link + '"> <img src="https://sadnixon.github.io/meishapp/tarots/' + pic + '.jpeg" /> </a>';

        return imgString;
    }

    $("#tarot").append(getRandomImage(Images));

})();
