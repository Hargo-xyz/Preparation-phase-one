/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
    let str = String(equation)
    let nol = '';
    
    if (str.length === 1 || parseInt(str.slice(1)) === 0) {
        return str;
    }
    let index = str[0]
    for (let i = 0; i < str.length; i++) {
        nol += '0'
    }
    return `${index} ${nol} + ${parseNumber(str.slice(1))}`
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3