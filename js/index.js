
function Loguear() {
    let username = document.getElementById('username').value
    let password = document.getElementById('clave').value

    if(username == 'lovex14' && password == '123456'){
        alert('Usuario valido')
    }else{
        alert('usuario incorrecto')
    }  

}

function register(){
    let correo = document.getElementById('correo').value
    let contraseña = document.getElementById ('contra').value
    let confimarContraseña = document.getElementById('confi-contra')

    if(contraseña == contraseña ){
        alert('se a registrado con exito')
    } else{
        alert('las contraseñas no coincicen')
    }
}