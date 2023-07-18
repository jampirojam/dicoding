async function watchMovie() {
    try {
        const money = await withDrawMoney(10);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);

        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

watchMovie().then(() => console.log('done'));

/*

Sintaks async dan await memungkinkan kita untuk menulis kode yang menangani asynchronous 
dengan cara yang sama seperti synchronous. Tentu ini membuat kode lebih mudah dipahami dan ditulis.

Penggunaan Promise secara langsung pun tidak terlepas dari callback, seperti .then() dan .catch(). 
Namun, dengan async dan await, kita bisa terlepas dari pola callback.

Async dan await benar-benar membuat pengalaman asynchronous layaknya synchronous, 
hingga dalam penanganan error-nya pun menggunakan beberapa hal yang sudah ada, seperti try, catch, dan throw.

*/