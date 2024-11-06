// type on browser console

document

document.head;
document.body;
document.getElementById('id');
document.getElementsByName('atributName');
document.getElementsByTagName('tagName');
document.getElementsByClassName('className');
document.querySelector('.class');
document.querySelector('#id');
document.querySelectorAll('.class');


const tests = document.querySelectorAll('.class');
for (let test of tests) {
    console.log(test);
}

// create element
document.createElement('p');

// add inner text
document.createElement('p').innerText('Selamat Datang');
// add inner HTML
document.createElement('p').innerText('<b>Selamat Datang</b>');


document.createElement('img');

// add attribute
document.createElement('img').setAttribute('src', 'https://picsum.photos/200/300');

// add style
const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
}

// add new element
// #test ==> div
const img = createElement('img');
document.getElementById('test').appendChild(img);
document.getElementById('test').insertBefore(img);