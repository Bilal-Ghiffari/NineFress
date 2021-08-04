if (!Number.hasOwnProperty("numbring"))
Number.prototype.numbering = function (decimals = 0){
    const numbering = new Intl.NumberFormat(navigator.language);

    return numbering.format(this)
}