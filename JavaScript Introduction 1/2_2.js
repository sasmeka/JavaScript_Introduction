const mtk = null, bi = null, bing = null, ipa = null
let rata = 0
if (mtk != null && bi != null && bing != null && ipa != null) {
    if (Number.isInteger(mtk) == true && Number.isInteger(bi) == true && Number.isInteger(bing) == true && Number.isInteger(ipa) == true) {
        rata = (mtk + bi + bing + ipa) / 4
        console.log('Rata-Rata = ' + rata)
        if (rata >= 90 && rata <= 100) {
            console.log("Grade = A")
        } else if (rata >= 80 && rata < 90) {
            console.log("Grade = B")
        } else if (rata >= 70 && rata < 80) {
            console.log("Grade = C")
        } else if (rata >= 60 && rata < 70) {
            console.log("Grade = D")
        } else if (rata >= 0 && rata < 60) {
            console.log("Grade = E")
        }
        else {
            console.log("Tidak ada grade!")
        }
    } else {
        console.log("Semua variable harus berisi angka!")
    }
} else {
    console.log("Semua variable harus terisi!")
}