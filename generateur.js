var Kadoc = ["Pour savoir s’il va y avoir du vent, il faut mettre son doigt dans le cul du coq.",
    "J'te présente vos hommages au roi Arthur.",
    "Elle est où la poulette ?",
    "Mordu, mordu, mooooordu! Mordu mordu mordu mordu mordu mordu mordu mordu mordu mooooooooooordu !!!!",
    "À Kadoc ! À Kadoc !",
];
var Arthur = ["Sortez-vous les doigts du cul !!!",
    "J'bouff'rais un ch'val en salade !!!",
    "Franchement, j'ai connu des cafards moins opiniâtres...",
];

function phrase(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generation() {
    if (document.getElementById("Kadoc").checked) {
        return phrase(Kadoc)
    } else if (document.getElementById("Arthur").checked) {
        return phrase(Arthur)
    } else {
        return "Là, ça pue du cul, mais violent."
    }
};
