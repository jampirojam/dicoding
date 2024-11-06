try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

try {
    console.log("Awal blok try");
    errorCode;                      // Error di sini
    console.log("Akhir blok try");  // Tidak Terbaca, karena sudah error di atasnya
} catch (error) {
    console.log("Terjadi error!");  // Output akhir.
}

try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}