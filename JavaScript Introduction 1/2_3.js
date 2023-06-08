const printSegitiga = 10
if (Number.isInteger(printSegitiga) != true) {
    console.log("Data harus number")
} else {
    let a = ""
    for (let i = printSegitiga; i >= 1; i--) {
        for (let ii = 1; ii <= i; ii++) {
            a = a + ii
        }
        console.log(a)
        a = ""
    }
}