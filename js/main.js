// document.getElementById("enviar").addEventListener("click", multiplicar);
document.getElementById("cantidad").addEventListener("change", multiplicar);
document.getElementById("valor-unitario").addEventListener("keyup", multiplicar);
function multiplicar(evento) {
    const cantidad = document.getElementById("cantidad").value;
    const vrUnitario = document.getElementById("valor-unitario").value;
    const resultado = cantidad*vrUnitario;    
    document.getElementById("valor-total").value = resultado;
    //Condicional para hacer que la página se recargue sólo cuando se da click
    // if(evento.type == "click") {
    //     evento.preventDefault();
    // }
}
