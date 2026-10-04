//
// VARIABEL SUDOKU
//

//variabel sudoku 4x4
let sudoku4 = [];
let jawaban4 = [];
//variabel sudoku 6x6
let sudoku6 = [];
let jawaban6 = [];
//variabel sudoku 9x9
let sudoku9 = [];
let jawaban9 = [];


//
// VARIABEL KOTAK YANG DIPILIH
//

let kotakTerpilih = null;
let barisTerpilih = null;
let kolomTerpilih = null;
let jumlahSalah = 0;
const MAKSIMAL_SALAH = 5;
let modeCatatan = false;
let gameOver = false;


//
// GENERATOR SUDOKU 4 X 4
//

function buatSudoku4() {

    let dasar = [
        [1, 2, 3, 4],
        [3, 4, 1, 2],
        [2, 1, 4, 3],
        [4, 3, 2, 1]
    ];

    jawaban4 = dasar.map(baris => [...baris]);

    // Acak angka 1-4
    let angka = [1, 2, 3, 4];

    angka.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {

            jawaban4[i][j] =
                angka[jawaban4[i][j] - 1];

        }
    }

    // Acak baris dalam kelompok
    if (Math.random() > 0.5) {
        [jawaban4[0], jawaban4[1]] =
        [jawaban4[1], jawaban4[0]];
    }

    if (Math.random() > 0.5) {
        [jawaban4[2], jawaban4[3]] =
        [jawaban4[3], jawaban4[2]];
    }

    // Jadikan soal
    sudoku4 = jawaban4.map(baris => [...baris]);

    // Kosongkan 8 kotak
    let kosong = 8;

    while (kosong > 0) {

        let r = Math.floor(Math.random() * 4);
        let c = Math.floor(Math.random() * 4);

        if (sudoku4[r][c] !== 0) {

            sudoku4[r][c] = 0;
            kosong--;

        }
    }
}


//
// GENERATOR SUDOKU 6 X 6
//

function buatSudoku6() {

    let dasar = [
        [1, 2, 3, 4, 5, 6],
        [4, 5, 6, 1, 2, 3],
        [2, 3, 4, 5, 6, 1],
        [5, 6, 1, 2, 3, 4],
        [3, 4, 5, 6, 1, 2],
        [6, 1, 2, 3, 4, 5]
    ];

    jawaban6 = dasar.map(baris => [...baris]);

    // Acak angka 1-6
    let angka = [1, 2, 3, 4, 5, 6];

    angka.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {

            jawaban6[i][j] =
                angka[jawaban6[i][j] - 1];

        }
    }

    // Jadikan soal
    sudoku6 = jawaban6.map(baris => [...baris]);

    // Kosongkan 18 kotak
    let kosong = 18;

    while (kosong > 0) {

        let r = Math.floor(Math.random() * 6);
        let c = Math.floor(Math.random() * 6);

        if (sudoku6[r][c] !== 0) {

            sudoku6[r][c] = 0;
            kosong--;

        }
    }
}


//
// GENERATOR SUDOKU 9 X 9
//

function buatSudoku9() {

    // Pola dasar Sudoku 9x9
    let dasar = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],

        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],

        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ];

    jawaban9 = dasar.map(baris => [...baris]);


    //----
    // Acak angka 1-9
    //----

    let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    angka.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 9; i++) {

        for (let j = 0; j < 9; j++) {

            jawaban9[i][j] =
                angka[jawaban9[i][j] - 1];

        }
    }


    //----
    // Acak baris dalam kelompok 3
    //----

    for (let kelompok = 0; kelompok < 3; kelompok++) {

        let awal = kelompok * 3;

        if (Math.random() > 0.5) {

            [jawaban9[awal], jawaban9[awal + 1]] =
            [jawaban9[awal + 1], jawaban9[awal]];

        }

        if (Math.random() > 0.5) {

            [jawaban9[awal + 1], jawaban9[awal + 2]] =
            [jawaban9[awal + 2], jawaban9[awal + 1]];

        }
    }


    //----
    // Jadikan soal
    //----

    sudoku9 = jawaban9.map(baris => [...baris]);


    //----
    // Kosongkan 45 kotak
    //----

    let kosong = 45;

    while (kosong > 0) {

        let r = Math.floor(Math.random() * 9);
        let c = Math.floor(Math.random() * 9);

        if (sudoku9[r][c] !== 0) {

            sudoku9[r][c] = 0;
            kosong--;

        }
    }
}


//
// PILIHAN UKURAN SUDOKU
//

const tombol = document.querySelectorAll(".pilihan button");

if (tombol.length > 0) {

    tombol.forEach(function(button) {

        button.addEventListener("click", function() {

            const ukuran =
                button.querySelector("p").innerText;

            window.location.href =
                "game.html?ukuran=" + ukuran;

        });

    });
}


//
// MENGAMBIL UKURAN DARI URL
//

const url =
    new URLSearchParams(window.location.search);

const ukuran = url.get("ukuran");


//
// MENAMPILKAN UKURAN DI GAME
//

if (ukuran) {

    document.getElementById("ukuran").innerText =
        "Sudoku " + ukuran;

}


//
// CATATAN / PENCIL MARKS
//
function buatAreaCatatan(kotak) {
    let area = kotak.querySelector(".catatanKotak");

    if (!area) {
        area = document.createElement("div");
        area.classList.add("catatanKotak");

        for (let i = 1; i <= 9; i++) {
            const span = document.createElement("span");
            span.dataset.angka = i;
            area.appendChild(span);
        }

        kotak.appendChild(area);
    }

    return area;
}

function toggleCatatan(kotak, nilai) {
    const area = buatAreaCatatan(kotak);
    const span = area.querySelector(`[data-angka="${nilai}"]`);

    if (!span) return;

    if (span.innerText === String(nilai)) {
        span.innerText = "";
    } else {
        span.innerText = nilai;
    }
}

function hapusCatatan(kotak) {
    const area = kotak.querySelector(".catatanKotak");
    if (area) {
        area.querySelectorAll("span").forEach(span => span.innerText = "");
    }
}

function aturModeCatatan() {
    const tombolCatatan = document.getElementById("tombolCatatan");
    if (!tombolCatatan) return;

    tombolCatatan.classList.toggle("aktif", modeCatatan);
    tombolCatatan.innerText = modeCatatan
        ? "✏️ Catatan: ON"
        : "✏️ Catatan: OFF";
}

const tombolCatatan = document.getElementById("tombolCatatan");

if (tombolCatatan) {
    tombolCatatan.addEventListener("click", function() {
        modeCatatan = !modeCatatan;
        aturModeCatatan();
    });
}

//
// MEMBUAT GAME
//

if (ukuran) {

    const angkaUkuran = parseInt(ukuran);


    //----
    // Buat soal sesuai ukuran
    //----

    if (angkaUkuran === 4) {

        buatSudoku4();

    }
    else if (angkaUkuran === 6) {

        buatSudoku6();

    }
    else if (angkaUkuran === 9) {

        buatSudoku9();

    }

    //----
    // Buat papan
    //----

    buatPapan();

    //----
    // Buat tombol angka
    //----

    const angka =
        document.getElementById("angka");

    angka.innerHTML = "";


    for (let i = 1; i <= angkaUkuran; i++) {

        const tombolAngka =
            document.createElement("button");

        tombolAngka.innerText = i;

        //
        // Ketika tombol angka diklik
        //

        tombolAngka.addEventListener(
            "click",
            function() {

                // Permainan berhenti saat popup game over tampil
                if (gameOver) {
                    return;
                }

                // Belum memilih kotak
                if (kotakTerpilih === null) {
                    return;
                }

                // Mode catatan: angka hanya disimpan sebagai kandidat,
                // tidak langsung dianggap sebagai jawaban dan tidak menambah salah.
                if (modeCatatan) {
                    toggleCatatan(kotakTerpilih, i);
                    return;
                }

                //
                // Ambil jawaban yang benar
                //

                let jawabanBenar = null;


                if (angkaUkuran === 4) {

                    jawabanBenar =
                        jawaban4[
                            barisTerpilih
                        ][
                            kolomTerpilih
                        ];

                }
                else if (angkaUkuran === 6) {

                    jawabanBenar =
                        jawaban6[
                            barisTerpilih
                        ][
                            kolomTerpilih
                        ];

                }
                else if (angkaUkuran === 9) {

                    jawabanBenar =
                        jawaban9[
                            barisTerpilih
                        ][
                            kolomTerpilih
                        ];

                }

                //
                // JAWABAN BENAR
                //

                if (i === jawabanBenar) {

                    hapusCatatan(kotakTerpilih);
                    kotakTerpilih.innerText = i;

                    // Hijau
                    kotakTerpilih.style.backgroundColor =
                        "#A8D5B5";

                    // Tidak bisa dipilih lagi
                    kotakTerpilih.style.cursor =
                        "default";

                    kotakTerpilih.classList.add(
                        "selesai"
                    );


                    // Reset pilihan
                    kotakTerpilih = null;
                    barisTerpilih = null;
                    kolomTerpilih = null;


                    // Cek selesai
                    cekSelesai();

                }

                //
                // JAWABAN SALAH
                //

                else {

                    jumlahSalah++;

                    const kotakSalah =
                        kotakTerpilih;


                    // Tampilkan angka salah sementara tanpa menghapus catatan
                    const areaCatatanSalah = kotakSalah.querySelector(".catatanKotak");
                    const teksSalah = document.createTextNode(i);
                    kotakSalah.insertBefore(teksSalah, areaCatatanSalah);


                    // Merah
                    kotakSalah.style.backgroundColor =
                        "lightcoral";


                    // Tampilkan jumlah salah
                    const salah =
                        document.getElementById("salah");

                    if (salah) {

                        salah.innerText =
                            "Salah: " + jumlahSalah + "/" + MAKSIMAL_SALAH;

                    }

                    // Jika sudah 5 kesalahan, tampilkan popup game over.
                    if (jumlahSalah >= MAKSIMAL_SALAH) {
                        const pesanGameOver =
                            document.getElementById("pesanGameOver");

                        if (pesanGameOver) {
                            pesanGameOver.style.display = "flex";
                        }

                        gameOver = true;
                        kotakTerpilih = null;
                        barisTerpilih = null;
                        kolomTerpilih = null;

                        // Matikan mode catatan agar permainan berhenti pada popup.
                        modeCatatan = false;
                        aturModeCatatan();
                    }

                    // Hapus setelah 500 ms
                    setTimeout(function() {

                        if (teksSalah.parentNode === kotakSalah) {
                            teksSalah.remove();
                        }

                        kotakSalah.style.backgroundColor =
                            "";

                    }, 500);

                }

            }
        );

        // Masukkan tombol ke halaman
        angka.appendChild(tombolAngka);

    }

}

//
// FUNGSI MEMBUAT PAPAN
//

function buatPapan() {

    const angkaUkuran =
        parseInt(ukuran);

    const papan =
        document.getElementById("papan");

    // Bersihkan papan lama
    papan.innerHTML = "";

    // Reset pilihan
    kotakTerpilih = null;
    barisTerpilih = null;
    kolomTerpilih = null;

    //----
    // Ukuran grid
    //----

    papan.style.gridTemplateColumns =
        `repeat(${angkaUkuran}, 1fr)`;

    papan.style.gridTemplateRows =
        `repeat(${angkaUkuran}, 1fr)`;
    
    //
// BATAS KELOMPOK SUDOKU
//
// Setiap ukuran memiliki bentuk blok yang berbeda:
// 4x4 = blok 2x2
// 6x6 = blok 2x3 (2 baris x 3 kolom)
// 9x9 = blok 3x3
let batasVertikal = [];
let batasHorizontal = [];

if (angkaUkuran === 4) {
    batasVertikal = [2];
    batasHorizontal = [2];
}
else if (angkaUkuran === 6) {
    // Blok 6x6 terdiri dari 2 baris x 3 kolom.
    batasVertikal = [3];
    batasHorizontal = [2, 4];
}
else if (angkaUkuran === 9) {
    batasVertikal = [3, 6];
    batasHorizontal = [3, 6];
}

    //----
    // Membuat kotak
    //----

    for (
        let baris = 0;
        baris < angkaUkuran;
        baris++
    ) {

        for (
            let kolom = 0;
            kolom < angkaUkuran;
            kolom++
        ) {

            const kotak =
                document.createElement("div");

            kotak.classList.add("kotak");
            buatAreaCatatan(kotak);

//
// MEMBUAT GARIS PEMBATAS KELOMPOK
//

// Garis vertikal
if (batasVertikal.includes(kolom + 1)) {
    kotak.style.borderRight = "3px solid #6F9678";
}

// Garis horizontal
if (batasHorizontal.includes(baris + 1)) {
    kotak.style.borderBottom = "3px solid #6F9678";
}

            // 
            // Ambil angka bawaan
            // 

            let nilai = 0;


            if (angkaUkuran === 4) {

                nilai =
                    sudoku4[baris][kolom];

            }
            else if (angkaUkuran === 6) {

                nilai =
                    sudoku6[baris][kolom];

            }
            else if (angkaUkuran === 9) {

                nilai =
                    sudoku9[baris][kolom];

            }

            //
            // Tampilkan angka bawaan
            //

            if (nilai !== 0) {

                const areaCatatan = kotak.querySelector(".catatanKotak");
                kotak.insertBefore(document.createTextNode(nilai), areaCatatan);

                kotak.classList.add("bawaan");

            }


            //
            // Ketika kotak diklik
            //

            kotak.addEventListener(
                "click",
                function() {


                    // Permainan berhenti saat popup game over tampil
                    if (gameOver) {
                        return;
                    }

                    // Angka bawaan tidak boleh dipilih
                    if (
                        kotak.classList.contains("bawaan")
                    ) {

                        return;

                    }


                    // Kotak yang sudah benar
                    // tidak boleh dipilih
                    if (
                        kotak.classList.contains("selesai")
                    ) {

                        return;

                    }


                    // Hapus pilihan sebelumnya
                    if (kotakTerpilih !== null) {

                        kotakTerpilih.style
                            .backgroundColor = "";

                    }


                    // Simpan kotak yang dipilih
                    kotakTerpilih = kotak;

                    barisTerpilih = baris;

                    kolomTerpilih = kolom;


                    // Warna pilihan
                    kotak.style.backgroundColor =
                        "#F6C5D5";

                }
            );


            // Masukkan kotak ke papan
            papan.appendChild(kotak);

        }

    }

}

//
// CEK SUDOKU SELESAI
//

function cekSelesai() {

    const semuaKotak =
        document.querySelectorAll(".kotak");

    let selesai = true;


    semuaKotak.forEach(function(kotak) {

        if (
            !kotak.classList.contains("selesai") &&
            !kotak.classList.contains("bawaan")
        ) {

            selesai = false;

        }

    });


    //----
    // Kalau sudah selesai
    //----

    if (selesai) {

        const pesan =
            document.getElementById("pesanSelesai");

        if (pesan) {

            pesan.style.display = "flex";

        }

    }

}


//
// TOMBOL KELUAR
//

const tombolKeluar =
    document.getElementById("keluar");

if (tombolKeluar) {

    tombolKeluar.addEventListener(
        "click",
        function() {

            const pilihan =
                confirm(
                    "Apakah kamu ingin keluar dari permainan?"
                );

            if (pilihan) {

                window.location.href =
                    "index.html";

            }

        }
    );

}


//
// TOMBOL GAME OVER - RESTART PUZZLE
//
const tombolRestartSudoku =
    document.getElementById("restartSudoku");

if (tombolRestartSudoku) {

    tombolRestartSudoku.addEventListener("click", function() {

        // Kembali ke puzzle yang SAMA, bukan membuat puzzle baru.
        // sudoku4/sudoku6/sudoku9 masih menyimpan susunan puzzle
        // yang sedang dimainkan.
        gameOver = false;
        jumlahSalah = 0;
        kotakTerpilih = null;
        barisTerpilih = null;
        kolomTerpilih = null;
        modeCatatan = false;

        const salah = document.getElementById("salah");
        if (salah) {
            salah.innerText = "Salah: 0/" + MAKSIMAL_SALAH;
        }

        // Buat ulang tampilan dari puzzle awal yang sama.
        // Ini menghapus semua jawaban pemain dan semua catatan.
        buatPapan();
        // Tombol angka sudah dibuat saat game dimulai dan tetap digunakan.
        // Tidak perlu memanggil fungsi lain agar event tombol tetap aktif.
        aturModeCatatan();

        const pesanGameOver =
            document.getElementById("pesanGameOver");

        if (pesanGameOver) {
            pesanGameOver.style.display = "none";
        }
    });
}

//
// TOMBOL LANJUT
//

const tombolLanjut =
    document.getElementById("lanjut");

if (tombolLanjut) {

    tombolLanjut.addEventListener(
        "click",
        function() {

            //
            // Buat soal baru dengan ukuran sama
            //

            if (parseInt(ukuran) === 4) {

                buatSudoku4();

            }
            else if (parseInt(ukuran) === 6) {

                buatSudoku6();

            }
            else if (parseInt(ukuran) === 9) {

                buatSudoku9();

            }

            //
            // Reset pilihan
            //

            kotakTerpilih = null;

            barisTerpilih = null;

            kolomTerpilih = null;

            //
            // Reset jumlah salah
            //

            jumlahSalah = 0;

            const salah =
                document.getElementById("salah");

            if (salah) {

                salah.innerText =
                    "Salah: 0/" + MAKSIMAL_SALAH;

            }

            //
            // Buat papan baru
            //

            buatPapan();

            //
            // Tutup popup
            //

            const pesan =
                document.getElementById(
                    "pesanSelesai"
                );

            if (pesan) {

                pesan.style.display = "none";

            }

        }
    );

}
//
// TOMBOL KEMBALI KE MENU
//

const tombolKeMenu =
    document.getElementById("keMenu");

if (tombolKeMenu) {

    tombolKeMenu.addEventListener(
        "click",
        function() {

            window.location.href =
                "index.html";

        }
    );

}