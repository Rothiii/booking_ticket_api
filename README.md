<p><a target="_blank" href="https://app.eraser.io/workspace/6aDMy6Pd3kag2YfSqosl" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

# booking_ticket_api
---

# Usecase
![image.png](/.eraser/6aDMy6Pd3kag2YfSqosl___GMY2RuqK0IPflq2gOsHndj7Er3O2___J-fO_0LQ1G72MCb7gxVlI.png "image.png")



## **Deskripsi**
1. Melihat Daftar Tiket yang Tersedia:
    - User dapat melihat daftar tiket yang tersedia untuk berbagai acara, dengan informasi seperti harga, tanggal, dan tempat acara.
2. Memesan atau Refund Tiket:
    - User memilih tiket yang ingin dibeli dan melakukan pemesanan, yang kemudian disimpan dalam tabel transaksi.
    - User memilih tiket yang ingin direfund dan data pemesanan di tabel transaksi dihapus, yang kemudian stok tiket ditambahkan kembali ke tabel tiket.
3. Melihat Riwayat Pembelian:
    - User dapat melihat riwayat pembelian tiket mereka, dengan rincian acara dan tanggal pembelian.
    - Admin dapat melihat riwayat pembelian tiket seluruhnya.
4. Mengelola Tiket
    - Admin dapat menambah, mengubah, atau menghapus tiket dari daftar tiket yang tersedia.
---

# **Entity Relationship Diagram**


![image.png](/.eraser/6aDMy6Pd3kag2YfSqosl___GMY2RuqK0IPflq2gOsHndj7Er3O2___Wf6MNga5WGefV2RFST019.png "image.png")



## Struktur Tabel:
1. **Users**
    - `user_id`  : ID unik untuk setiap pengguna.
    - `name`  : Nama pengguna.
    - `address`  : Alamat pengguna.
    - `number_phone`: Nomor Telepon pengguna.
2. **Tickets**
    - `ticket_id`  : ID unik untuk setiap tiket.
    - `price`  : Harga tiket.
    - `movie_id`  : Referensi ke movie yang sedang tayang(hubungan dengan tabel **Movies)**.
    - `availability`  : Ketersediaan tiket (jumlah tiket yang tersisa).
    - `show_date`  : Tanggal film yang akan ditayangkan.
    - `show_time`  : Waktu film yang akan ditayangkan.
3. **Transactions**
    - `transaction_id`  : ID unik untuk setiap transaksi.
    - `user_id`  : Referensi ke pengguna yang melakukan transaksi (hubungan dengan tabel **Users**).
    - `ticket_id`  : Referensi ke tiket yang dipesan (hubungan dengan tabel **Tickets**).
    - `quantity`  : Jumlah tiket yang dibeli.
    - `total_price`  : Total harga yang dibayar.
    - `transaction_date`  : Tanggal transaksi.
4. **Movies**
    - `movie_id`  : ID unik untuk setiap film.
    - `movie_name`  : Nama atau judul film.
    - `genre`  : Jenis genre film
    - `language`  : Bahasa film yang digunakan.

**Penjelasan Relasi:**

- **Users**: Tabel ini menyimpan data user. Dengan relasi one to many terhadap tabel **Transactions.**
- **Tickets**: Tabel ini menyimpan informasi tiket yang tersedia untuk berbagai film. Dengan relasi one to many terhadap tabel **Transactions, **dan relasi many to one terhadap tabel **Movies.**
- **Transactions**: Tabel ini menghubungkan user dengan tiket yang mereka pesan. Setiap transaksi mencatat user mana yang membeli tiket apa, berapa jumlah tiket yang dibeli, dan total harga yang dibayar. Dengan relasi many to one terhadap tabel **Users **dan relasi many to one terhadap tabel **Tickets.**
- **Movies: **Tabel ini menyimpan informasi film yang akan ditayangkan. Dengan relasi one to many dengan tabel **Tickets.**



<!-- eraser-additional-content -->
## Diagrams
<!-- eraser-additional-files -->
<a href="/README-Pemesanan Tiket-1.eraserdiagram" data-element-id="UxCTGk8KJqQ4kl_ho05Qh"><img src="/.eraser/6aDMy6Pd3kag2YfSqosl___GMY2RuqK0IPflq2gOsHndj7Er3O2___---diagram----4280831b844ba9582e1ebfbad42b6971-Pemesanan-Tiket.png" alt="" data-element-id="UxCTGk8KJqQ4kl_ho05Qh" /></a>
<!-- end-eraser-additional-files -->
<!-- end-eraser-additional-content -->
<!--- Eraser file: https://app.eraser.io/workspace/6aDMy6Pd3kag2YfSqosl --->