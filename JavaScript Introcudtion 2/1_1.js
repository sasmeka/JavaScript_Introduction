
//-----------------1 Array Push----------------- #
// method array push untuk menambahkan satu atau lebih data kedalam sebuah array
let data_array = [3, 4]
data_array.push(5, 6)
console.log(data_array)

//-----------------2 Array Unshift-----------------
// method array unshift untuk menambahkan satu atau lebih data kedalam sebuah array hanya saja ditempatkan pada urutan index awal
data_array = [3, 4]
data_array.unshift(1, 2)
console.log(data_array)

//-----------------3 Array Includes-----------------
// method array includes untuk cek element tertentu dalam sebuah array yang memiliki output boolean true / false
data_array = [3, 4]
console.log(data_array.includes(5))

//-----------------4 String Trim-----------------
// method string trim untuk menghapus spasi dari awal dan akhir kalimat
let data_string = " Fazz track "
console.log(data_string.trim())

//-----------------5 Math Absolute (ABS)-----------------
// method Math Abs(absolute) untuk mengubah angka didalamnya menjadi nilai positif
console.log(Math.abs(-3))

//-----------------6 Math max-----------------
// method Math max untuk mencari nilai terbesar dalam sebuah array
console.log(Math.max(1, 3, 2))

//-----------------7 Math min-----------------
// method Math max untuk mencari nilai terkecil dalam sebuah array
console.log(Math.min(1, 3, 2))

//-----------------8 Math Random-----------------
// method Math random untuk menemukan nilai secara acak dengan range diatas 0 dan dibawah 1
console.log(Math.random())

//-----------------9 Array Flat-----------------
// method Array flat untuk menggbungkan value semua elemen sub-array menjadi satu secara rekursif hingga kedalaman yang di tentukan 
const arr1 = [0, [[[[[1, 2]]]]], [3, 4]];
console.log(arr1.flat(5));

//-----------------10 Array Find-----------------
// method Array
// method Array Find untuk mencari sebuah element tertentu dalam sebuah array atau object
data_array = [3, 4]
const a = data_array.find(v => v == 1);
console.log(a);