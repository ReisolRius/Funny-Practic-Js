let but = document.querySelector('#but');
let wrapper = document.body;
let sex = document.querySelector('#sex');
const inp1 = document.querySelector('#inp1');
const inp2 = document.querySelector('#inp2');

let counter = 0;
let move = 0;
let flag = false;
let boom = false;
let sexChange = false; // false - Male, true = Female

but.addEventListener('mouseenter', chek, false);
but.addEventListener('mouseout', delet, false);
but.addEventListener('mouseenter', sure, false);
but.addEventListener('click', confirm, false);

sex.addEventListener('change', changeSex, false);

function changeSex() {
    if (sexChange == false) {
        sexChange = true;
    }
    else {
        sexChange = false;
    }
}

function chek() {
    if (inp1.value.length == false) {
        but.textContent = 'Заполните поля';
    }
    else if  (inp2.value.length == false){
        but.textContent = 'Заполните поля';
    }
    else {
        run();
    }
}

function delet() {
    if ((flag == false) && (boom == false)) {
        but.textContent = 'Зарегистрироваться';
    }
}

function run(){
    counter++;
    if (move == 0) {
        but.style.transform = 'translate(200px, 0)';
        move = 1;
    }
    else if (move == 1) {
        but.style.transform = 'translate(200px, 100px)';
        move = 2;
    }
    else if (move == 2) {
        but.style.transform = 'translate(-200px, 100px)';
        move = 3;
    }
    else if (move == 3) {
        but.style.transform = 'translate(-200px, 0)';
        move = 0;
    }

    if (counter == 20) {
        but.style.transform = 'translate(0,0)';
        move = 4;
        flag = true;
    }
}

function sure() {
    if ((flag == true) && (sexChange == false)) {
        but.textContent = 'уверен?';
    }
    else if ((flag == true) && (sexChange == true)) {
        but.textContent = 'уверена?';
    }
}

function confirm() {
    if (flag == true) {
        but.textContent = 'Зарегистрироваться.';
        but.classList.add("go-away");
        flag = false;
        boom = true;
        explosion();
    }
}

function explosion() {
    but.textContent = 'FLASHBANG';
    setTimeout(byby, 1000);
}

function byby() {
    document.body.style.backgroundColor = '#fff';
    but.style.backgroundColor = '#fff';
    inp1.style.color = '#fff';
    inp2.style.color = '#fff';
    setTimeout(reset, 2000);
}

function reset() {
    boom = false;
    flag = false;
    but.classList.remove('go-away');
    but.textContent = 'Зарегистрироваться';
    document.body.style.backgroundColor = "#323232";
    but.style.color = '#323232';
    inp1.style.color = '#323232';
    inp2.style.color = '#323232';
    inp1.value = "";
    inp2.value = "";
    move = 0;
    counter = 0;
}