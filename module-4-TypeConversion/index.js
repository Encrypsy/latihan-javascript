// type conversion adalah proses mnegkonversi dari tipe data satu menjadi tipe data yang lain //

/*

    terbagi menjadi 2:
    - implicit conversion : konversi yang dilakukan secara otomatis oleh javascript itu sendiri dengan menyesuaikan tipe data dalam operasi tertentu

    - explicit conversion : konversi yang dilakukan oleh coder secara terang terangan dengan menggunakan metode atau fungsi tertentu

*/

// IMPLICIT CONVERSION
var tambah = "2" + 5 //jika di tambah tipe data number berubah menjadi tipe data string
console.log(tambah, "->", typeof tambah)

var kurang = 2 - "10" //jika dikurang yang bertipe data string berubah menjadi number
console.log(kurang, "->", typeof kurang)

// EXPLICIT CONVERSION
// (number > string)
var num_10 = 10
var string_10 = String(num_10) //cara pertama
var string_10 = num_10.toString() //cara kedua
console.log(string_10, "->", typeof string_10)

// (string > number)
var string_5 = "5"
var num_5 = parseInt(string_5)
console.log(num_5, "->", typeof num_5)

// bagaimana jika desimal?
var string_desimal = "3.14"
var num_desimal = parseFloat(string_desimal) // kalo angkanya ada komanya pake "parseFloat"
console.log(num_desimal, "->", typeof num_desimal)





