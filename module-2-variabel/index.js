// ini inline-comment

/*

    kalo ini multiple-line-comment

*/

// VAR //

/*
var = bisa diakses di luar lingkup nya (scope nya)
*/

if (true){
    var nama = "Malya";
    nama = 'Winter'
} // statement if adalah scope nya si var

console.log("var: ", nama)

// LET //

if (true){
    let name = "Karina";
    name = 'Nenengisme'
    console.log("let: ", name) //tidak error, karena berada di dalam scope nya
} 

console.log("let: ", name) //error, karena 'let' tidak bisa di akses di luar scope nya

// * VAR DAN LET BISA DIUBAH VALUENYA

// CONST //

/*

    const = tidak bisa diakses di luar scopenya dan valuenya TIDAK BISA diubah

*/

if (true) {
    const apa = 100;
    console.log("const: ", apa)
}
