# online-course-backend

## Instalasi

1. **Clone Repository**

   - Clone repositori ini ke dalam direktori lokal Anda:

     ```
     git clone https://github.com/nama-username/repo.git
     ```

2. **Pindah ke Direktori Proyek**

   - Pindah ke direktori proyek yang baru dibuat:

     ```
     cd nama-proyek
     ```

3. **Instalasi Dependencies**

   - Instal semua dependensi yang dibutuhkan dengan menggunakan npm:

     ```
     npm install
     ```

4. **Konfigurasi Database**

   - Konfigurasikan koneksi database Anda di dalam file `config/database.js`. Pastikan Anda telah mengatur parameter koneksi seperti host, username, password, dan nama database.

5. **Menjalankan Create dan Migrasi Database**

   - Menjalankan pembuatan konfigurasi database ke postgres database

     ```
     npx sequelize-cli db:create
     ```

   - Setelah mengonfigurasi koneksi database, jalankan migrasi untuk membuat tabel-tabel yang diperlukan di dalam database:

     ```
     npx sequelize-cli db:migrate
     ```

6. **Menjalankan Aplikasi**

   - Setelah migrasi berhasil, Anda dapat menjalankan aplikasi dengan perintah:

     ```
     npm start
     ```

7. **Akses Aplikasi**
   - Akses aplikasi Anda melalui browser dengan URL berikut: `http://localhost:port` (port biasanya 3000 jika tidak diubah).

# Dokumentasi API

Berikut adalah dokumentasi API yang tersedia dalam proyek ini:

## Courses

| Endpoint                | Metode | Deskripsi                                                                |
| ----------------------- | ------ | ------------------------------------------------------------------------ |
| `/courses/`             | GET    | Mendapatkan semua kursus yang tersedia.                                  |
| `/courses/:id/students` | GET    | Mendapatkan daftar siswa yang terdaftar dalam kursus dengan ID tertentu. |
| `/courses/create`       | POST   | Membuat kursus baru.                                                     |
| `/courses/update/:id`   | POST   | Memperbarui kursus yang ada berdasarkan ID tertentu.                     |
| `/courses/delete/:id`   | GET    | Menghapus kursus berdasarkan ID tertentu.                                |

## Students

| Endpoint                | Metode | Deskripsi                                                                 |
| ----------------------- | ------ | ------------------------------------------------------------------------- |
| `/students/`            | GET    | Mendapatkan semua mahasiswa yang terdaftar.                               |
| `/students/create`      | POST   | Membuat mahasiswa baru.                                                   |
| `/students/:id/courses` | GET    | Mendapatkan daftar kursus yang diikuti oleh mahasiswa dengan ID tertentu. |
| `/students/update/:id`  | POST   | Memperbarui data mahasiswa berdasarkan ID tertentu.                       |
| `/students/delete/:id`  | GET    | Menghapus mahasiswa berdasarkan ID tertentu.                              |

## Enrollments

| Endpoint                  | Metode | Deskripsi                                             |
| ------------------------- | ------ | ----------------------------------------------------- |
| `/enrollments/`           | GET    | Mendapatkan semua data pendaftaran.                   |
| `/enrollments/create`     | POST   | Membuat pendaftaran baru.                             |
| `/enrollments/update/:id` | POST   | Memperbarui data pendaftaran berdasarkan ID tertentu. |
| `/enrollments/delete/:id` | DELETE | Menghapus data pendaftaran berdasarkan ID tertentu.   |
