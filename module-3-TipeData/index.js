/*

    TIPE DATA PRIMITIF
    - string
    - number
    - boolean
    - undefined
    - null
    - symbol
    - bigint (big integer)

*/


// STRING
const nama = 'Malya'
console.log("[", nama, "] bertipe data: ", typeof nama)

// NUMBER
const angka = 7
console.log("[", angka, "] bertipe data: ", typeof angka)

// BOOLEAN
const ans = true // false
console.log("[", ans, "] bertipe data: ", typeof ans)

// UNDEFINED
var yak; // output: "undefined" karena belum memiliki value
console.log("[", yak, "] bertipe data: ", typeof yak)

// NULL
const yaKosong = null // tidak mempunyai nilai/value. walaupun tidak memiliki value, variabel tersebut akan me-return 'object' 

// SYMBOL
// uh..... idk :(

// BIG INT (tipe data untuk angka yang sangat besar

const bigInt = 12345678882345623456899
console.log("[", bigInt, "] bertipe data: ", typeof bigInt)

/*
    TIPE DATA REFERENCE
    - object (terdiri dari key dan value)
    - array
    - function
*/

// OBJECT
const aku = { // object harus memakai bracket
    nama: "Malya", // key: "nama", value: "Malya"
    umur: 16, // key: "umur", value: "16"
    kota: "Bandung" // key: "kota", value: "Bandung"
}

console.log("[ ", aku," ]", " bertipe data: ", typeof aku) 

// ARRAY
const pacar = ["karina", "winter", "jijel", "ningning", "camila cabello"]

console.log("[ ", pacar," ]", " bertipe data: ", typeof pacar, "atau array") 

// FUNCTION
function sayWelcome() {
    return 'WELCOME CUYY'
}

console.log("[ ", sayWelcome," ]", " bertipe data: ", typeof sayWelcome) // sayWelcome() itu akan meng-outputkan isi dari function nya


// tipe data primitif //

var a = 10
// var a = 20 -> jika simpen di atas 'b', maka akan berubah menjadi 20
var b = a // 'b' ini akan menyimpan salinan dari 'a' yang berada di posisi atasnya, jadi valuenya masih bernilai 10

a = 20

console.log(b)





console.log(`<< ${nama} menyukai angka ${angka} dan itu sangat ${ans}! >>`)
