function cekPalindrom(kata_kunci) {
    let kata = kata_kunci
    kata = kata.toLowerCase()
    let kata_reverse = ''

    for (let i = kata.length - 1; i >= 0; i--) {
        kata_reverse = kata_reverse + kata[i]
    }

    if (kata == kata_reverse) {
        console.log("Palindrom")
    } else {
        console.log("Bukan Palindrom")
    }
}
cekPalindrom('kaTakk')