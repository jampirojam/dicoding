const json = '{ "name": "Yoda", "age": 20 }';
const errorJson = '{ ini bukan json }';

// SUCCESS
try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// ERROR PARSE
try {
    const user = JSON.parse(errorJson);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// FAIL
try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
    console.log(user.status)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// ERROR VALIDATION 
try {
    const user = JSON.parse(json);

    if (!user.status) {
        throw new SyntaxError("'status' is required.");
    }

    console.log(user.name);
    console.log(user.age);
    console.log(user.status)
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
