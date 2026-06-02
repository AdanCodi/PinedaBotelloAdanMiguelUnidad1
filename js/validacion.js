const formulario =
document.getElementById("formRegistro");

if(formulario){

    formulario.addEventListener(
    "submit",
    function(e){

        const nombre =
        document.getElementById("nombre").value;

        const correo =
        document.getElementById("correo").value;

        const password =
        document.getElementById("password").value;

        const captcha =
        document.getElementById("captcha").value;

        if(nombre.trim()===""){
            e.preventDefault();
            alert("Ingrese su nombre");
            return;
        }

        if(!correo.includes("@")){
            e.preventDefault();
            alert("Correo inválido");
            return;
        }

        if(password.length < 8){
            e.preventDefault();
            alert(
            "La contraseña debe tener mínimo 8 caracteres"
            );
            return;
        }

        if(captcha != 8){
            e.preventDefault();
            alert(
            "Validación humana incorrecta"
            );
            return;
        }

        const usuario =
        new Usuario(nombre,correo);

        alert(
        usuario.mostrarDatos()
        );

    });

}