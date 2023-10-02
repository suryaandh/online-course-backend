# online-course-backend

## Instalasi

1. **Clone Repository**

   - Clone repositori ini ke dalam direktori lokal Anda:

     ```
     git clone https://github.com/suryaandh/online-course-backend.git
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

| Endpoint                | Metode | Deskripsi                                                                   |
| ----------------------- | ------ | --------------------------------------------------------------------------- |
| `/courses/`             | GET    | Mendapatkan semua course yang tersedia.                                     |
| `/courses/:id/students` | GET    | Mendapatkan daftar students yang terdaftar dalam course dengan ID tertentu. |
| `/courses/create`       | POST   | Membuat course baru.                                                        |
| `/courses/update/:id`   | POST   | Memperbarui course yang ada berdasarkan ID tertentu.                        |
| `/courses/delete/:id`   | GET    | Menghapus course berdasarkan ID tertentu.                                   |

## Students

| Endpoint                         | Metode | Deskripsi                                                                |
| -------------------------------- | ------ | ------------------------------------------------------------------------ |
| `/students/`                     | GET    | Mendapatkan semua students yang terdaftar.                               |
| `/students/create`               | POST   | Membuat students baru.                                                   |
| `/students/:id/courses`          | GET    | Mendapatkan daftar kursus yang diikuti oleh students dengan ID tertentu. |
| `/students/update/:id`           | POST   | Memperbarui data students berdasarkan ID tertentu.                       |
| `/students/delete/:id`           | GET    | Menghapus students berdasarkan ID tertentu.                              |
| `/students/:id/courses`          | GET    | Mendapatkan students mengikuti course berdasarkan ID tertentu.           |
| `/students/delete/:id`           | GET    | Menghapus students berdasarkan ID tertentu.                              |
| `/students/:id/enroll`           | GET    | Mengambil daftar kursus yang tersedia untuk pendaftaran mahasiswa.       |
| `/students/:id/enroll/:courseId` | GET    | Mendaftarkan mahasiswa untuk kursus tertentu.                            |

## Enrollments

| Endpoint                  | Metode | Deskripsi                                             |
| ------------------------- | ------ | ----------------------------------------------------- |
| `/enrollments/`           | GET    | Mendapatkan semua data pendaftaran.                   |
| `/enrollments/create`     | POST   | Membuat pendaftaran baru.                             |
| `/enrollments/update/:id` | POST   | Memperbarui data pendaftaran berdasarkan ID tertentu. |
| `/enrollments/delete/:id` | DELETE | Menghapus data pendaftaran berdasarkan ID tertentu.   |
