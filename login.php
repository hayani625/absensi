<!DOCTYPE html>
<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Login - Absensi Sekolah</title>

    <!-- LINK KE CSS -->
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div class="login-container">

        <div class="login-box">

            <h1>Absensi Sekolah</h1>

            <p class="subtitle">
                Sistem Informasi Absensi Siswa
            </p>

            <div id="errorLogin" class="error">
                Username atau password salah!
            </div>

            <form id="formLogin">

                <label for="username">
                    Username
                </label>

                <input
                    type="text"
                    id="username"
                    placeholder="Masukkan username"
                    required
                >

                <label for="password">
                    Password
                </label>

                <input
                    type="password"
                    id="password"
                    placeholder="Masukkan password"
                    required
                >

                <button type="submit">
                    LOGIN
                </button>

            </form>

            <!-- UCAPAN SELAMAT DATANG -->
            <p class="link-page">
                Selamat Datang di Absensi Siswa
            </p>

        </div>

    </div>


    <!-- LINK KE JAVASCRIPT -->
    <script src="script.js"></script>

</body>

</html>
