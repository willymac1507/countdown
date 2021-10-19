
function stop() {
    window.location.reload(true);
};

async function countdown() {
    for (d = 15; d > 1; d -= 3) {
        await days(d);
    };
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function days(d) {
    for (daycounter = 1; daycounter < 4; daycounter++) {
        if (d < 2) {
            return;
        };
        flip(1, d - 1);
        for (h = 24; h > 1; h -= 3) {
            await hours(h);
        };
    };
};


async function hours(h) {
    for (hourcounter = 1; hourcounter < 4; hourcounter++) {
        if (h < 2) {
            return;
        };
        flip(2, h - 1);
        for (m = 60; m > 1; m -= 3) {
            await minutes(m);
        };
    };
};

async function minutes(m) {
    for (mincounter = 1; mincounter < 4; mincounter++) {
        if (m < 2) {
            return;
        };
        flip(3, m - 1);
        for (s = 60; s > 1; s -= 3) {
            await seconds(s);
        };
    };
};

async function seconds(s) {
    for (c = 1; c < 4; c++) {
        if (s < 2) {
            s = 60;
            c = 1;
            return;
        };
        flip(4, s - 1);
        await sleep(1000);
    };
};

function flip(flipper, startNumber) {
    if ($("#flipper" + flipper).hasClass("flipped3")) {
        $("#flipper" + flipper).removeClass("flipped2 flipped3").addClass("flipped1");
        $("#flipper" + flipper + " .flipcard1 .back-content").html(startNumber.toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard2 .front-content").html(startNumber.toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard2 .back-content").html((startNumber - 1).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard3 .front-content").html((startNumber - 1).toString().padStart(2, '0'));
    } else if ($("#flipper" + flipper).hasClass("flipped2")) {
        $("#flipper" + flipper).addClass("flipped3").removeClass("flipped1");
        $("#flipper" + flipper + " .flipcard3 .back-content").html((startNumber - 2).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard1 .front-content").html((startNumber - 2).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard1 .back-content").html((startNumber - 3).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard2 .front-content").html((startNumber - 3).toString().padStart(2, '0'));
    } else if ($("#flipper" + flipper).hasClass("flipped1")) {
        $("#flipper" + flipper).addClass("flipped2");
        $("#flipper" + flipper + " .flipcard2 .back-content").html((startNumber - 1).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard3 .front-content").html((startNumber - 1).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard3 .back-content").html((startNumber - 2).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard1 .front-content").html((startNumber - 2).toString().padStart(2, '0'));
    } else {
        $("#flipper" + flipper).addClass("flipped1");
        $("#flipper" + flipper + " .flipcard1 .back-content").html(startNumber.toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard2 .front-content").html(startNumber.toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard2 .back-content").html((startNumber - 1).toString().padStart(2, '0'));
        $("#flipper" + flipper + " .flipcard3 .front-content").html((startNumber - 1).toString().padStart(2, '0'));
    };
};

window.onload = countdown();