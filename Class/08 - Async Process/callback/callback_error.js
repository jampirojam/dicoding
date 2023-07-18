// ERROR CALLBACK
function getNewUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

function newUsersCallback(error, users) {
    if (error) {
        console.log('process failed:', error.message);
        return;
    }
    console.log('process success:', users);
}

getNewUsers(false, newUsersCallback);
getNewUsers(true, newUsersCallback);