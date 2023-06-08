

function reversWords(kalimat_kunci) {
    let kalimat = kalimat_kunci + ' '
    let array = []
    let temp_kata = '';
    for (i = 0; i <= kalimat.length - 1; i++) {
        if (kalimat[i] != ' ') {
            temp_kata = temp_kata + kalimat[i]
        } else {
            if (temp_kata != '') {
                array.push(temp_kata)
            }
            temp_kata = ''
        }
    }
    let result_kalimat = ''
    for (ii = array.length - 1; ii >= 0; ii--) {
        result_kalimat = result_kalimat + array[ii]
        if (ii != 0) {
            result_kalimat = result_kalimat + ' '
        }
    }
    console.log(result_kalimat)
}
reversWords(" saya belajar javascript")