# Usecase

![image](https://github.com/user-attachments/assets/5de35c1e-12e6-4409-8b3b-fc33dd37ed4a)

## **Deskripsi**

1. Melihat Daftar Tiket yang Tersedia:
    - User dapat melihat daftar tiket yang tersedia untuk berbagai acara, dengan informasi seperti harga, tanggal, dan tempat acara.
2. Memesan Tiket:
    - User memilih tiket yang ingin dibeli dan melakukan pemesanan, yang kemudian disimpan dalam tabel transaksi.
3. Refund Tiket:
    - User memilih tiket yang ingin direfund dan data pemesanan di tabel transaksi dihapus, yang kemudian stok tiket ditambahkan kembali ke tabel tiket.
4. Melihat Riwayat Pembelian:
    - User dapat melihat riwayat pembelian tiket mereka, dengan rincian acara dan tanggal pembelian.

---

# **Entity Relationship Diagram**

![image](https://github.com/user-attachments/assets/3e783450-87ac-4494-a6aa-e9d44e2c24b3)

![image](https://github.com/user-attachments/assets/82bf04cb-8070-40f2-ba53-3f9b593f9cc4)


## Struktur Tabel:

1. **Users**
    - `user_id` : ID unik untuk setiap pengguna.
    - `name` : Nama pengguna.
    - `address` : Alamat pengguna.
    - `number_phone`: Nomor Telepon pengguna.
2. **Tickets**
    - `ticket_id` : ID unik untuk setiap tiket.
    - `price` : Harga tiket.
    - `movie_id` : Referensi ke movie yang sedang tayang(hubungan dengan tabel **Movies)**.
    - `availability` : Ketersediaan tiket (jumlah tiket yang tersisa).
    - `show_date` : Tanggal film yang akan ditayangkan.
    - `show_time` : Waktu film yang akan ditayangkan.
3. **Transactions**
    - `transaction_id` : ID unik untuk setiap transaksi.
    - `user_id` : Referensi ke pengguna yang melakukan transaksi (hubungan dengan tabel **Users**).
    - `ticket_id` : Referensi ke tiket yang dipesan (hubungan dengan tabel **Tickets**).
    - `quantity` : Jumlah tiket yang dibeli.
    - `total_price` : Total harga yang dibayar.
    - `transaction_date` : Tanggal transaksi.
4. **Movies**
    - `movie_id` : ID unik untuk setiap film.
    - `movie_name` : Nama atau judul film.
    - `genre` : Jenis genre film
    - `language` : Bahasa film yang digunakan.

**Penjelasan Relasi:**

- **Users**: Tabel ini menyimpan data user. Dengan relasi one to many terhadap tabel **Transactions.**
- **Tickets**: Tabel ini menyimpan informasi tiket yang tersedia untuk berbagai film. Dengan relasi one to many terhadap tabel **Transactions,** dan relasi many to one terhadap tabel **Movies.**
- **Transactions**: Tabel ini menghubungkan user dengan tiket yang mereka pesan. Setiap transaksi mencatat user mana yang membeli tiket apa, berapa jumlah tiket yang dibeli, dan total harga yang dibayar. Dengan relasi many to one terhadap tabel **Users** dan relasi many to one terhadap tabel **Tickets.**
- **Movies:** Tabel ini menyimpan informasi film yang akan ditayangkan. Dengan relasi one to many dengan tabel **Tickets.**
