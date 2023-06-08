function searchName(kunci, jumlah_diambil, callback_hasil) {
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carocal', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope']
    let kata_kunci = kunci.toLowerCase()
    let hasil = []
    name.forEach((v) => {
        v = v.toLowerCase()
        let lengthkata = 0
        for (let i = 0; i < v.length; i++) {
            // start -> cek karater yang sama dengan karater awal kata kunci
            if (v[i] == kata_kunci[0]) {
                lengthkata++
                // start -> perulangan untuk cek karakter selanjutnya dari setalah karakter awal mengacu pada kata kunci
                for (let ii = 1; ii < kata_kunci.length; ii++) {
                    if (v[i + ii] == kata_kunci[ii]) {
                        lengthkata++
                    } else {
                        lengthkata = 0
                        break
                    }
                }
                // end
                if (lengthkata == kata_kunci.length) {
                    // start -> merubah huruf kapital diawal
                    temp_nama = ""
                    for (let iii = 0; iii < v.length; iii++) {
                        if (iii == 0) {
                            temp_nama = temp_nama + v[iii].toUpperCase()
                        } else {
                            temp_nama = temp_nama + v[iii]
                        }
                    }
                    // end
                    hasil.push(temp_nama)
                }
            }
            // end
        }
    });
    callback_hasil(jumlah_diambil, hasil)
}
function show_hasil(jumlah, hasil) {
    if (hasil.length < jumlah) {
        jumlah = hasil.length
    }
    for (let i = 0; i < jumlah; i++) {
        console.log(hasil[i])
    }
}
searchName('an', 3, show_hasil)


