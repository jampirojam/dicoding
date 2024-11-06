/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

// ADD THIS IMPORT
const { promisify } = require('util');

function getProvinces(countryId, callback) {
    setTimeout(() => {
        if (countryId === 'id') {
            callback(null, [
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
            ]);
            return;
        }

        callback(new Error('Country not found'), null);
    }, 1000);
}

// CONVERT WITH THIS
const getProvincePromises = promisify(getProvinces);

// CHANGE METHODE
getProvincePromises("id")
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

// CHANGE THIS
// module.exports = { getProvinces: getProvinces };
module.exports = { getProvinces: getProvincePromises };