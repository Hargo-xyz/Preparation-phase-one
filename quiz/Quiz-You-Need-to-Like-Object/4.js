/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
    //code here
    let harga = {
        pesawat: 275000,
        kereta: 250000,
        bis: 225000
    }
    let rute = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar']
    let result = []

    let diskon = {
        'OVO': 0.15,
        'Dana': 0.10,
        'Gopay': 0.05,
        'Cash': 0
    };

    for (let i = 0; i < arr.length; i++) {
        let data = arr[i];
        let split = []
        let temp = '';


        for (let j = 0; j < data.length; j++) {
            if (data[j] === '-' || data[j] == ' ') {
                split.push(temp);
                temp = '';
            } else {
                temp += data[j];
            }
        }
        split.push(temp);

        let nama = split[0];
        let depart = split[1];
        let destinasi = split[2];
        let transportasi = split[3];

        let indexDri = -1
        let indexTujuan = -1

        for (let k = 0; k < rute.length; k++) {
            if (rute[k] == depart) {
                indexDri = k
            }
            if (rute[k] == destinasi) {
                indexTujuan = k
            }
        }

        let jarak = indexDri - indexTujuan
        if (jarak < 0) {
            jarak *= -1
        }
        
        let hargaAwal = harga[transportasi.toLowerCase()]
        let total = jarak * hargaAwal;
        let setelahDiskon = total - (total * diskon[emoney])

        let obj = {
            name: nama,
            departurCity: depart,
            destinationCity: destinasi,
            trasnport: transportasi,
            totalCost: setelahDiskon
        }
        result.push(obj)
    }

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].totalCost < result[j].totalCost) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];