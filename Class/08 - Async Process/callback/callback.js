function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
        callback(users);
    }, 3000);
}

// Simple Callback
getUsers((users) => {
    console.log(users);
});


// Readable Callback
function usersCallback(users) {
    console.log(users);
}

getUsers(usersCallback);