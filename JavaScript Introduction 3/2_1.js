const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']

            let cek = dataDay.find((item) => {
                return item === day
            })

            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }

        }, 3000)
    })
}

let hari = 'minggu'

function tugas_1_a(hari) { // membuat fungsi pada umumnya dikhususkan untuk promise, untuk pengecekan menggunakan then, catch, dan finally (opsional)
    let judul = '------- Tugas 1-a -------'
    cekHariKerja(hari).then((res) => { // dari fungsi cekHarikerja, jika fungsi tersebut mengmbalikan value resolve, maka tampilkan harinya.
        console.log(judul + '\n' + res)
    }).catch((err) => { // jika fungsi cekHariKerja mengembalikan value reject maka tampilkan value err
        console.log(judul + '\n' + err)
    })
}
tugas_1_a(hari)

async function tugas_1_b(hari) { // membuat fungsi dikhususkan untuk async / await, diawal fungsi harus disipkan asyn untuk inisiasi bahawa fungsi tersebut adalah async/await
    let judul2 = '------- Tugas 1-b -------'
    try { // untuk fungsi async / await menggunakan try, catch, dan finally (opsional)
        let res = await cekHariKerja(hari) // membuat variable baru dikhusukan untuk funsi promise dengan memanfaatkan async/await yang didalamnya terdapat funsi promise yang ingin diproses yang diawali atau disipkan await sebelum fungis.
        console.log(judul2 + '\n' + res)
    } catch (err) {
        console.log(judul2 + '\n' + err)
    }
}
tugas_1_b(hari)
//khusus untuk fungsi async/await jika terdapat error dibeberapa fungsi akan dialihkan kedalam catch 