// DOM
document.addEventListener("DOMContentLoaded", function () {
    // constant
    const notCompletedList = document.getElementById("not_completed_list");
    const completedList = document.getElementById("completed_list");
    const search = document.getElementById("search");

    // updatable
    let books = JSON.parse(localStorage.getItem("books")) || [];

    window.search = function() {
        notCompletedList.innerHTML = "";
        completedList.innerHTML = "";

        const keyword = search.value.toLowerCase();
        const notCompletedFilter = books.filter(
            (book) => !book.isComplete && book.title.toLowerCase().includes(keyword)
        );
        const completedFilter = books.filter(
            (book) => book.isComplete && book.title.toLowerCase().includes(keyword)
        );

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
});