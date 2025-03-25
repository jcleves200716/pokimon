
function register(){
    let correo = document.getElementById('correo').value
    let contraseña = document.getElementById ('contra').value
    let confimarContraseña = document.getElementById('confi-contra')

let arreglo = [
    correo,
    contraseña,
    confimarContraseña,
]
console.log( arreglo );

    
    if(contraseña == confimarContraseña){
        alert('se a registrado con exito');
        location =''
    } else{
        alert('las contraseñas no coincicen')
    }
}