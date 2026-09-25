<!DOCTYPE html>
<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Absensi Sekolah</title>

    <!-- LINK KE CSS -->
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div class="container">

        <div class="header">

            <div>

                <h1>
                    Absensi Sekolah
                </h1>

                <p class="subtitle">
                    Sistem Informasi Absensi Siswa
                </p>

            </div>

            <button
                type="button"
                id="logoutButton"
                class="logout"
            >
                Logout
            </button>

        </div>


        <div class="form-box">

            <h2>
                Form Absensi
            </h2>

            <form id="formAbsensi">

                <label for="nama">
                    Nama Siswa
                </label>

                <input
                    type="text"
                    id="nama"
                    placeholder="Masukkan nama siswa"
                    required
                >


                <label for="kelas">
                    Kelas
                </label>

                <select id="kelas" required>

                    <option value="">
                        -- Pilih Kelas --
                    </option>

                    <option value="X TKJ 1">X TKJ 1</option>
                    <option value="X TKJ 2">X TKJ 2</option>

                    <option value="X PPLG 1">X PPLG 1</option>
                    <option value="X PPLG 2">X PPLG 2</option>

                    <option value="X DKV 1">X DKV 1</option>
                    <option value="X DKV 2">X DKV 2</option>

                    <option value="XI TKJ 1">XI TKJ 1</option>
                    <option value="XI TKJ 2">XI TKJ 2</option>

                    <option value="XI PPLG 1">XI PPLG 1</option>
                    <option value="XI PPLG 2">XI PPLG 2</option>

                    <option value="XI DKV 1">XI DKV 1</option>
                    <option value="XI DKV 2">XI DKV 2</option>

                    <option value="XII TKJ 1">XII TKJ 1</option>
                    <option value="XII TKJ 2">XII TKJ 2</option>

                    <option value="XII PPLG 1">XII PPLG 1</option>
                    <option value="XII PPLG 2">XII PPLG 2</option>

                    <option value="XII DKV 1">XII DKV 1</option>
                    <option value="XII DKV 2">XII DKV 2</option>

                </select>


                <label for="status">
                    Status Kehadiran
                </label>

                <select id="status" required>

                    <option value="Hadir">
                        Hadir
                    </option>

                    <option value="Sakit">
                        Sakit
                    </option>

                    <option value="Izin">
                        Izin
                    </option>

                    <option value="Alpa">
                        Alpa
                    </option>

                </select>


                <button type="submit">
                    SIMPAN ABSENSI
                </button>

            </form>

        </div>


        <div class="data-header">

            <h2>
                Data Absensi
            </h2>

            <button
                type="button"
                id="hapusSemua"
                class="delete-all"
            >
                Hapus Semua
            </button>

        </div>


        <div class="table-container">

            <table>

                <thead>

                    <tr>

                        <th>No</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>Tanggal</th>
                        <th>Jam</th>
                        <th>Status</th>
                        <th>Aksi</th>

                    </tr>

                </thead>

                <tbody id="tabelAbsensi">

                </tbody>

            </table>

        </div>

    </div>


    <!-- LINK KE JAVASCRIPT -->
    <script src="script.js"></script>

</body>

</html>
