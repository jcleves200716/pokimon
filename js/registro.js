
function register(){
    let correo = document.getElementById('correo').value
    let contraseña = document.getElementById ('contra').value
    let confiContra = document.getElementById('confiContra').value

let arreglo = [
    correo,
    contraseña,
    confiContra,
]
console.log( arreglo );

    if (!correo || !contraseña || !confiContra) {
        alert('Por favor complete todos los campos');
        return;
    }
    if(contraseña == confiContra){
        alert('se a registrado con exito');
        location.href ='../vistas/login.html'

        localStorage.setItem('registro-correo', correo)
        localStorage.setItem('registro-contra', contra)
    } else{
        alert('las contraseñas no coincicen')
    }
}