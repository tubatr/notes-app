const fs = require('fs');

// Test olarak basit bir metin yazalım
fs.appendFile('notlar.txt', 'Bu bir test notudur.\n', (err) => {
    if (err) {
        console.log('Dosya kaydedilemedi:', err);
    } else {
        console.log('Dosya başarıyla kaydedildi!');
    }
});
