function FazzFood(harga, voucher, jarak, pajak) {
    let potongan = voucher.toUpperCase() == 'FAZZFOOD50' ? voucher_diskon(harga, 50000, 50, 50000) : voucher.toUpperCase() == 'DITRAKTIR60' ? voucher_diskon(harga, 25000, 60, 30000) : 0
    let tarif = hitung_jarak(jarak)
    let pajak_value = pajak == true ? harga * 5 / 100 : 0
    const subtotal = harga - potongan + tarif + pajak_value

    console.log('Harga : ' + harga);
    console.log('Potongan : ' + potongan);
    console.log('Biaya Antar : ' + tarif);
    console.log('Pajak : ' + pajak_value);
    console.log('Sub Total : ' + subtotal);
}

function voucher_diskon(harga, min_harga, diskon, max_potongan) {
    if (harga > min_harga) {
        if ((harga * diskon / 100) > max_potongan) {
            return max_potongan
        } else {
            return harga * diskon / 100
        }
    } else {
        return 0
    }
}

function hitung_jarak(jarak) {
    let tarif = 0
    if (jarak > 2) {
        let jarak_lebih = jarak - 2
        tarif = 5000 + (jarak_lebih * 3000)
    } else {
        tarif = 5000
    }
    return tarif
}

FazzFood(75000, 'FAZZFOOD50', 5, true)