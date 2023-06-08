function SeleksiNilai(nAwal, nAkhr, dArray) {
    if (nAwal > nAkhr) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
        return
    }
    if (dArray.length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
        return
    }
    let new_array = []
    dArray.forEach(v => {
        if (v >= nAwal && v <= nAkhr) {
            new_array.push(v)
        }
    });
    if (new_array.length > 0) {
        console.log(new_array.sort((a, b) => {
            return a - b
        }))
    } else {
        console.log('Nilai tidak ditemukan')
        return
    }
}
SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(4, 17, [2, 25, 4])
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])