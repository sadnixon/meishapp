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
        ["new", 0, 1],
        ["waxing crescent", 1, 6.38264692644],
        ["first quarter", 6.38264692644, 8.38264692644],
        ["waxing gibbous", 8.38264692644, 13.76529385288],
        ["full", 13.76529385288, 15.76529385288],
        ["waning gibbous", 15.76529385288, 21.14794077932],
        ["last quarter", 21.14794077932, 23.14794077932],
        ["waning crescent", 23.14794077932, 28.53058770576],
        ["new", 28.53058770576, 29.53058770576],
    ];

    let thephase
    for (let i=0; i<9; i++ ) {
        if ((currentdays >= phases[i][1]) && (currentdays <= phases[i][2])) {
            thephase = phases[i][0];
            break
        }
    }

    $("moon").append('<p>The Moon Phase is ' + thephase + '</p>')
})();