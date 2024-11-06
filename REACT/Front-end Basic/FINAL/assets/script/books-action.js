// DOM
document.addEventListener("DOMContentLoaded", function () {
    // constant
    const notCompletedList = document.getElementById("not_completed_list");
    const completedList = document.getElementById("completed_list");
    const form = document.getElementById("form");

    // updatable
    let books = JSON.parse(localStorage.getItem("books")) || [];

    generateBooks();

    function generateBooks() {
        notCompletedList.innerHTML = "";
        completedList.innerHTML = "";

        const notCompletedFilter = books.filter((book) => !book.isComplete);
        const completedFilter = books.filter((book) => book.isComplete);

        if (notCompletedFilter.length === 0) {
            notCompletedList.innerHTML = "<p>Data buku kosong</p>";
        } else {
            notCompletedFilter.forEach((book) => {
                const li = document.createElement("li");
                li.setAttribute("id", book.id);
                const info = document.createElement("div");
                info.classList.add("information");
                info.innerHTML = `
                    <p>${book.title}</p>
                    <p>${book.author}</p>
                    <p>${book.year}</p>
                    <div class="action">
                        <button onclick="move(${book.id})">Pindah</button>
                        <button onclick="del(${book.id})">Hapus</button>
                        <button onclick="edit(${book.id})">Sunting</button>
                    </div>
                `;

                li.appendChild(info)
                notCompletedList.appendChild(li);
            });
        }

        if (completedFilter.length === 0) {
            completedList.innerHTML = "<p>Data buku kosong</p>";
        } else {
            completedFilter.forEach((book) => {
                const li = document.createElement("li");
                li.setAttribute("id", book.id);
                const info = document.createElement("div");
                info.classList.add("information");
                info.innerHTML = `
                    <p>${book.title}</p>
                    <p>${book.author}</p>
                    <p>${book.year}</p>
                    <div class="action">
                        <button onclick="move(${book.id})">Pindah</button>
                        <button onclick="del(${book.id})">Hapus</button>
                        <button onclick="edit(${book.id})">Sunting</button>
                    </div>
                `;

                li.appendChild(info)
                completedList.appendChild(li);
            });
        }
    }

    window.edit = function(id) {
        const idx = books.findIndex((book) => book.id === id);
        const editedBook = books[idx];

        let title = prompt('Masukkan judul baru:', editedBook.title);
        let author = prompt('Masukkan nama penulis:', editedBook.author);
        let year = prompt('Masukkan tahun terbit:', editedBook.year);

        if (validation(title)) {
            editedBook.title = title;
        }

        if (validation(author)) {
            editedBook.author = author;
        }

        if (validation(year)) {
            /^\d+$/.test(year) && parseInt(year) >= 1900 && parseInt(year) <= 2099
                ? editedBook.year = parseInt(year) 
                : editedBook.year = editedBook.year;
        }

        localStorage.setItem('books', JSON.stringify(books));
        generateBooks();
    };

    window.move = function (id) {
        console.log("masuk");
        const idx = books.findIndex((book) => book.id === id);
        books[idx].isComplete = !books[idx].isComplete;

        localStorage.setItem("books", JSON.stringify(books));
        generateBooks();
    };

    window.del = function (id) {
        console.log("masuk sini");
        const deletedBook = books.find((book) => book.id === id);

        const isConfirmed = confirm(
            `Yakin ingin menghapus buku "${deletedBook.title}"?`
        );

        if (isConfirmed) {
            books = books.filter((book) => book.id !== id);
            localStorage.setItem("books", JSON.stringify(books));
            generateBooks();
        }
    };

    function add(title, author, year, isComplete) {
        const book = {
            id: +new Date(),
            title,
            author,
            year,
            isComplete
        };

        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
        generateBooks();
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = document.getElementById("year").value;
        const isComplete = document.getElementById("is_completed").checked;

        if (title && author && year) {
            add(title, author, parseInt(year), isComplete);
            form.reset();
        } else {
            alert("Mohon isi semua kolom!");
        }
    });

    function validation(text) {
        return text !== null && text !== "";
    }
});