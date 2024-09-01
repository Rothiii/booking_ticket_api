<p><a target="_blank" href="https://app.eraser.io/workspace/6aDMy6Pd3kag2YfSqosl" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

# booking_ticket_api
---

# Usecase
![image.png](/.eraser/6aDMy6Pd3kag2YfSqosl___GMY2RuqK0IPflq2gOsHndj7Er3O2___tErTymT_nmmxMYOg2ynAh.png "image.png")

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
![image.png](/.eraser/6aDMy6Pd3kag2YfSqosl___GMY2RuqK0IPflq2gOsHndj7Er3O2___jgfQDmNpEl4ZdqnY0KqJU.png "image.png")

## Struktur Tabel:
1. **Users**
    - `user_id` : ID unik untuk setiap pengguna.
    - `name` : Nama pengguna.
    - `email` : Email pengguna.
    - `﻿password` : Password pengguna
    - `role` : Peran pengguna (misalnya, "customer", "admin").
2. **Tickets**
    - `ticket_id` : ID unik untuk setiap tiket.
    - `event_name` : Nama acara.
    - `description` : Deskripsi singkat tentang acara.
    - `price` : Harga tiket.
    - `event_date` : Tanggal acara.
    - `availability` : Ketersediaan tiket (jumlah tiket yang tersisa).
3. **Transactions**
    - `transaction_id` : ID unik untuk setiap transaksi.
    - `user_id` : Referensi ke pengguna yang melakukan transaksi (hubungan dengan tabel **Users**).
    - `ticket_id` : Referensi ke tiket yang dipesan (hubungan dengan tabel **Tickets**).
    - `quantity` : Jumlah tiket yang dibeli.
    - `total_price` : Total harga yang dibayar.
    - `transaction_date` : Tanggal transaksi.
**Penjelasan Relasi:**

- **Users**: Tabel ini menyimpan data user, baik customer maupun admin.
- **Tickets**: Tabel ini menyimpan informasi tiket yang tersedia untuk berbagai acara.
- **Transactions**: Tabel ini menghubungkan user dengan tiket yang mereka pesan. Setiap transaksi mencatat user mana yang membeli tiket apa, berapa jumlah tiket yang dibeli, dan total harga yang dibayar. Dengan relasi many to one terhadap user dan relasi many to one terhadap tiket



<!-- eraser-additional-content -->
## Diagrams
<!-- eraser-additional-files -->
<a href="/README-Pemesanan Tiket-1.eraserdiagram" data-element-id="UxCTGk8KJqQ4kl_ho05Qh"><img src="/.eraser/6aDMy6Pd3kag2YfSqosl___GMY2RuqK0IPflq2gOsHndj7Er3O2___---diagram----68f2218afeab95349836e9cc8bdb0ac0-Pemesanan-Tiket.png" alt="" data-element-id="UxCTGk8KJqQ4kl_ho05Qh" /></a>
<!-- end-eraser-additional-files -->
<!-- end-eraser-additional-content -->
<!--- Eraser file: https://app.eraser.io/workspace/6aDMy6Pd3kag2YfSqosl --->