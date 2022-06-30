function validoFormulario() {
    let nombre = document.forms["formulario"]["nombre"].value
    let apellido = document.forms["formulario"]["apellido"].value
    let telefono = document.forms["formulario"]["telefono"].value
    let email = document.forms["formulario"]["mail"].value
    let letras = new RegExp('^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\'\`\'\-]+$', 'i');

    if (nombre == "") {
        alert("Ingrese su nombre");
        document.forms["formulario"]["nombre"].focus() 
        return false;
    }
    if (!letras.test(nombre)) {
        alert("Ingrese un nombre válido");
        document.forms["formulario"]["nombre"].focus()
        return false;
      }
    if (apellido == "") {
        alert("Ingrese su apellido");
        document.forms["formulario"]["apellido"].focus()
        return false;
      }
      if (!letras.test(apellido)) {
        alert("Ingrese un apellido válido");
        document.forms["formulario"]["apellido"].focus()
        return false;
      }
      if (telefono == "") {
        alert("Ingrese su telefono");
        document.forms["formulario"]["telefono"].focus()
        return false;
      }
      if (isNaN(telefono)) {
        alert("Solo ingrese números en el teléfono");
        document.forms["formulario"]["telefono"].focus()
        return false;
      }
      if (email == "") {
        alert("Debe completar su email");
        document.forms["formulario"]["email"].focus()
        return false;
      }
  }