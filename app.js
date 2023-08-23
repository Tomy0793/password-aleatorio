const escucharBoton = document.getElementById("generar")


//Generar contraseñas aleatorias
const generarContraseña = (longitud) =>{
 const caracteres = ("ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
 let contraseña = ""

 for (i=0;i<longitud; i++){
   const indice = Math.floor(Math.random() * caracteres.length)
    contraseña += caracteres.charAt(indice)
}

return contraseña

}


const longitudContraseña = 9

escucharBoton.addEventListener ("click",() =>{
    const contraseñaAleatoria = generarContraseña(longitudContraseña) // variable donde retorna la contraseña
    alert("Su contraseña es: "+contraseñaAleatoria)
})




