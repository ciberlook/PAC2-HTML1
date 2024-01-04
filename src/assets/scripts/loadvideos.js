window.addEventListener('load', cargarVideos(), false);

async function cargarVideos() {
    const video1 = document.querySelector('#video1');
    const video2 = document.querySelector('#video2');
    const video3 = document.querySelector('#video3');
    const video4 = document.querySelector('#video4');

    Promise.all([cargarVideo1(), cargarVideo2(), cargarVideo3(), cargarVideo4()])

    cargarVideo1();
    cargarVideo2();
    cargarVideo3();
    cargarVideo4();
}

async function cargarVideo1() {
    video1.src = "https://www.youtube.com/embed/8pN96nOt31g?si=Cw07FlkWawmtdwpu";
}

async function cargarVideo2() {
    video2.src = "https://www.youtube.com/embed/IJYNJsEB2uk?si=iKi3FYvdjV3tFV8L";
}

async function cargarVideo3() {
    video3.src = "https://www.youtube.com/embed/q6iI1iSdXGM?si=kv4-m5FjwQwaWuGI";
}

async function cargarVideo4() {
    video4.src = "https://www.youtube.com/embed/sXXWrW6DiJA?si=luoTW4dY1caxoXbw";
}