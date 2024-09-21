// src/models/db.ts
import mysql from 'mysql2/promise';

// Membuat pool koneksi ke MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'manajemen_pemesanan_tiket_movie',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Fungsi untuk cek koneksi
export const checkConnection = async (): Promise<void> => {
  try {
    const connection = await pool.getConnection();
    console.log('Koneksi ke database berhasil!');
    connection.release();
  } catch (error) {
    console.error('Gagal terhubung ke database:', error);
  }
};

// Fungsi untuk mengeksekusi procedure atau function
export const executeQuery = async (procedure: string, data: any[] = []): Promise<any> => {
  try {
    const connection = await pool.getConnection();
    
    // Menjalankan procedure atau function dengan data
    const [results] = await connection.execute(`${procedure}`, data);

    connection.release(); // Melepaskan koneksi kembali ke pool
    return results;
  } catch (error) {
    console.error('Gagal mengeksekusi query:', error);
    throw error;
  }
};

export default pool;
