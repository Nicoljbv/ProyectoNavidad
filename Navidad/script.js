let papaNoelPlay = document.getElementById("btn1");
let papaNoelStop = document.getElementById("btn2");
let bailaNoel = document.getElementById("baila")
let bailaMusica = new Audio ("C:/Users/LENOVO/Downloads/Navidad/audio/allWant.mp3")
function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) /1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return{
        tiempoFaltante,
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes
    }
};

console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante, dia, hora, minuto, segundo, mensaje){
    const d = document.getElementById(dia);
    const h = document.getElementById(hora);
    const m = document.getElementById(minuto);
    const s = document.getElementById(segundo);

    const tiempoActual = setInterval( ()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        d.innerHTML = t.diasFaltantes;
        h.innerHTML = t.horasFaltantes;
        m.innerHTML = t.minutosFaltantes;
        s.innerHTML = t.segundosFaltantes;

        if (t.tiempoFaltante <=1) {
            clearInterval(tiempoActual)
            c = document.getElementById('mensaje')
            c.innerHTML=mensaje
            d.innerHTML = '00';
            h.innerHTML = '00';
            m.innerHTML = '00';
            s.innerHTML = '00';
            papaNoel='on';
            bailaNoel.classList.add("on");
            papaNoelPlay.classList.add("color");
            papaNoelStop.classList.add("color")

        }
    }, 1000);

}
cuentaRegresiva('Nov 08 2023 22:12:00 GMT-0500', 'dia', 'hora', 'minuto', 'segundo', 'Feliz Navidad');

function bailaPapaNoel(){
    bailaMusica.play();
}
function detentePapaNoel() {
    bailaMusica.pause();
}
/*
function cuentaRegresiva(tiempoFaltante,reloj,mensaje) {
    
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval( ()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `${t.diasFaltantes}d ${t.horasFaltantes}h ${t.minutosFaltantes}m ${t.segundosFaltantes}s`;

       if (t.tiempoFaltante <=1) {
        clearInterval(tiempoActual)
        e.innerHTML = mensaje;
       }
    }, 1000);
}*/

//cuentaRegresiva('Nov 09 2023 14:23:00 GMT-0500', 'cuentaRegresiva', 'Feliz Navidad');
