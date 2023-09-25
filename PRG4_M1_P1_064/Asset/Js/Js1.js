// JavaScript source code
<script>
    // Pilih elemen tombol "Toggle navigation"
    const navbarToggle = document.getElementById("navbarToggle");

    // Tambahkan event listener untuk menangani klik pada tombol
    navbarToggle.addEventListener("click", function () {
        // Pilih elemen navbar-collapse
        const navbarCollapse = document.getElementById("navbarNav");

    // Periksa apakah elemen navbar-collapse sedang terbuka
    const isNavbarOpen = navbarCollapse.classList.contains("show");

    // Jika elemen navbar-collapse sedang terbuka, tambahkan kelas 'show' agar tetap terbuka
    if (isNavbarOpen) {
        navbarCollapse.classList.add("show");
        }
    });
</script>
