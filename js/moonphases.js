(function() {
    const lunardays = 29.53058770576;
    const lunarsecs = Math.floor(lunardays * 24 * 60 * 60 * 1000);
    const unixdate = Math.floor(Date.now() * 1);
    const new2000 = 947182440000;
    const totalsecs = unixdate - new2000;
    const currentsecs = totalsecs % lunarsecs;
    const currentfrac = currentsecs / lunarsecs;
    const currentdays = currentfrac * lunardays;

    const phases = [
        ["New", 0, 1,"new.jpeg"],
        ["Waxing Crescent", 1, 6.38264692644,"waxing_crescent.jpeg"],
        ["First Quarter", 6.38264692644, 8.38264692644,"first_quarter.jpeg"],
        ["Waxing Gibbous", 8.38264692644, 13.76529385288,"waxing_gibbous.jpeg"],
        ["Full", 13.76529385288, 15.76529385288,"full.jpeg"],
        ["Waning Gibbous", 15.76529385288, 21.14794077932,"waning_gibbous.jpeg"],
        ["Last Quarter", 21.14794077932, 23.14794077932,"last_quarter.png"],
        ["Waning Crescent", 23.14794077932, 28.53058770576,"waning_crescent.jpeg"],
        ["New", 28.53058770576, 29.53058770576,"new.jpeg"],
    ];

    let thephase
    for (let i=0; i<9; i++ ) {
        if ((currentdays >= phases[i][1]) && (currentdays <= phases[i][2])) {
            thephase = phases[i][0];
            phasepic = phases[i][3];
            break
        }
    }
    $("#moon").append('<p>The Moon Phase is ' + thephase + '</p>')
    $("#moon").append('<img src="https://sadnixon.github.io/meishapp/moons/' + phasepic + '" width=400" height="400"/>')
})();