function multiplicar(){
    const cantidad = document.getElementById("cantidad").value;
    const vrUnitario = document.getElementById("valor-unitario").value;
    const resultado = cantidad*vrUnitario;
    document.getElementById("valor-total").value = resultado;
}