//----------------VIDEO---------------------

let video= document.querySelector("#video");
let tiempoVideo= document.querySelector(".tiempo");
let tiempoActual;
let minutos;
let segundos;

window.addEventListener('load',()=>{  
    tiempoVideo.textContent= transTiempo(video.duration)
})

let transTiempo=(tiempo)=>{ 
    if(tiempo<60){
        minutos=0;
        segundos=tiempo.toFixed(0)
    }else{
        minutos=parseInt(tiempo/60);
        segundos=parseInt(tiempo%60);
    }
    if(tiempo>59){
        minutos= Math.floor(tiempo/60);
        segundos=Math.floor(tiempo%60);
        console.log(minutos)
        console.log(segundos)
    }
return minutos+":"+segundos
}

const inicioVideo=()=>{
    video.play();
    tiempoActual=setInterval(()=>{
        let tiempoRepro=document.querySelector(".tiempoRepro")
        tiempoRepro.textContent=transTiempo(video.currentTime);
    },1000);
    console.log(tiempoActual)
    //let estado=document.querySelector("barraEstado")
    //estado.style.width=tiempoRepro+"px";
}

const pausaVideo=()=>{
    video.pause();
    clearInterval(tiempoActual)
}

//----------------ROMPECABEZAS---------------------

const img_puzz= document.querySelector("#puzz_img1");
const img_puzz2= document.querySelector("#puzz_img2");
const img_puzz3= document.querySelector("#puzz_img3");
const target_img1= document.querySelector("#cuadro_img1");
const target_img2= document.querySelector("#cuadro_img2");
const target_img3= document.querySelector("#cuadro_img3");
let destino= document.querySelector(".cuadro");
const reinicio=document.querySelector(".boton-reinicio");

img_puzz.addEventListener('dragstart',(event)=>{
    //let info= img_puzz.textContent;
    event.dataTransfer.setData("Text",img_puzz.getAttribute("id"));
    //destino.style.border= "2px solid black";  *NO ENTIENDO XQ NO ACTUA IGUAL QUE LAS 3 LINEAS DE ABAJO*
    target_img1.style.border= "2px solid black";
    target_img2.style.border= "2px solid black";
    target_img3.style.border= "2px solid black";
})
console.dir(img_puzz)

img_puzz2.addEventListener('dragstart',(event)=>{
    //let info= img_puzz.textContent;
    event.dataTransfer.setData("Text",img_puzz2.getAttribute("id"));
    //destino.style.border= "2px solid black";  *NO ENTIENDO XQ NO ACTUA IGUAL QUE LAS 3 LINEAS DE ABAJO*
    target_img1.style.border= "2px solid black";
    target_img2.style.border= "2px solid black";
    target_img3.style.border= "2px solid black";
})
img_puzz3.addEventListener('dragstart',(event)=>{
    //let info= img_puzz.textContent;
    event.dataTransfer.setData("Text",img_puzz3.getAttribute("id"));
    //destino.style.border= "2px solid black";  *NO ENTIENDO XQ NO ACTUA IGUAL QUE LAS 3 LINEAS DE ABAJO*
    target_img1.style.border= "2px solid black";
    target_img2.style.border= "2px solid black";
    target_img3.style.border= "2px solid black";
})
target_img1.addEventListener('dragover', (evento)=>{
    evento.preventDefault();
})
target_img2.addEventListener('dragover', (evento)=>{
    evento.preventDefault();
})
target_img3.addEventListener('dragover', (evento)=>{
    evento.preventDefault();
})

target_img1.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
   if(info == "puzz_img1"){
    target_img1.innerHTML='<img src="./assets/imagenes/rompe1.png" width="275px" height="400px">'
    img_puzz.style.display="none";
    }else{
        target_img1.style.border= "3px solid red";
    }
    evento.dataTransfer.clearData("Text");
})
target_img2.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    if(info == "puzz_img2"){
    target_img2.innerHTML='<img src="./assets/imagenes/rompe2.png" width="275px" height="400px">'
    img_puzz2.style.display="none";
    }else{
        target_img2.style.border= "3px solid red";
    }
    evento.dataTransfer.clearData("Text");
})
target_img3.addEventListener('drop',(evento)=>{
    let info=evento.dataTransfer.getData("Text");
    if(info == "puzz_img3"){
    target_img3.innerHTML='<img src="./assets/imagenes/rompe3.png" width="275px" height="400px">'
    img_puzz3.style.display="none";
    }else{
        target_img3.style.border= "3px solid red";
    }
    evento.dataTransfer.clearData("Text");
})

reinicio.addEventListener('click',()=>{
    window.location.reload()
})
