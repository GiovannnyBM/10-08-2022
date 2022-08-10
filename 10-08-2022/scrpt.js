let boton=document.querySelector('form')
boton.addEventListener('submit',()=>{
    alert('Respuesta enviada correctamente')
})

let boton2=document.querySelector('form')
boton.addEventListener('reset',()=>{
    alert('¿Estas seguro?')
})

const Myimg1=document.getElementById('Myimg1')
Myimg1.addEventListener('load',()=>{

alert('la imagen ha sido cargada')
})

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})


let tecla_presionada =document.getElementById('espacio');
tecla_presionada.addEventListener("keydown", onkeydown);
         function onkeydown(event) {
            document.getElementById("estado")
            .innerHTML='keydown:'
            +event.key + '<br>'}
         