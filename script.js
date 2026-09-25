/* =========================
   LOGIN
========================= */

const usernameBenar = "hayani";
const passwordBenar = "anin1030";

const formLogin =
    document.getElementById("formLogin");


if (formLogin) {

    formLogin.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const username =
                document.getElementById(
                    "username"
                ).value.trim();

            const password =
                document.getElementById(
                    "password"
                ).value;

            const errorLogin =
                document.getElementById(
                    "errorLogin"
                );


            if (
                username === usernameBenar &&
                password === passwordBenar
            ) {

                sessionStorage.setItem(
                    "login",
                    "true"
                );

                window.location.href =
                    "index.php";

            } else {

                if (errorLogin) {

                    errorLogin.style.display =
                        "block";

                }

            }

        }
    );

}


/* =========================
   DATA ABSENSI
========================= */

let dataAbsensi =
    JSON.parse(
        localStorage.getItem(
            "dataAbsensi"
        )
    ) || [];


/* =========================
   MODAL KONFIRMASI
========================= */

function tampilkanModal(
    judul,
    pesan,
    teksTombol,
    warna,
    icon,
    callback
) {

    // Hapus modal sebelumnya
    const modalLama =
        document.getElementById(
            "modalKonfirmasi"
        );


    if (modalLama) {
        modalLama.remove();
    }


    // Membuat modal
    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "modalKonfirmasi";


    modal.innerHTML = `

        <div class="modal-overlay">

            <div class="modal-konfirmasi">

                <div
                    class="modal-icon"
                    style="
                        background:${warna}20;
                        color:${warna};
                    "
                >
                    ${icon}
                </div>


                <h2>
                    ${judul}
                </h2>


                <p>
                    ${pesan}
                </p>


                <div class="modal-buttons">

                    <button
                        type="button"
                        class="modal-batal"
                        id="modalBatal"
                    >
                        Batal
                    </button>


                    <button
                        type="button"
                        class="modal-aksi"
                        id="modalAksi"
                        style="
                            background:${warna};
                        "
                    >
                        ${teksTombol}
                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    // Animasi muncul
    setTimeout(
        function() {

            modal.classList.add(
                "modal-muncul"
            );

        },
        10
    );


    /* =========================
       TOMBOL BATAL
    ========================= */

    const tombolBatal =
        document.getElementById(
            "modalBatal"
        );


    tombolBatal.addEventListener(
        "click",
        function() {

            tutupModal();

        }
    );


    /* =========================
       TOMBOL AKSI
    ========================= */

    const tombolAksi =
        document.getElementById(
            "modalAksi"
        );


    tombolAksi.addEventListener(
        "click",
        function() {

            tutupModal();


            if (callback) {

                callback();

            }

        }
    );


    /* =========================
       KLIK LUAR MODAL
    ========================= */

    const overlay =
        modal.querySelector(
            ".modal-overlay"
        );


    overlay.addEventListener(
        "click",
        function(event) {

            if (
                event.target === overlay
            ) {

                tutupModal();

            }

        }
    );


    /* =========================
       TOMBOL ESC
    ========================= */

    document.addEventListener(
        "keydown",
        fungsiEsc
    );


    function fungsiEsc(event) {

        if (
            event.key === "Escape"
        ) {

            tutupModal();

        }

    }


    /* =========================
       TUTUP MODAL
    ========================= */

    function tutupModal() {

        modal.classList.remove(
            "modal-muncul"
        );


        document.removeEventListener(
            "keydown",
            fungsiEsc
        );


        setTimeout(
            function() {

                if (modal) {

                    modal.remove();

                }

            },
            250
        );

    }

}


/* =========================
   STYLE MODAL
========================= */

const styleModal =
    document.createElement(
        "style"
    );


styleModal.innerHTML = `

    .modal-overlay {

        position: fixed;

        inset: 0;

        background:
            rgba(15, 23, 42, 0.55);

        backdrop-filter:
            blur(6px);

        display: flex;

        align-items: center;

        justify-content: center;

        padding: 20px;

        z-index: 99999;

        opacity: 0;

        transition:
            opacity 0.25s ease;

    }


    #modalKonfirmasi.modal-muncul
    .modal-overlay {

        opacity: 1;

    }


    .modal-konfirmasi {

        width: 420px;

        max-width: 100%;

        background: #ffffff;

        border-radius: 22px;

        padding: 32px;

        text-align: center;

        box-shadow:
            0 25px 60px
            rgba(0, 0, 0, 0.25);

        transform:
            translateY(20px)
            scale(0.95);

        transition:
            transform 0.25s ease;

    }


    #modalKonfirmasi.modal-muncul
    .modal-konfirmasi {

        transform:
            translateY(0)
            scale(1);

    }


    .modal-icon {

        width: 72px;

        height: 72px;

        margin:
            0 auto 20px;

        border-radius: 50%;

        display: flex;

        align-items: center;

        justify-content: center;

        font-size: 32px;

    }


    .modal-konfirmasi h2 {

        margin:
            0 0 10px;

        color: #172554;

        font-size: 24px;

        font-weight: 700;

    }


    .modal-konfirmasi p {

        margin:
            0 auto 28px;

        color: #64748b;

        font-size: 15px;

        line-height: 1.6;

    }


    .modal-buttons {

        display: flex;

        gap: 12px;

        justify-content: center;

    }


    .modal-buttons button {

        flex: 1;

        border: none;

        padding: 13px 18px;

        border-radius: 10px;

        font-size: 14px;

        font-weight: 700;

        cursor: pointer;

        transition:
            all 0.2s ease;

    }


    .modal-batal {

        background: #f1f5f9;

        color: #475569;

    }


    .modal-batal:hover {

        background: #e2e8f0;

        transform:
            translateY(-1px);

    }


    .modal-aksi {

        color: white;

        box-shadow:
            0 5px 15px
            rgba(0, 0, 0, 0.15);

    }


    .modal-aksi:hover {

        filter: brightness(0.92);

        transform:
            translateY(-1px);

    }


    @media (max-width: 500px) {

        .modal-konfirmasi {

            padding: 25px;

        }


        .modal-buttons {

            flex-direction: column;

        }

    }

`;

document.head.appendChild(
    styleModal
);


/* =========================
   TAMPILKAN DATA
========================= */

function tampilkanData() {

    const tabel =
        document.getElementById(
            "tabelAbsensi"
        );


    if (!tabel) {

        return;

    }


    tabel.innerHTML = "";


    if (
        dataAbsensi.length === 0
    ) {

        tabel.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="
                        text-align:center;
                        padding:25px;
                        color:#64748b;
                    "
                >

                    Belum ada data absensi

                </td>

            </tr>

        `;

        return;

    }


    dataAbsensi.forEach(
        function(siswa, index) {

            const statusClass =
                siswa.status.toLowerCase();


            tabel.innerHTML += `

                <tr>

                    <td>
                        ${index + 1}
                    </td>


                    <td>
                        ${siswa.nama}
                    </td>


                    <td>
                        ${siswa.kelas}
                    </td>


                    <td>
                        ${siswa.tanggal}
                    </td>


                    <td>
                        ${siswa.jam}
                    </td>


                    <td>

                        <span
                            class="status ${statusClass}"
                        >
                            ${siswa.status}
                        </span>

                    </td>


                    <td>

                        <button
                            class="hapus"
                            onclick="hapusData(${index})"
                        >
                            Hapus
                        </button>

                    </td>

                </tr>

            `;

        }
    );

}


/* =========================
   FORM ABSENSI
========================= */

const formAbsensi =
    document.getElementById(
        "formAbsensi"
    );


if (formAbsensi) {

    formAbsensi.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nama =
                document.getElementById(
                    "nama"
                ).value.trim();


            const kelas =
                document.getElementById(
                    "kelas"
                ).value;


            const status =
                document.getElementById(
                    "status"
                ).value;


            /* =========================
               VALIDASI
            ========================= */

            if (
                nama === "" ||
                kelas === ""
            ) {

                tampilkanModal(

                    "Data Belum Lengkap",

                    "Silakan lengkapi nama dan kelas siswa terlebih dahulu.",

                    "Mengerti",

                    "#f59e0b",

                    "⚠️",

                    function() {}

                );

                return;

            }


            /* =========================
               WAKTU
            ========================= */

            const sekarang =
                new Date();


            /* =========================
               DATA SISWA
            ========================= */

            const siswa = {

                nama: nama,

                kelas: kelas,

                tanggal:
                    sekarang.toLocaleDateString(
                        "id-ID"
                    ),

                jam:
                    sekarang.toLocaleTimeString(
                        "id-ID"
                    ),

                status: status

            };


            /* =========================
               SIMPAN DATA
            ========================= */

            dataAbsensi.push(
                siswa
            );


            localStorage.setItem(
                "dataAbsensi",
                JSON.stringify(
                    dataAbsensi
                )
            );


            /* =========================
               RESET FORM
            ========================= */

            formAbsensi.reset();


            tampilkanData();


            /* =========================
               NOTIFIKASI BERHASIL
            ========================= */

            tampilkanModal(

                "Absensi Berhasil Disimpan",

                `Data absensi <strong>${nama}</strong> telah berhasil disimpan ke dalam sistem.`,

                "Selesai",

                "#16a34a",

                "✓",

                function() {}

            );

        }
    );

}


/* =========================
   HAPUS SATU DATA
========================= */

function hapusData(index) {

    const siswa =
        dataAbsensi[index];


    const nama =
        siswa
            ? siswa.nama
            : "data ini";


    tampilkanModal(

        "Hapus Data Absensi?",

        `Apakah kamu yakin ingin menghapus data <strong>${nama}</strong>? Data yang sudah dihapus tidak dapat dikembalikan.`,

        "Ya, Hapus",

        "#dc2626",

        "🗑️",

        function() {

            dataAbsensi.splice(
                index,
                1
            );


            localStorage.setItem(
                "dataAbsensi",
                JSON.stringify(
                    dataAbsensi
                )
            );


            tampilkanData();

        }

    );

}


/* =========================
   HAPUS SEMUA DATA
========================= */

const hapusSemua =
    document.getElementById(
        "hapusSemua"
    );


if (hapusSemua) {

    hapusSemua.addEventListener(
        "click",
        function() {

            if (
                dataAbsensi.length === 0
            ) {

                tampilkanModal(

                    "Data Masih Kosong",

                    "Belum ada data absensi yang bisa dibersihkan.",

                    "Mengerti",

                    "#2563eb",

                    "📋",

                    function() {}

                );

                return;

            }


            tampilkanModal(

                "Bersihkan Semua Data?",

                `Kamu akan menghapus <strong>seluruh data absensi</strong> yang tersimpan.<br><br>Data yang sudah dihapus <strong>tidak dapat dikembalikan.</strong>`,

                "Ya, Bersihkan",

                "#dc2626",

                "🗑️",

                function() {

                    dataAbsensi = [];


                    localStorage.removeItem(
                        "dataAbsensi"
                    );


                    tampilkanData();


                    tampilkanModal(

                        "Data Berhasil Dibersihkan",

                        "Seluruh data absensi telah berhasil dihapus dari sistem.",

                        "Selesai",

                        "#16a34a",

                        "✓",

                        function() {}

                    );

                }

            );

        }
    );

}


/* =========================
   LOGOUT
========================= */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function() {

            tampilkanModal(

                "Keluar dari Akun?",

                "Sesi kamu akan diakhiri. Kamu perlu login kembali untuk mengakses sistem absensi.",

                "Ya, Keluar",

                "#dc2626",

                "🚪",

                function() {

                    sessionStorage.removeItem(
                        "login"
                    );


                    window.location.href =
                        "login.php";

                }

            );

        }
    );

}


/* =========================
   TAMPILKAN DATA
========================= */

tampilkanData();
