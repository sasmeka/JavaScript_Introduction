const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }

    }, 4000)
}

function showMonth(err, arrMonth) {
    if (err == null) {
        arrMonth.map(x => console.log(x))
    } else {
        console.log(err + '')
    }
}

getMonth(showMonth)