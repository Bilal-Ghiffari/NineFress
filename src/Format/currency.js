/* eslint no-extend-native: ["error", {"exceptions": ["Number"] }] */
// Ignore eslint supaya tidak error 

if (!Number.hasOwnProperty("currency")) {
    Number.prototype.currency =  function(decimal = 0) {
        const currency = new Intl.NumberFormat(navigator.language, {
            style: "currency",
            currency: "IDR"
        })
        return currency.format(this)
    }
}