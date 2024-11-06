/*
    JavaScript memiliki kemampuan First Class Functions, 
    karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. 
    Kita bisa menyimpan function dalam variabel, 
    memberikan function sebagai parameter pada fungsi lainnya, 
    hingga mengembalikan function di dalam function.
*/

const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hola!');
    }
}

hello();
say(hello);
sayHello()();
say(sayHello); // not running cause there's function inside function
say(sayHello())

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if (!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
    names,
    newNames,
});