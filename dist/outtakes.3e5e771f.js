window.addEventListener("load", cargarVideos(), false);
async function cargarVideos() {
    const video11 = document.querySelector("#video1");
    const video21 = document.querySelector("#video2");
    const video31 = document.querySelector("#video3");
    const video41 = document.querySelector("#video4");
    await Promise.all([
        cargarVideo1(),
        cargarVideo2(),
        cargarVideo3(),
        cargarVideo4()
    ]);
}
function cargarVideo1() {
    video1.src = "https://www.youtube.com/embed/8pN96nOt31g?si=Cw07FlkWawmtdwpu";
}
function cargarVideo2() {
    video2.src = "https://www.youtube.com/embed/IJYNJsEB2uk?si=iKi3FYvdjV3tFV8L";
}
function cargarVideo3() {
    video3.src = "https://www.youtube.com/embed/q6iI1iSdXGM?si=kv4-m5FjwQwaWuGI";
}
function cargarVideo4() {
    video4.src = "https://www.youtube.com/embed/sXXWrW6DiJA?si=luoTW4dY1caxoXbw";
}

//# sourceMappingURL=outtakes.3e5e771f.js.map
